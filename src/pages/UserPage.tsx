import { CaretLeft } from "phosphor-react"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { LoadingSpinner } from "../components/LoadingSpinner"
import { Logo } from "../components/Logo"
import { RepositoryList } from "../components/RepositoryList"
import { UserContext } from "../contexts/userContext"

interface Repository {
    name: string
    description: string
    html_url: string
}

export function UserPage(){
    const [userRepos, setUserRepos] = useState<Repository[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const { userInfo, removeUserData } = useContext(UserContext)

    console.log(userInfo?.login)

    async function searchUserRepos(){
        setIsLoading(true)
        let response = await fetch(`https://api.github.com/users/${userInfo?.login}/repos`)
  
        if(response.ok){
            let data = await response.json()

            setIsLoading(false)
            setUserRepos(data)
        } else {
          console.log('erro na chamada a API')
        }
    }

    useEffect(() => {
        searchUserRepos()
    }, [])

    return(
        <div className="w-[100%] max-w-[1000px] flex flex-col items-center justify-center mx-auto">
            <header className="w-[100%] flex flex-col md:flex-row lg:flex-row items-center justify-center md:justify-between lg:justify-between mt-8 px-8">
                <Logo />

                <Link 
                    className="flex items-center justify-center mt-4" 
                    to="/"
                >
                    <button
                        onClick={removeUserData}
                        className="flex items-center justify-center text-lg text-gray-400 font-semibold"
                    >
                        <CaretLeft className="mr-3" />
                        Voltar
                    </button>
                </Link>
            </header>

            <div className="w-[100%] max-w-[650px] mt-14 flex flex-col items-center justify-center">
                <img
                    className="w-[200px] rounded-full"
                    src={userInfo?.avatar_url} 
                    alt={userInfo?.name} 
                />
                <h1 className="text-3xl font-bold text-gray-700 my-4">
                    {userInfo?.login}
                </h1>

                <div className="flex text-center my-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-700">
                            {userInfo?.followers}
                        </h1>
                        <span className="text-sm text-gray-500 mt-2">
                            Seguidores
                        </span>
                    </div>
                    <div>
                        <h1 className="mx-10 text-3xl font-bold text-gray-700">
                            {userInfo?.following}
                        </h1>
                        <span className="text-sm text-gray-500 mt-2">
                            Seguindo
                        </span>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-700">
                            {userInfo?.public_repos}
                        </h1>
                        <span className="text-sm text-gray-500 mt-2">
                            Repositórios
                        </span>
                    </div>
                </div>
            </div>

            <div>
                { isLoading === true ? (
                    <LoadingSpinner />
                ) : (
                    <RepositoryList repositories={userRepos} />    
                ) }
            </div>
        </div>
    )
}