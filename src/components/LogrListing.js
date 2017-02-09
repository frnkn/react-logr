import React, { Component } from 'react';
import LogrItem from '../components/LogrItem';
import LogrCreateForm from '../components/LogrCreateForm';

class LogrListing extends Component {
    render (){

        const {items} = this.props
        console.log("In Listing", items);
        return (
            <section>
                <LogrCreateForm />
                logr listing
                {items.map((item) => (
                    <LogrItem key={item.id} content={item} />
                ))}    
            </section>

        );
    }
}
export default LogrListing;