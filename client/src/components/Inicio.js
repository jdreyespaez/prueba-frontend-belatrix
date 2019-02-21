import React, { Component } from 'react';

class Inicio extends Component {
    render() {
        return (
            <div>
                <h3>Correr script</h3>
                <p>Primero se debe correr <code>node index.js</code> para que se llene los JSON y después vendrán con la información en la tabla de cada Categoría.</p>
                <p>Nota: Cuando se clona el repo los archivos <em>depto.json</em>, <em>prov.json</em> y <em>dist.json</em> están vacíos.</p>
            </div>
        );
    }
}

export default Inicio;