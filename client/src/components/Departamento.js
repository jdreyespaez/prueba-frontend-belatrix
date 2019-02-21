import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import DataDepto from '../data/depto.json';

class Departamento extends Component {

  constructor(props) {
    super(props);
    this.state = {array: DataDepto};
  }

    onNavigateHome(){
        browserHistory.push('/inicio');
    }

    // onFilter(){
    //   this.state.array = this.state.array.filter((obj, pos, arr) => {
    //   return arr.map(mapObj =>
    //     mapObj.codigo).indexOf(obj.codigo) === pos;
    //   });
    // }

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
                  onClick={this.onFilter}
                  className="btn btn-success"
                >
                  Filtrar
                </button>

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