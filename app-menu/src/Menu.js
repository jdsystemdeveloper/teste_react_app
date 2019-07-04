import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">  
                <Link to="/" className="nav-link" >Home</Link>

                    <ul className="navbar-nav">
                    
                        <li className="nav-item">
                        <Link to="/listar" className="nav-link" >Listar</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/cadastro" className="nav-link">Cadastro</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
