import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import DataProv from '../data/prov.json';

class Provincia extends Component {

    constructor(props) {
        super(props);
        const counter = {}    
        DataProv.forEach((prov) => {
          counter[prov.codigo] = prov; 
        })
        this.state = {provs: Object.values(counter) };
    
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
                    {this.state.provs.map(function(provDetail, key) {
                    return (
                      <tr key = {key}>
                        <td>{provDetail.codigo}</td>
                        <td>{provDetail.nombre}</td>
                        <td>{provDetail.lineDadCode}</td>
                        <td>{provDetail.lineDadName}</td>
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

export default Provincia;