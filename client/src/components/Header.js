import React from 'react';
import { Link } from 'react-router';

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to={'inicio'} activeStyle={{fontWeight: 'Bold'}}>Inicio</Link></li>
                        <li><Link to={'departamento'} activeStyle={{fontWeight: 'Bold'}}>Departamento</Link></li>
                        <li><Link to={'provincia'} activeStyle={{fontWeight: 'Bold'}}>Provincia</Link></li>
                        <li><Link to={'distrito'} activeStyle={{fontWeight: 'Bold'}}>Distrito</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

