import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button, CardLink, CardHeader } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import ReactMarkdown from 'react-markdown';

class LogrItem extends Component {

    constructor(props){
        super(props);
    }

    render (){
        const {content} = this.props;
        console.log("LOGRITEM", {content});
        console.log("THIS PROPS", this.props);
        return (
            <Row>
                <Col md="3" />
                <Col xs="12" md="6">
                    <article key={content.the_id}>
                        <Card>
                            <CardHeader>Test {content.created_on}</CardHeader>
                            <CardBlock>
                                <CardText><ReactMarkdown source={content.text} /></CardText>
                                <CardSubtitle><p>{content.tags}</p></CardSubtitle>
                                <CardLink href="javascript:void(0)" onClick={() => this.props.deleteAction(content.the_id)}>Delete</CardLink>
                                <CardLink href="javascript:void(0)">Edit</CardLink>
                            </CardBlock>
                        </Card>
                    </article>
                </Col>
                <Col md="3" />
            </Row>
        );
    }
}

export default LogrItem;