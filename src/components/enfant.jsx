import React, { Component } from 'react';

class enfant extends Component {

    state ={
        valeurActuel : 0 ,
        valeurParentRecu: 0,
        total : 0 
    }

    ajouter2Enfant=()=>{
        this.setState((state) => (
            {
                valeurActuel : state.valeurActuel + 2 , 
                total : this.state.valeurActuel + this.props.valuerAjouterEnfant 
            }
           
        ))
        this.props.recevoirParent(this.state.valeurActuel)
        this.ajusterTotal();
        
    }

    ajusterTotal=()=>{
        this.setState(()=>(
            {
                total : this.state.valeurActuel + this.state.valeurParentRecu ,
            }
        ))
    }

    render(){
        return (
            <div>
                <div className='aligne'> 
                    <button onClick={this.ajouter2Enfant}>+2Enfant</button>
                    <p>Enfant somme Parent</p>
                    <input type='number' value={this.props.valuerAjouterEnfant}></input>
                    <p>Enfant somme Enfant</p>
                    <input type='number' readOnly  value={this.state.valeurActuel}></input>
                    <p>Enfant somme total</p>
                    <input type='number' readOnly  value={this.state.total}></input>
                </div>
            </div>
        );
    }

}
export default enfant;