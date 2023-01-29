import React, {useState} from 'react'
import UserTable from './tables/UserTable'
import AddUserForm  from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'

const App = () => {
    const usersData = [
        {id: 1, name: 'Name data', username: 'Username data'},
        {id: 2, name: 'Name data 1', username: 'Username data 1'},
        {id: 3, name: 'Name data 2', username: 'Username data 2'},
    ]
    
    //Create a state for whether or not edit mode is turned on. Default is false 
    const[editing, setEditing] = useState(false)
    
    //Create an initialFormState and initialized to empty
    const initialFormState = {id: null, name:'', username: ''}

    //Create a state for the current user being edited is
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const [users, setUsers] = useState(usersData)

    const addUser = (user) => {
        user.id = users.length + 1
        setUsers([...users, user])
    }

    //Turn on edit mode, and set the current user
    const editRow = (user) => {
        setEditing(true)

        setCurrentUser({id: user.id, name: user.name, username: user.username})
    }

    const deleteUser = (id) => { 
        setEditing(false)
        setUsers(users.filter(user => id !== user.id))
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)
        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    return (
        <div className='container'>
            <h1>CRUD App with</h1>
            <div className='flex-row'>
                <div className='flex-large'>
                    {editing ? (
                        <div>
                            <h2>Edit user</h2>
                            <EditUserForm setEditing={setEditing} currentUser={currentUser} updateUser={updateUser} />
                        </div>
                    ) : (
                        <div>
                            <h2>Add users</h2>
                            <AddUserForm addUser={addUser} />
                        </div>
                    )}
                </div>
                <div className='flex-large'>
                    <h2>View users</h2>
                    <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
                </div>
            </div>
        </div>
    )
}

export default App