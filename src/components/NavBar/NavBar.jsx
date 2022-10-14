import React from 'react';

export class NavBar extends React.Component {
    render() {
        return (
            <nav className='nav'>
                {this.props.children}
            </nav>
        );
    }
}