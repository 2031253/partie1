import React, { Component } from 'react';

class enfant extends Component {

   state = {
        nombre1 : 0 ,
        total : 0
    }

    ajouter2 = () =>{
      this.setState((state) =>({
         nombre1 : state.nombre1 + 1 
      }) )
      this.calculerTotal();
      this.props.nombre3Recu(this.state.nombre1)
    }

    calculerTotal = () => {
        this.setState({
            total : this.state.nombre1 +  this.props.nombre1Envoyer
         })
    }

    render() {
        return (
            <div>
                <div className='aligne'>
                    <button onClick={this.ajouter2}>+2Enfant</button>
                    <span>  Enfant somme Parent  </span>
                    <input type='number' readOnly value={this.state.nombre1}></input>
                    <span>  Enfant somme Enfant  </span>
                    <input type='number' readOnly value={ this.props.nombre1Envoyer}></input>
                    <span>  Enfant somme total  </span>
                    <input type='number' readOnly value={this.state.total}></input>   
                </div>
            </div>
        );
    }

}
export default enfant;