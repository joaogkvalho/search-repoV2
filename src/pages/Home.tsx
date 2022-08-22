import { ToastContainer } from "react-toastify"
import { Logo } from "../components/Logo"
import { UserInfo } from "../components/UserInfo"

import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";

import 'react-toastify/dist/ReactToastify.css';

export function Home(){
    const [githubUser, setGithubUser] = useState('')
    const { searchUserInfo, userInfo } = useContext(UserContext)

    return(
        <div className="min-w-screen flex flex-col items-center justify-center mt-14">
            <Logo />
            
            <p className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold tracking-tight text-gray-700 mt-10 mb-16">
                Explore repositórios<br/> no GitHub
            </p>

            <form 
                className="w-[100%] max-w-[600px] px-4 md:px-2 lg:px-0 flex justify-center"
            >
                <input
                    className="w-[100%] p-4 rounded-l-md"
                    type="text" 
                    onChange={event => setGithubUser(event.target.value)}
                    value={githubUser}
                    placeholder="Digite o usuário do Github"
                />
                <button 
                    type="submit"
                    onClick={event => searchUserInfo(event, githubUser)}
                    className="px-3 md:px-4 lg:py-4 lg:px-6 bg-green-500 rounded-r-md text-white font-semibold transition-colors hover:bg-green-400"
                >
                    Pesquisar
                </button>
            </form>

            { userInfo
                ? (
                    <UserInfo userInfo={userInfo} />
                ) 
                : null 
            }
            
            <ToastContainer />
        </div>
    )
}