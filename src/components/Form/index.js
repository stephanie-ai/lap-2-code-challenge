import React, { Component } from 'react';
import './style.css';

class Form extends Component {
    state = {
        username: "",
        name: "",
        stars: "",
        forks: "",
        userRepos: []
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleFormSubmit = e => {
        e.preventDefault();
        this.fetchAPI(this.state.username)
        this.setState({ username: ""})
    }

    fetchAPI = (username) => {
        console.log('fetching from API');
        fetch(`https:api.github.com/users/${username}/repos`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({ stars: data.stargazers_count})
                this.setState({ forks: data.forks_count })
                this.setState({ name: data.name })
                this.setState({ userRepos: data })
                console.log(this.state.userRepos)
            })
    }

    render() {

        const renderRepos = this.state.userRepos.map(repo => (
            <li key={repo.id} id="list-items">
                Repository Name: <b>{repo.name}</b>  |
                Stars: {repo.stars}     |
                Forks: {repo.forks}
            </li>
        ))

        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" id="username" name="username" placeholder="What is your Username?" value={this.state.username} onChange={this.handleInputChange} />
                    <input type="submit" id="submit" value="Submit" />
                </form>
                <div>
                <div className="card">
                    <h3>Your Repositories</h3>
                    { renderRepos }
                </div>
                </div>
              </div> 
        )
    }
}

export default Form;