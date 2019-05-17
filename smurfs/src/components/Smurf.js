import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {deleteSmurf} from '../actions'


class Smurf extends React.Component{
    constructor(){
        super()
        
    }

    deleteSubmit = (event,id) => {
        event.preventDefault()
        this.props
        .deleteSmurf(id)
        .then(() => this.props.history.push('/') )
        .catch(err => console.log(err))
      }

    render(){
        return (
            <div className='Smurf'>
            <h3>{this.props.smurf.name}</h3>
      <strong>{this.props.smurf.height} tall</strong>
      <p>{this.props.smurf.age} smurf years old</p>
      <button onClick={(event) => this.deleteSubmit(event,this.props.smurf.id)}>Delete</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    deletingSmurf: state.deletingSmurf,
   
    error: state.error,
   
  })
  
  export default connect(
    mapStateToProps,{deleteSmurf}
  )(Smurf)