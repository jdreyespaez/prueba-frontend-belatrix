import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import DataDepto from '../data/depto.json';

class Departamento extends Component {

  constructor(props) {
    super(props);
    const counter = {}
    DataDepto.forEach((depto) => {
      counter[depto.codigo] = depto; 
    })
    this.state = {deptos: Object.values(counter) };
  }
  

    onNavigateHome(){
        browserHistory.push('/inicio');
    }

    render () {
        return (
            <div>
                <table class="table">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Código Padre</th>
                    <th scope="col">Descripción Padre</th>
                  </tr>
                </thead>
                <tbody>
                    {this.state.deptos.map((deptoDetail, key) =>  {
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