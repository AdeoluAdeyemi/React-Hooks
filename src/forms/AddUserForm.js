import React, { useState } from 'react'

const AddUserForm = (props) => {

    const initiateFormState = {id: null, name: '', username:''}
    const [user, setUser] = useState(initiateFormState)
    
    
    const handleFormSubmit = (event) => {
        event.preventDefault()

        if(!user.name || !user.username) return
        props.addUser(user)
        setUser(initiateFormState)
    }

    const handleInputChange = (event) =>{
        const {name, value} = event.target
        
        setUser({...user, [name]: value})
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange} />
            <button>Add new user</button>
        </form>
    )
    
}

export default AddUserForm