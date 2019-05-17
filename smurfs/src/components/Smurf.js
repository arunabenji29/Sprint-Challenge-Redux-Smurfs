import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'

class Smurf extends React.Component{
    constructor(){
        super()
        
    }

    render(){
        return (
            <div className='Smurf'>
            <h3>{this.props.smurf.name}</h3>
      <strong>{this.props.smurf.height} tall</strong>
      <p>{this.props.smurf.age} smurf years old</p>
            </div>
        )
    }
}

export default Smurf