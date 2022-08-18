import { useState, FormEvent } from "react"
import { RepositoryList } from "./components/RepositoryList"
import { ToastContainer, toast } from 'react-toastify';

import { Logo } from "./components/Logo"

import 'react-toastify/dist/ReactToastify.css';

interface Repository {
  name: string
  description: string
  html_url: string
}

function App() {
  const [githubUser, setGithubUser] = useState('')
  const [userRepos, setUserRepos] = useState<Repository[]>([])

  async function searchUser(event: FormEvent){
    event.preventDefault()

    if(githubUser){
      let response = await fetch(`https://api.github.com/users/${githubUser}/repos`)
      
      if(response.ok){
        let data = await response.json()

        setUserRepos(data)
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

    setGithubUser('')
  }

  return (
    <div className="min-w-screen flex flex-col items-center justify-center mt-14">
        <Logo />
        
        <p className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold tracking-tight text-gray-700 mt-10 mb-16">
          Explore repositórios<br/> no GitHub
        </p>

        <form className="w-[100%] max-w-[600px] px-4 md:px-2 lg:px-0 flex justify-center">
          <input
            className="w-[100%] p-4 rounded-l-md"
            type="text" 
            onChange={event => setGithubUser(event.target.value)}
            value={githubUser}
            placeholder="Digite o usuário do Github"
          />
          <button 
            className="px-3 md:px-4 lg:py-4 lg:px-6 bg-green-500 rounded-r-md text-white font-semibold transition-colors hover:bg-green-400"
            onClick={searchUser}
          >
            Pesquisar
          </button>
        </form>

        <RepositoryList repositories={userRepos} />

        <ToastContainer />
    </div>
  )
}

export default App