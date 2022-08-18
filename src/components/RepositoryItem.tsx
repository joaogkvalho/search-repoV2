import { CaretRight } from "phosphor-react"

interface RepositoryItemProps {
    repository: {
        name: string
        description: string
        html_url: string
    }
}

export function RepositoryItem(props: RepositoryItemProps){
    return(
        <li className="flex items-center justify-between text-lg text-gray-800 font-semibold mb-4 py-4 px-6 bg-white rounded-md">
            <div className="flex flex-col">
                {props.repository.name}
                <span className="text-sm text-gray-400 font-normal">
                    {props.repository.description}
                </span>
            </div>

            <a href={props.repository.html_url} target="_blank">
                <CaretRight />
            </a>
        </li>
    )
}