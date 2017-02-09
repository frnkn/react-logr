import React, { Component } from 'react';
import LogrItem from '../components/LogrItem';
import LogrCreateForm from '../components/LogrCreateForm';

class LogrListing extends Component {
    constructor(props){
        super(props);
        this.items = props.items;       
        console.log("STATE IN LOGR LISTING", this.state);
        //this.state = {tags: "Tags comes here", text: "Text comes here"};
        this.state = {items: this.items}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({tags: event.target.value, text: "Some Text here"});
        console.log("NEW STATE", this.state);
    }

    handleSubmit(event){
        console.log("SUBMIT STATE", this.state);
        event.preventDefault();
        var newItem = {
            text: "Some New Text",
            tags: this.state.tags,
            id: Date.now()
        };

        console.log("NewItem", newItem);

        this.setState((prevState) => ({
            items: prevState.items.concat(newItem),
        }));

        console.log("NEW STATE after adding new item", this.state);
    }

    render (){
        //const the_items = this.props.items;
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <h1>Logr Create Item Form</h1>
                    <label>text:</label>
                    <textarea></textarea>
                    <label>Enter tags:</label>
                    <input type="text" value={this.state.tags} onChange={this.handleChange}/>
                    <input type="submit" value="Create Log" />
                </form>
                <h3>logr listing</h3>
                {this.state.items.map((item) => (
                    <LogrItem key={item.id} content={item} />
                ))}    
            </section>
        );
    }
}
export default LogrListing;