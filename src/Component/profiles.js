import React from 'react';

//BrowserRouter => interract with url(history)   Route=> execute whatever the BrowserRouter is gonna pass,,
import {  Link } from "react-router-dom"

const Profile = (props) => {

    const Redir = ()=>{
       props.history.push("/")
    }
   
    return(
        <div>Profile folder
            <Link to={{
                pathname: `${props.match.url}/post`
            }}> Take me to /Profile/post</Link>

            {Redir()}
        </div>
    )
}

export default Profile;