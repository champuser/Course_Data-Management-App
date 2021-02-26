import React , { useState , useEffect} from 'react';
import CourseForm from './CourseForm';
import * as courseApi from '../api/courseApi';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const ManageCoursePage = props =>{
    // set state for validation
    const [ errors,setErrors ] = useState({})
    const [ course, setCourse ]  = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    useEffect(()=>{
        const slug = props.match.params.slug;   // from the path '/courses/:slug'

        if(slug){
            courseApi.getCourseBySlug(slug).then( _course =>{
                setCourse(_course)
            });
        }
    }, [props.match.params.slug]);

    // function handleTitleChange(event){
    //     const updatedCourse = {...course};
    //     updatedCourse.title = event.target.value;
    //     setCourse(updatedCourse);
    // }

    // one ChangeHandler for all

    function handleChange(event){
        const updatedCourse = {...course, 
            [event.target.name]: event.target.value};
            setCourse(updatedCourse);
    }


    function formIsValid(){

        const  _errors = {};
        if(!course.title) _errors.title= "Title is required";
        if(!course.authorId) _errors.authorId= "Author ID is required";
        if(!course.category) _errors.category= "Category is requires";

        setErrors(_errors);

        // Form is valid if the errors object has no properties
        
          return Object.keys(_errors).length === 0;
    }


    // save the course in db

    function handleSubmit(event){
        // prevent the page to posting back to the server
        event.preventDefault();
        if(!formIsValid() )  return;
        // calling the courseApi
        courseApi.saveCourse(course).then(()=>{
            // after the api call to handle the response
            // redirect to courses page
            props.history.push('/courses');
            toast.success("Your Course Saved!")
        })
    }
    return(

        <>
        <h1>Manage Course</h1>
         <CourseForm 
           errors = {errors}
          course={course} 
          onChange={handleChange}
          onSubmit= {handleSubmit}    
          />
        </>
    )
   
}


CourseForm.propTypes ={
    course: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

export default ManageCoursePage;