import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { deleteSmurf } from '../actions'
import UpdateForm from './UpdateForm'

class Smurf extends React.Component {
    constructor() {
        super()
        this.state = {
            editingID: false,
            item: null
        }

    }

    deleteSubmit = (event, id) => {
        event.preventDefault()
        this.props
            .deleteSmurf(id)
            .then(() => this.props.history.push('/'))
            .catch(err => console.log(err))
    }

    updateSubmit = (event, smurf) => {
        event.preventDefault()
        console.log(smurf.id)
        this.setState({
            editingID: true,
            item: smurf
        })

    }

    render() {
        return (
            <div className='Smurf'>
                <h3>{this.props.smurf.name}</h3>
                <strong>{this.props.smurf.height} tall</strong>
                <p>{this.props.smurf.age} smurf years old</p>
                <button onClick={(event) => this.deleteSubmit(event, this.props.smurf.id)}>Delete</button>
                <button onClick={(event) => this.updateSubmit(event, this.props.smurf)}>Update</button>
                {this.state.editingID && <Route to='/updateForm' render={props => (
                    <UpdateForm {...props} smurf={this.state.item} />
                )} />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    deletingSmurf: state.deletingSmurf,
    updatingSmurf: state.updatingSmurf,
    error: state.error,
    updateItem: state.updateItem

})

export default connect(
    mapStateToProps, { deleteSmurf }
)(Smurf)