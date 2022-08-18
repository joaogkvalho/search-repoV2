import { GitBranch } from 'phosphor-react'

export function Logo(){
    return(
        <div className="flex items-center justify-center">
            <GitBranch 
                className="text-gray-700"
                size={45} 
            />
            <p className="text-4xl tracking-tight font-semibold text-gray-700">         
                search
                <span className="text-gray-400">
                    _repo
                </span>
            </p>
        </div>
    )
}