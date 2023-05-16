import Link from 'next/link';
import React from 'react'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

async function fetChRepos() {
    const respose = await fetch('https://api.github.com/users/vrroshni/repos',{
        next:{
            revalidate:60,
        },
    })

    // #wait 1 second

    return await respose.json();
}

const ReposPage = async () => {
    const repos = await fetChRepos()
    return (
        <div className='repos-container'>
            <h2>Repositories</h2>
            <ul className='repo-list'>
                {
                    repos.map((repo) => (<li key={repo.id}>
                        <Link href={`/code/repos/${repo.name}`}>
                            <h3>{repo.name}</h3>
                            <p>{repo.full_name}</p>
                            <div className="repo-details">
                                <span>
                                    <FaStar /> {repo.stargazers_count}
                                </span>
                                <span>
                                    <FaCodeBranch /> {repo.forks_count}
                                </span>
                                <span>
                                    <FaEye />{repo.watchers_count}
                                </span>
                            </div>
                        </Link>
                    </li>
                    ))}
            </ul>
        </div>
    )
}

export default ReposPage