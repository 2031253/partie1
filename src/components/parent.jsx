import React, { Component } from 'react';
import Enfant from './enfant';

class Parent extends Component {

    state = {
        nombre1: 0,
        nombre2: 0,
        total: 0
    }

    ajouter1 = () => {
        this.setState((state)=>(
            {
                nombre1: state.nombre1 + 1 ,
            }
        ))
        this.calculerTotal();
    }

    calculerTotal = () => {
        this.setState({
            total: this.state.nombre1 + this.state.nombre2
        })
    }

    recevoir = (infos) => {
        this.setState({
            nombre2 : infos
        })
    }

    render() {
        return (
            <div>
                <div className='aligne'>
                    <button onClick={this.ajouter1}>+1Parent</button>
                    <span> Parent somme Parent </span>
                    <input type='number' readOnly value={this.state.nombre1}></input>
                    <span> Parent somme Enfant </span>
                    <input type='number' readOnly value={this.state.nombre2}></input>
                    <span> Parent somme total </span>
                    <input type='number' readOnly value={this.state.total}></input>
                </div>
                <br />
                <br />
                <Enfant nombre1Envoyer = {this.state.nombre1} nombre3Recu = {this.recevoir}/>
            </div>
        );
    }

}
export default Parent;