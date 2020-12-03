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

    componentDidMount() {
        console.log('did mount')
        this.fetchAPI()
        console.log(this.fetchAPI('RishabhRawat98'))
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.username]: e.target.value
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
        fetch(`https:api.github.com/users/RishabhRawat98/repos`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({ stars: data.stargazers_count})
                this.setState({ forks: data.forks_count })
                this.setState({ name: data.name })
                this.setState({ userRepos: data })
                console.log(this.state.userRepos)
                console.log("look here")
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
                    <input type="text" id="username" name="username" placeholder="What is your Username?" onChange={this.handleInputChange} />
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

// value={this.state.username}