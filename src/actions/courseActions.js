import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';
import actionTypes from './actionTypes';

// Action creator function

export function saveCourse(course){
  return  courseApi.saveCourse(course).then(savedCourse =>{
      // Hey,dispatcher, go tell all the stores that a course is created
        dispatcher.dispatch({
           actionType: "CREATE_COURSE",
           course: savedCourse
        });
    });
}