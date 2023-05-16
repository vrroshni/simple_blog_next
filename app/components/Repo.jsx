import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

async function fetcRepo(name) {
  const response = await fetch(`https://api.github.com/repos/vrroshni/${name}`, {
    next: {
      revalidate: 60,
    }
  })
  return await response.json();
}
const Repo = async ({ name }) => {
  const repo = await fetcRepo(name)
  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.full_name}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  )
}

export default Repo