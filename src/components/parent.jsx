import React, { Component } from 'react';
import Enfant from './enfant';

class Parent extends Component {

    state ={
        valeurActuel : 0 ,
        valeurEnfantRecu : 0 ,
        total : 0 

    }

    sommeTotal=(nombre1 , nombre2)=>{
        return nombre1 + nombre2;
    }

    ajouter1Parent=()=>{
        this.setState((state) => (
            {
                valeurActuel : state.valeurActuel + 1 , 
                
            }
        ))
        this.ajusterTotal();
    }


    ajusterTotal=()=>{
        this.setState(()=>(
            {
                total : this.state.valeurActuel + this.state.valeurEnfantRecu ,
            }
        ))
    }

    recevoirParent =(valeur)=>{
        this.setState(()=>(
            {
                valeurEnfantRecu : valeur
            }
        ))
    }

    render(){
        return (
            <div>
                <div className='aligne'> 
                    <button onClick={this.ajouter1Parent}>+1Parent</button>
                    <p>Parent somme Parent</p>
                    <input type='number'  readOnly value={this.state.valeurActuel}></input>
                    <p>Parent somme Enfant</p>
                    <input type='number'  readOnly value={this.state.valeurEnfantRecu}></input>
                    <p>Parent somme total</p>
                    <input type='number'  readOnly  value={this.state.total}></input>
                </div>
                <Enfant valuerAjouterEnfant={this.state.valeurActuel}  recevoirParent ={this.recevoirParent}/>
            </div>
        );
    }

}
export default Parent;