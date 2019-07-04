import React, { Component } from 'react'

export default class Cadastro extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nomefan: '',
            cnpj: ''
        }
    }

    enviar() {

        /*let newPost = {
            nomefan: "Teste Juliana",
            cnpj: "36443028000140"
        }*/

        fetch('http://catalogo.jdsystem.com.br/api/CadastrarCliente', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'CatalogoId 9149392306F6D422C40498A8B9BF92483002384C1547EBC1AFD4FA3E2890C091'
            },
            body: JSON.stringify(this.state)
        })
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log('passou por aqui', data)
        })
    }

    alterar() {
        let newPost = {
            id: 15,
            nomefan: "Teste Juliana alterei hahaha",
            cnpj: "36443028000140"
        }

        fetch('http://catalogo.jdsystem.com.br/api/cliente/15', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'CatalogoId 9149392306F6D422C40498A8B9BF92483002384C1547EBC1AFD4FA3E2890C091'
            },
            body: JSON.stringify(newPost)
        })
        .then(function(response) {
           // return response.json()
        })
        .then(function(data) {
            console.log('passou por aqui', data)
        })
    }

    updateNomefan(evt) {
        this.setState({
          nomefan: evt.target.value
        });
    }

    updateCnpj(evt) {
        this.setState({
          nomefan: evt.target.value
        });
    }

    render() {
        return (
            <div>
                <form>
                <div className="form-group">
                    <label htmlFor="email">Nome fantasia:</label>
                    <input type="text" className="form-control" id="nomefan" value={this.state.nomefan} onChange={this.updateNomefan}/>
                </div>


                <div className="form-group">
                    <label htmlFor="pwd">Cnpj:</label>
                    <input type="text" className="form-control" id="cnpj"  value={this.state.cnpj}  onChange={this.updateCnpj}/>
                </div>

                <button className="btn btn-primary" onClick={this.alterar.bind(this)} >Submit</button>
                
                </form>
            </div>
        )
    }
}
