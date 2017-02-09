import React, { Component } from 'react';


class Header extends Component {
    
    render (){
        return (
            <header>
                logr {this.props.title}
            </header>
        );
    }
}

export default Header;