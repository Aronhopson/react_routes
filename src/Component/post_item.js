import React from 'react';



const Post_item = (props) => {
    console.log(props)
    return (
        <div>
          {/* React Router will supply any dynamic pieces of the URL to the 
               component via an object called  ===== match.params=====   as own props of the related component. */}
            {props.match.params.id} - {props.match.params.username}
        </div>
    )
}

export default Post_item;  