import React from 'react';
import { Link } from 'react-router-dom';

function HomePage(){
    return(
        <div className="jumbotron">           {/* jumbotron class for bootstrap */}    
        <h1>SkillLearn Administration</h1>
        <p>Creating ultra-responsive web apps using React & Flux that is Course_Data Management App.</p>
        <Link to= "about" className="btn btn-primary">About</Link>

        </div>
    );
}

export default HomePage;