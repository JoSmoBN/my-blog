import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField( field ) {
        return (  
            <div className="form-group">
                <input 
                    className="form-control"
                    placeholder={ field.label }
                    type="text"
                    { ...field.input }
                />
                { field.meta.error }
            </div>
        )
    }

    render() {
        return (
            <form>  
                <Field 
                    label="Post Title"
                    name="title"
                    component={ this.renderField }
                />
                <Field 
                    label="Post Category"
                    name="categories"
                    component={ this.renderField }
                />
                <Field 
                    label="Post Content"
                    name="content"
                    component={ this.renderField }
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

function validate( values ) {
    const errors = {};

    // Validate the inputs from 'values'
    if ( !values.title ) {
        errors.title = "Please enter a title for your post."
    } 
    if ( !values.categories ) {
        errors.categories = "Your post is going to need some categories."
    }
    if ( !values.content ) {
        errors.content = "Not much of a post without some content, right?"
    }

    // If errors is empty, the form is fine to submit
    // Will fail validation if errors has any properties
    return errors
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})( PostsNew );