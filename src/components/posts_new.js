import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link }             from 'react-router-dom';
import { connect }          from 'react-redux';

import { createPost }       from '../actions';

class PostsNew extends Component {
    renderField( field ) {
        const { meta: { touched, error } } = field
        const formGroupWithErrors = `form-group ${ touched && error ? 'has-danger' : '' }`

        return (  
            <div className={ formGroupWithErrors }>
                <input 
                    className="form-control"
                    placeholder={ field.label }
                    type="text"
                    { ...field.input }
                />
                <div className="text-help">
                    { touched ? error : "" }
                </div>
                
            </div>
        )
    }

    onSubmit( values ) {
        this.props.createPost( values, () => {
            this.props.history.push('/');   
        } )
    }

    render() {
        // handleSubmit comes from the connection of redux form.
        const { handleSubmit } = this.props

        return (
            <form className="voffset3" onSubmit={ handleSubmit( this.onSubmit.bind( this ) ) }>  
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
                <Link to="/" className="btn btn-danger">Cancel</Link>
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
})( 
    connect(null, { createPost } )( PostsNew ) 
);