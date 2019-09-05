import React from 'react';

//BrowserRouter => interract with url(history)   Route=> execute whatever the BrowserRouter is gonna pass,,
import { Link } from "react-router-dom"

const Post = () => {
    return (
        <div>
            <Link to="/post/1">Post 1</Link><br />
            <Link to="/post/2">Post 2</Link><br />
            <Link to="/post/3">Post 3</Link><br />
        </div>
    )
}

export default Post;  