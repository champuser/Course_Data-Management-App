import React from "react";
import TextInput from './Common/TextInput';

function CourseForm(props) {
  return (
      <form onSubmit={props.onSubmit} >
    
          <TextInput
            id="title"
            label="title"
            onChange={props.onChange}
            name="title"
            className="form-control"
            value={props.course.title}
            error= {props.errors.title}
          />
       

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}

            value={props.course.authorId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Ujjwal</option>
            <option value="2">ChampUser</option>
            <option value="2">Champ</option>
            <option value="2">Surya Prakash</option>
          </select>
        </div>
           { props.errors.authorId && (
               <div className="alert alert-danger"> {props.errors.authorId} </div>
           )}
      </div>

      
          <TextInput
            label= "category"
            id="category"
            name="category"
            onChange={props.onChange}
            className="form-control"
            value={props.course.category}
            error = {props.errors.category}
          />
       

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;