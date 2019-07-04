import React, { Component } from 'react'

export default class Listar extends Component {
    constructor(props) {
        super(props);

        this.state = { 
           realizadas: []
        };
    }


    componentDidMount() {
        // fetch("http://catalogo.jdsystem.com.br/api/clientes")
        //.then(resultado => resultado.json().then(dados => this.setState(dados)));
        fetch('http://catalogo.jdsystem.com.br/api/clientes', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'CatalogoId 9149392306F6D422C40498A8B9BF92483002384C1547EBC1AFD4FA3E2890C091'
            },
            body: JSON.stringify()
        })
        .then(resultado => resultado.json())
        .then(dados => this.setState({realizadas : dados})
        );
    }    

    selecionar = (indice) => {
        alert("Nome: "+ this.state.realizadas[indice].nomefan + "\nCNPJ: " 
        + this.state.realizadas[indice].cnpj
        +"\nID CRM:"+ this.state.realizadas[indice].IdCrm);
    }
      

    render() {
        return (
            <div>
                <div className="container">
                <h2>Striped Rows</h2>
                <p>The .table-striped class adds zebra-stripes to a table:</p>            
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th>Cliente</th>
                    
                    </tr>
                    </thead>
                    <tbody>
                    {
                            this.state.realizadas.map((item, indice) => {
                                return(
                                    <tr key={indice} data-item={indice} onClick={() => this.selecionar(indice)}>
                                        <td>{item.nomefan}</td>
                                    </tr>
                                )
                            })     
                    }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}
