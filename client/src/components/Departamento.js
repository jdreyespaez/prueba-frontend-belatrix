import React, { Component } from 'react';
import {browserHistory} from 'react-router';

class Departamento extends Component {

    onNavigateHome(){
        browserHistory.push('/inicio');
    }

    render () {
        return (
            <div>
                <h3>Los Departamentos</h3>
                <p>Códigos: </p>
                <button
                    onClick={this.onNavigateHome}
                    className="btn btn-primary"
                >
                    Volver
                </button>
            </div>
        )
    }
}

export default Departamento;