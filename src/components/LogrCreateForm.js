import React, { Component } from 'react';

class LogrCreateForm extends Component {
    constructor(props){
        super(props);
        this.state = {tags: "Tags comes here", text: "Text comes here"};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };


    handleChange(event){
        this.setState({tags: event.target.value, text: "Some Text here"});
    }

    handleSubmit(event){
        console.log("SUBMIT STATE", this.state);
        event.preventDefault();
    }

    render (){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Logr Create Item Form</h1>
                    <label>text:</label>
                    <textarea></textarea>
                    <label>Enter tags:</label>
                    <input type="text" value={this.state.tags} onChange={this.handleChange}/>
                    <input type="submit" value="Create Log" />
                </form>
            </div>
        );
    }
}

export default LogrCreateForm;