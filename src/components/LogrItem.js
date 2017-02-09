import React, { Component } from 'react';


class LogrItem extends Component {

    render (){
        const {content} = this.props;
        console.log("LOGRITEM", {content});
        return (
            <article key={content.the_id}>
                <p>{content.the_id}</p>
                <p>{content.content}</p>
                <p>{content.text}</p>
            </article>
        );
    }
}

export default LogrItem;