import React, { Component } from 'react';
import LogrItem from '../components/LogrItem';
import LogrCreateForm from '../components/LogrCreateForm';
import { Container, Row, Col, FormGroup, Label, Input, Form, Button, Jumbotron, ButtonGroup} from 'reactstrap';
import 'whatwg-fetch';

class LogrListing extends Component {
    constructor(props){
        super(props);
        this.items = props.items;       
        console.log("STATE IN LOGR LISTING", this.state);
        //this.state = {tags: "Tags comes here", text: "Text comes here"};
        this.state = {items: this.items}
        this.handleChange = this.handleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount(){
        this.getInitialData();
        
        console.log("COMPONENT DID MOUnT", this.state);
    }

    getInitialData(){
        var url = "http://127.0.0.1:8000/logr_items/";
        fetch(url, {
            method: 'get',
            mode: 'cors'
        }).then((response) => {
            return response.json();
        }).then((json) => {
            console.log("parsed json". json);
            this.setState({items: json});
        });
        /*
        .then(function(response){
            return response.json();
        }).then(function(json){
            console.log("parsed json", json);
            this.setState({"new_items": json});
        }).catch(function(err){
            console.log("ERROR fetching data", err);
        });*/
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
        this.setState({tags: event.target.value});
    }

    handleTextChange(event){
        this.setState({text: event.target.value});
    }

    handleSubmit(event){
        console.log("SUBMIT STATE", this.state);
        event.preventDefault();
        var newItem = {
            text: this.state.text,
            tags: this.state.tags,
            id: Date.now()
        };


        console.log("NewItem", newItem);

        this.setState((prevState) => ({
            items: prevState.items.concat(newItem),
            tags: "",
            text: ""
        }));

        document.getElementById("text").value = "";
    }

    render (){
        //const the_items = this.props.items;
        return (
                <div>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col xs="3">
                               
                            </Col>
                            <Col xs="6">
                                <h2>Create your log</h2>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                         <ButtonGroup>
                                            <Button>Custom</Button>
                                            <Button>Meeting Minute</Button>
                                            <Button>User Story</Button>
                                            <Button>Milestone</Button>
                                            <Button>Todo</Button>
                                        </ButtonGroup>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Enter Text:</Label>
                                        <Input onChange={this.handleTextChange} type="textarea" rows="15" name="text" id="text" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Tags:</Label>
                                        <Input type="text" value={this.state.tags} onChange={this.handleChange} name="tags" id="tags" />
                                    </FormGroup>
                                <Button color="primary" type="submit">Create</Button>
                                </Form>
                            </Col>
                            <Col xs="3"></Col>
                        </Row>
                    </Container>
                </Jumbotron>
               
            <Container>
                <Row>
                    <Col xs="12">
                         Filter:

                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        {this.state.items.map((item) => (
                            <LogrItem key={item.id} content={item} deleteAction={this.handleDelete}/>
                        ))}    
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}
export default LogrListing;