import React from 'react';


function UserCard (props) {

    return(
        <div>
            <img src={props.user.avatar_url} alt="user's avatar" />
            <h2>{props.user.name}</h2>
            <a href={props.user.html_url}>{props.user.login}</a>
            <p>Location: {props.user.location}</p>
            <p>Repositories: {props.user.public_repos}</p>
        </div>
    )

}

export default UserCard;