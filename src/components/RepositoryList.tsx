import { RepositoryItem } from "./RepositoryItem"

interface RepositoryListProps {
    repositories: Repository[]
}

interface Repository {
    name: string
    description: string
    html_url: string
}

export function RepositoryList({ repositories }: RepositoryListProps){
    return(
        <div className="w-[100%] max-w-[800px] flex items-center justify-center mx-auto my-10 px-4">
            <ul>
                {repositories.map(repository => {
                    return(
                        <RepositoryItem 
                            key={repository.name} 
                            repository={repository} 
                        />
                    )
                })}
            </ul>
        </div>
    )
}