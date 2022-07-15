import React, { Component } from 'react';
class NavBar extends Component {
    render() { 
        return (
            <nav>
            <img className='rrr' src={require("../slike/navbar.jpg")} alt='navbar'/>
            <h1 className='naslovv'>NACIONALNI PARKOVI SRPSKE</h1>
            </nav>
        );
    }
}
 
export default NavBar; 