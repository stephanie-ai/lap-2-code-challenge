import React, { Component } from 'react';
import './style.css';

class Form extends Component {
    state = {
        username: "",
        name: "",
        avatar: "",
        repos: "",
    }

    componentDidMount() {
        console.log('did mount')
        this.fetchAPI('RishabhRawat98')
        console.log(this.fetchAPI('RishabhRawat98'))
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            // username
        });
    }

    handleFormSubmit = e => {
        e.preventDefault();
        const data = this.state
        console.log('Final data is ', data)
    }

    // https:api.github.com/users/RishabhRawat98
    // https://api.github.com/users/:${this.state.username}/repos
    fetchAPI = () => {
        console.log('fetching from API');
        fetch('https:api.github.com/users/RishabhRawat98')
            .then(resp => resp.json())
            .then(data => {
                this.setState({ username: data.name })
                this.setState({ avatar: data.avatar_url})
                this.setState({ repos: data.public_repos})
                this.setState({ name: data.login})
                console.log(data)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" id="username" name="username" placeholder="What is your Username?"  onChange={this.handleInputChange} />
                    <input type="submit" id="submit" value="Submit" />
                </form>
                <div>
                <div class="card">
                <img src={this.state.avatar} alt="Avatar" />
                <div class="container">
                  <h4><b>{this.state.name}</b></h4>
                  <p>{this.state.username}</p>
                  <p></p>
                </div>
              </div> 
                
                </div>
              </div> 
        )
    }
}

export default Form;

// value={this.state.username}