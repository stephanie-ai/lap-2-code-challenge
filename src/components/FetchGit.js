import React, { Component } from "react";

class FetchGitApi extends Component {
    // state = {
    //     loading: true,
    //     person: null,
    // };

    async ComponentDidMount () {
        const url = "https://api.github.com";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        
    }

    render() {
        return (
            <div>
            <h1> check console </h1>
            </div>
        )
    }

}

export default FetchGitApi;