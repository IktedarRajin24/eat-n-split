/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Friend from '../Friend/Friend';
import FormAddFriend from '../FormAddFriend/FormAddFriend';

const FriendList = ({friends, addFriend, onSetAddFriend, onSetFriendList, onSetCurrFriend, currFriend}) => {
    return (
        <>
            <div className='flex flex-col items-end'>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend} onSetCurrFriend={onSetCurrFriend} currFriend ={currFriend}/>)
            }
            {addFriend && <FormAddFriend onSetFriendList={onSetFriendList} onSetAddFriend={onSetAddFriend}/>}
            <button onClick={()=>onSetAddFriend(isAddFriend => !isAddFriend)} className='bg-orange-500 px-2 py-1 rounded-lg w-1/6 mt-5'>
                {addFriend? 'Close': 'Add Friend'}
            </button>
            
            </div>
            
            
        </>
    );
};

export default FriendList;