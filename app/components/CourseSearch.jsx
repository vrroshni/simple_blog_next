import React, { useState } from 'react'

const CourseSearch = ({getSearchresults}) => {
    const [query, setQuery] = useState(null)

    const submitHandler= async(e)=>{
        e.preventDefault()
        
            const res=await fetch(`/api/courses/search?query=${query}`)
            const courses=await res.json()
            getSearchresults(courses)
       
    }
    return (
        <form onSubmit={submitHandler} className='search-form'>
            <input type="text" className="search-input" placeholder='Search Courses...' value={query} onChange={(e) => setQuery(e.target.value)} />
            <button className="search-button" type='submit'>Search</button>
        </form>
    )
}

export default CourseSearch