import React, { Component } from 'react';
import './Logo.scss';

import { Link } from 'react-router-dom';

export default class Logo extends Component {

    render() {
        return <Link to="/" className="Logo">iOld</Link>
    }
    
}