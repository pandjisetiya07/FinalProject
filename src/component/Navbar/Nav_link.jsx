import React from 'react'
import React, { Component } from 'react';
import { Link } from 'react-router'

function Nav_linkextends Component {
    render() {
        let isActive = this.context.router.isActive(this.props.to, true);
        let className = isActive ? "active" : "";

        return (
            <li className={className}>
                <Link {...this.props}/>
            </li>
        );
    }
}

NavLink.contextTypes = {
    router: React.PropTypes.object
};


export default Nav_link