import React, { Component } from 'react';
import './Layout.css'

import { Navbar, Sidebar, Footer } from '../../components/Layout/index'

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Navbar />
                    <Sidebar />
                       {this.props.children} 
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}

export default Layout;

