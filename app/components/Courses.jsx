import Link from "next/link";

async function fetchCourses() {
    const response = await fetch("http://localhost:3001/api/courses")
    return response.json()
}
const Courses = async () => {
    const courses = await fetchCourses();
    return (
        <div className="courses">
            {courses.map((course) => (
                <div className="card" key={course.id}>
                    <h2>{course.title}</h2>
                    <small>Level:{course.level}</small>
                    <p>{course.description}</p>
                    <Link href={course.link} target="_blank" className='btn '>Go to course</Link>
                </div>
            ))}
        </div>
    )
}

export default Courses