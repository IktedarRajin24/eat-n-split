/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const FormAddFriend = ({onSetFriendList, onSetAddFriend}) => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("https://i.pravatar.cc/50?u=");
    const handleSubmit = (e) =>{
        e.preventDefault()
        const id = Date.now()
        const imageURL = image + id;
        const newFriend = {id, name, image: imageURL, balance: 0}
        onSetFriendList(friends=> [...friends, newFriend] )
        onSetAddFriend(false)
        
    }
    return (
        <form className='bg-orange-50 w-8/12 mt-10 px-5 py-5 flex flex-col' onSubmit={handleSubmit}>
                <div className='flex justify-between items-center mb-3'>
                    <label htmlFor="name">Friend's Name</label>
                    <input type="text" className='w-8/12 px-2 py-1' value={name} onChange={e=> setName(e.target.value)}/>
                </div>
                <div className='flex justify-between items-center mb-3'>
                    <label htmlFor="name">Friend's Image</label>
                    <input type="text" className='w-8/12 px-2 py-1' value={image} onChange={e=> setImage(e.target.value)}/>
                </div>
                <input type="submit" value="Add" className='bg-orange-500 px-2 py-1 rounded-lg w-1/6 mt-5' />
        </form>
    );
};

export default FormAddFriend;