import React, { Component } from 'react';
import './style.css';

class Form extends Component {
    state = {
        username: "",
        name: "",
        stars: "",
        forks: "",
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
        fetch('https:api.github.com/users/RishabhRawat98/repos')
            .then(resp => resp.json())
            .then(data => {
                // this.setState({ username: data[0].name})
                this.setState({ stars: data[0].stargazers_count})
                this.setState({ forks: data[0].forks_count })
                this.setState({ name: data[0].name })
                console.log(data)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" id="username" name="username" placeholder="What is your Username?" onChange={this.handleInputChange} />
                    <input type="submit" id="submit" value="Submit" />
                </form>
                <div>
                <div class="card">
                <img src={this.state.avatar} alt="Avatar" />
                <div class="container">
                  <h4>Name of Repo is: <b>{this.state.name}</b></h4>
                  <p>Number of Stargazers is: {this.state.stars}</p>
                  <p>Number of Forks is: {this.state.forks}</p>
                </div>
              </div> 
                
                </div>
              </div> 
        )
    }
}

export default Form;

// value={this.state.username}