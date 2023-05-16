'use client'
import { useState, useEffect } from 'react'
import LoadingPage from './loading'
import Link from 'next/link'
import React from 'react'
import Courses from './components/Courses'
import CourseSearch from './components/CourseSearch'


const HomePage = () => {
  const [loading, setLoading] = useState(true)
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/courses')
      const data = await response.json()
      setCourses(data)
      setLoading(false)
    }
    fetchCourses()
  }, [])

  if (loading) {
    return (<LoadingPage />)
  }

  return (
    <>
      <h1>Welcome Guyss</h1>
      <CourseSearch getSearchresults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </>
  )
}

export default HomePage