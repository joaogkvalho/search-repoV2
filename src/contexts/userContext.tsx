import { createContext, FormEvent, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface UserInfo {
  avatar_url: string
  login: string
  name: string
  followers: number
  following: number
  public_repos: number
}

interface UserProviderProps {
    children: ReactNode
}

interface UserContextData {
    searchUserInfo: (event: FormEvent, githubUser: string) => void
    userInfo: UserInfo | undefined
    removeUserData: () => void
}

export const UserContext = createContext({} as UserContextData)

export function UserProvider(props: UserProviderProps){    
    const [userInfo, setUserInfo] = useState<UserInfo>()

    function setUserInfoOnLocalStorage(data: UserInfo){
      localStorage.setItem('@user:data', JSON.stringify(data))
    }

    function removeUserData(){
      localStorage.removeItem('@user:data')

      setUserInfo(undefined)
    }

    async function searchUserInfo(event: FormEvent, githubUser: string){
        event.preventDefault()

        if(githubUser){
          let response = await fetch(`https://api.github.com/users/${githubUser}`)
    
          if(response.ok){
            let data: UserInfo = await response.json()
    
            setUserInfo(data)
            setUserInfoOnLocalStorage(data)
          } else {
            toast.error('Usuário inválido', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
          }
        } else {
          toast.warn('Preencha o campo de usuário', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        }
    }

    useEffect(() => {
      if(userInfo === undefined){
        setUserInfo(JSON.parse(localStorage.getItem('@user:data') as string))
      }
    }, [])

    return(
        <UserContext.Provider value={{ userInfo, searchUserInfo, removeUserData }}>
            {props.children}
        </UserContext.Provider>
    )
}