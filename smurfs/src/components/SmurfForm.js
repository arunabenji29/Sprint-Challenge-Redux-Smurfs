import React from 'react'
import {addSmurf} from '../actions'
import { connect } from 'react-redux'

class SmurfForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            age: '',
            height: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    addSmurf = (event) => {
        event.preventDefault()
        this.props
            .addSmurf(this.state)
            .then(() => this.props.history.push('/'))
            .catch(err => console.log('error in smurf form ', err))
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }

    render() {
        return (
            <div className="SmurfForm">
                <form onSubmit={this.addSmurf}>
                    <input
                        onChange={this.handleInputChange}
                        placeholder="name"
                        value={this.state.name}
                        name="name"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder="age"
                        value={this.state.age}
                        name="age"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder="height"
                        value={this.state.height}
                        name="height"
                    />
                    <button type="submit">Add to the village</button>
                </form>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    addingSmurf:state.addingSmurf,
    error:state.error
})

export default connect(
    mapStateToProps, {addSmurf}
)(SmurfForm)