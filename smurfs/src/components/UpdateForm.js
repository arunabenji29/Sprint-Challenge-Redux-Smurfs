import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { updateSmurf } from '../actions'
import { connect } from 'react-redux'

class UpdateForm extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            smurfInfo: this.props.smurf
            // name:'',
            // age:'',
            // height:''
        };
    }

    handleUpdateChange = (event) => {
        event.persist()
        console.log(event.target.value)
        this.setState(prevState => ({
            smurfInfo: {
                ...prevState.smurfInfo,
                [event.target.name]: event.target.value
            }
        }))
    }




    updateSmurf = (event) => {
        event.preventDefault()
        this.props
            .updateSmurf(this.state.smurfInfo)
            .then(() => window.location.reload())
            .catch(err => console.log('error while updating form', err))
        this.setState({
            smurfInfo: {
                name: '',
                age: '',
                height: ''
            }
        });
    }





    render() {
        return (
            <div className="SmurfForm">
                <form onSubmit={this.updateSmurf}>
                    <input
                        onChange={this.handleUpdateChange}
                        placeholder="name"
                        value={this.state.smurfInfo.name}
                        name="name"
                    />
                    <input
                        onChange={this.handleUpdateChange}
                        placeholder="age"
                        value={this.state.smurfInfo.age}
                        name="age"
                    />
                    <input
                        onChange={this.handleUpdateChange}
                        placeholder="height"
                        value={this.state.smurfInfo.height}
                        name="height"
                    />
                    <button type="submit">Update Smurf to the village</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    updatingSmurf: state.updatingSmurf,
    error: state.error
})

export default connect(
    mapStateToProps, { updateSmurf }
)(UpdateForm);
