import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import DataDist from '../data/dist.json';

class Distrito extends Component {

    constructor(props) {
        super(props);
        this.state = {array: DataDist};
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
                    {DataDist.map(function(provDetail, key) {
                    return (
                      <tr key = {key}>
                        <td>{provDetail.codigo}</td>
                        <td>{provDetail.lineDistName}</td>
                        <td>{provDetail.lineProvCode}</td>
                        <td>{provDetail.lineProvName}</td>
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

export default Distrito;