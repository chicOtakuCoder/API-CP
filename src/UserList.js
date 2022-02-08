import axios from 'axios';
import React, { useState, useEffect } from 'react';

function UserList() {

    const [userList, setUserList] = useState ([]);
    const [error, setError] = useState(null);

    const getUserList = () => {
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUserList(response.data)
            })

            .catch(err => {
                setError(err.message)
            })
        }

    useEffect(() => {
        getUserList()
    },[])

    return (
        <div>
            <ul>
                {userList.map(
                    user => <li key={user.id}>{user.name}</li>
                )}
            </ul>
        </div>
    );
}

export default UserList;
