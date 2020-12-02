import React, { Component } from 'react';

function FetchGitApi () {
    
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("")
    const [repos, setRepos] = useState("");
    const [avatar, setAvatar] = useState("");
    const [userInput, setUserInput] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https:api.github.com/users/RishabhRawat98")
            .then(res => res.json())
            .then(data => {
            console.log(data)
            setData(data)
      })

  }, []) // Use effect tells react that the component needs to do somehting after rendering the page. 
  
  const setData = ({name, login, public_repos, avatar_url}) => {
    setName(name)
    setUserName(login)
    setUserName(public_repos)
    setAvatar(avatar_url)
  }

  return (
    <div>
    <h1> Navbar for searching the hub</h1>
    <div>      
     <form>
    <h1>Hello</h1>
    <p>Enter your name:</p>
    <input
      type="text"
    />
    <button> Search </button>
  </form>
  <div class="card">
  <img src={avatar} alt="Avatar" />
  <div class="container">
    <h4><b>{name}</b></h4>
    <p>{userName}</p>
  </div>
</div> 
    </div>
  </div>
  
  )
}
    // // state = {
    // //     loading: true,
    // //     person: null,
    // // };

    // async ComponentDidMount () {
    //     const url = "https://api.github.com";
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(data)
        
    // }

    // // render() {
    // //     return (
    // //         <div>
    // //         <h1> check console </h1>
    // //         </div>
    // //     )
    // // }



export default FetchGitApi;