import React, {useState,useEffect} from 'react';
import courseStore from '../stores/courseStore';
import CourseList from './CourseList';
import {Link } from 'react-router-dom';
import {loadCourses, deleteCourse} from  '../actions/courseActions'


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
    const [courses,setCourses] = useState(courseStore.getCourses());
    useEffect(()=>{
        courseStore.addChangeListener(onChange);
        if(courseStore.getCourses().length === 0) loadCourses();
        return () => courseStore.removeChangeListener(onChange);   // cleanup on unmount
       
    },[]); // second argument for dependency array


    function onChange(){
        setCourses(courseStore.getCourses());

    }
        return(
        <>
         <h2>Courses</h2>
         <Link className="btn btn-primary" to="/course">
             Add Course
         </Link>
        <CourseList courses={courses} deleteCourse = {deleteCourse}/>
        </>)

}

export default CoursesPage;