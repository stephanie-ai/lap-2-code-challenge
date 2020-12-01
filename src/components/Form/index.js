import React, { Component } from 'react';
import './style.css';

class Form extends Component {
    state = {
        username: "",
    }

    handleInputChange = e => this.setState({[e.target.name]: e.target.value});

    // checkFormStatus = () => Object.values(this.state).some(i => !i);

    handleFormSubmit = e => {
        e.preventDefault();
        
    }

    fetchAPI = () => {
        console.log('fetching from API');
        fetch('https://api.github.com/users/:{this.state.username}/repos')
            .then(resp => resp.json())
            .then(data => this.setState({ username: data }))
    }

    render() {
        return (
            <div>
                <form  >
                    <input type="text" id="username" name="username" placeholder="What is your Username?" value={this.state.username} onChange={this.handleInputChange} />
                    <input type="submit" id="submit" onSubmit={this.handleFormSubmit} value="Submit" />
                </form>
                <div>
                    {/* append repos here */}
                    
                </div>
            </div>
        )
    }
}

export default Form;

// disable={this.checkFormStatus()