import React, { Component } from 'react';
import { Navigate } from 'react-router-dom'

class Connexion extends Component {
    state = {
        pseudo: '',
        goToChat: false
    }

    handleChange = (event) => {
        const pseudo = event.target.value
        this.setState({pseudo:pseudo})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // vérifier si vide
        this.setState({goToChat:true})
    }


    render() { 
        if(this.state.goToChat)
        {
            return <Navigate replace to={`/pseudo/${this.state.pseudo}`} />
        }
        return (
        <div className='connexionBox'>
            <form className='connexion' onSubmit={this.handleSubmit}>
                <input 
                    value={this.state.pseudo}
                    onChange={this.handleChange}
                    placeholder='Pseudo'
                    type="text"
                    required 
                />
                <button type="submit">GO</button>
            </form>
        </div>
        );
    }
}
 
export default Connexion;