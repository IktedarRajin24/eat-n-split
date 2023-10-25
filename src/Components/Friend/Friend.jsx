/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Friend = ({friend, onSetCurrFriend, currFriend}) => {
    return (
        <div className='flex items-center justify-between w-8/12 px-2 py-2 rounded-lg'>
            <img className='rounded-full' src={friend.image} alt={friend.name} />
            <div className='flex flex-col justify-start w-8/12 ms-5'>
                <p className='text-lg font-semibold'>{friend.name}</p>
                <p className={`font-semibold ${friend.balance > 0? 'text-green-500' : friend.balance< 0? 'text-red-500': ''}`}>{friend.balance > 0? `${friend.name} owes you $${friend.balance}` : friend.balance< 0? `You owe ${friend.name} $${Math.abs(friend.balance)}`: `You and ${friend.name} are even.`}</p>
            </div>
            <button className='bg-orange-500 px-2 py-1 rounded-lg' onClick={()=>onSetCurrFriend(friend)}>{currFriend?.id === friend.id? "Close": "Select"}</button>
            
        </div>
    );
};

export default Friend;