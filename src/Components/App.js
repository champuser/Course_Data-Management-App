import React from 'react';
import  HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './Common/Header';
import CoursesPage from './CoursesPage';
import {Route , Switch, Redirect} from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import ManageCoursePage from './ManageCoursePage';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App(){
    // function getPage(){

    // const route = window.location.pathname;
    //  if(route === "/courses") return <CoursesPage />
    // if(route === '/about') return <AboutPage />
    // return <HomePage />
    
    // }
    // after declaring the function then call it
    // for showing the header 
return<div className= "container-fluid">
         
         <ToastContainer autoClose={3000} hideProgressBar />
         <Header/>
         <Switch>

         <Route path='/' exact component={HomePage}/> {/*Route has two props one is path & another is component */}
         <Route path='/courses' component={CoursesPage}/>
         <Route path='/about' component={AboutPage}/>
         <Route path='/course/:slug' component={ManageCoursePage}/>
         <Route path='/course' component={ManageCoursePage}/>

         <Redirect from='/about-page' to='/about' />
         <Route component={NotFoundPage} />

         </Switch>
         
      </div>
    

    
    
}
export default App;
