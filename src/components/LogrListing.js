import React, { Component } from 'react';
import LogrItem from '../components/LogrItem';
import LogrCreateForm from '../components/LogrCreateForm';
import { Container, Row, Col } from 'reactstrap';

class LogrListing extends Component {
    constructor(props){
        super(props);
        this.items = props.items;       
        console.log("STATE IN LOGR LISTING", this.state);
        //this.state = {tags: "Tags comes here", text: "Text comes here"};
        this.state = {items: this.items}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(item_id){
       
        var array = this.state.items;
        var the_index;

        for (var i = 0; i < array.length; i++){
            if (array[i].the_id === item_id){
                var the_index = i;
                
            }
        }

        if (the_index > -1) {
            array.splice(the_index, 1);
        }

        this.setState({items: array});
        

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


        //validate

        //push to webservice

        //get response, if response 201 than show, else render error


        this.setState((prevState) => ({
            items: prevState.items.concat(newItem),
        }));

        console.log("NEW STATE after adding new item", this.state);
    }

    render (){
        //const the_items = this.props.items;
        return (
            <Container>
                <Row>
                    <Col>
                        <form onSubmit={this.handleSubmit}>
                            <h1>Logr Create Item Form</h1>
                            <label>text:</label>
                            <textarea></textarea>
                            <label>Enter tags:</label>
                            <input type="text" value={this.state.tags} onChange={this.handleChange}/>
                            <input type="submit" value="Create Log" />
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <h3>logr listing</h3>
                        {this.state.items.map((item) => (
                            <LogrItem key={item.id} content={item} deleteAction={this.handleDelete}/>
                        ))}    
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default LogrListing;