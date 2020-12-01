import React, { Component } from 'react';
// import FetchGitApi from "../../components/FetchGit"
import Form from '../../components/Form';

class Home extends Component {
    render () { 
        return (
            <div>
            <h1>Git HUB API</h1>
            <Form />
            {/* <FetchGitApi /> */}
            </div>
        )
    }
}

export default Home;