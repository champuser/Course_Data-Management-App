import React, {useState,useEffect} from 'react';
import {getCourses} from '../api/courseApi';
import CourseList from './CourseList';
import {Link } from 'react-router-dom';


// class CoursesPage extends React.Component{
//     state = {
//         courses:[]
//     }
//     // lifecycle method of api call
//     // called after the component mounted
//     componentDidMount(){
//         getCourses().then(courses => this.setState({courses:courses}));    // setState calls only update the specified  properties
        

//     }

// use Hooks
  
function CoursesPage(){
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        getCourses().then(_courses => setCourses(_courses))
    },[]); // second argument for dependency array


    
        return(
        <>
         <h2>Courses</h2>
         <Link className="btn btn-primary" to="/course">
             Add Course
         </Link>
        <CourseList courses={courses}/>
        </>)

}

export default CoursesPage;