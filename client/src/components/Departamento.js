import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import DataDepto from '../data/depto.json';

class Departamento extends Component {

    onNavigateHome(){
        browserHistory.push('/inicio');
    }

    render () {
        return (
            <div>
                <h3>Los Departamentos</h3>
                <p>Códigos: </p>

                <table>
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Código Padre</th>
                    <th>Descripción Padre</th>
                  </tr>
                </thead>
                <tbody>
                    {DataDepto.map(function(deptoDetail, key) {
                    return (
                      <tr key = {key}>
                        <td>{deptoDetail.codigo}</td>
                        <td>{deptoDetail.nombre}</td>
                      </tr>
                    )
                    })}
                </tbody>
                </table>

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