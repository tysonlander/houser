import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

class Wizard extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    }
  }

  handleName = (v) => {
    this.setState({ name: v })
  }
  handleAddress = (v) => {
    this.setState({ address: v })
  }
  handleCity = (v) => {
    this.setState({ city: v })
  }
  handleState = (v) => {
    this.setState({ state: v })
  }
  handleZipCode = (v) => {
    this.setState({ zip: v })
  }
  handleCancel = () => {
    this.setState({
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    })
  }
  handleAddHouse = () => {
    axios.post('/api/AddListing', {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode
    })
    .then(res => {
      console.log(res)
    })
    this.setState({name: ''})
    this.setState({address: ''})
    this.setState({city: ''})
    this.setState({state: ''})
    this.setState({zipcode: ''})
  }

  render(){
    return(
      <div>
        <h1>Add New Listing</h1>

        <h3>Property Name</h3>
        <input
          value={this.state.name}
          onChange={(e) => this.handleName(e.target.value)}
        />
        <h3>Address</h3>
        <input
          value={this.state.address}
          onChange={(e) => this.handleAddress(e.target.value)}
        />
        <h3>City</h3>
        <input
          value={this.state.city}
          onChange={(e) => this.handleCity(e.target.value)}
        />
        <h3>State</h3>
        <input
          value={this.state.state}
          onChange={(e) => this.handleState(e.target.value)}
        />
        <h3>Zip</h3>
        <input
          value={this.state.zipcode}
          onChange={(e) => this.handleZipCode(e.target.value)}
        />
        <br/>
        <button onClick={this.handleAddHouse}>Complete</button>
        <Link to="/"><button onClick={this.handleCancel}>Cancel</button></Link>
      </div>
    )
  }

}
export default Wizard;