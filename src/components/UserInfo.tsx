import { Link } from 'react-router-dom'
import { CaretRight } from "phosphor-react"
import { useContext } from 'react'
import { UserContext } from '../contexts/userContext'

interface UserInfoProps {
    userInfo: UserInfo
}

interface UserInfo {
    avatar_url: string
    login: string
    name: string
    followers: number
    following: number
    public_repos: number
}

export function UserInfo({ userInfo }: UserInfoProps){
    return(
        <div className="w-[100%] max-w-[700px] px-4 hover:none md:hover:ml-8 lg:hover:ml-8 transition-all">
            <Link
                to="/user"
                className="w-[100%] flex items-center justify-between py-4 px-6 mt-12 bg-white rounded-md"
            >
                <div className="flex items-center">
                    <img 
                        className="w-[60px] rounded-full mr-6"
                        src={userInfo.avatar_url} 
                        alt={userInfo.name}
                    />
                    
                    <div>
                        <h1 className="text-md md:text-lg lg:text-lg text-gray-800 font-semibold">
                            {userInfo.name}
                        </h1>
                        <span className="text-md text-gray-400 font-normal">
                            {userInfo.login}
                        </span>
                    </div>
                </div>

                <span>
                    <CaretRight />
                </span>
            </Link>
        </div>
    )
}
