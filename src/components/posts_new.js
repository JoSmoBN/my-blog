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
            </form>
        )
    }
}

function validate( values ) {

}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})( PostsNew );