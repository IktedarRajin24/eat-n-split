/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const FormSplitBill = ({currFriend, onSplitBill}) => {
    const [totalBill, setTotalBill] = useState("");
    const [userExpense, setUserExpense] = useState("")
    const [whoPaying, setWhoPaying] = useState("user")
    const friendsExpense = Number(totalBill ? totalBill - userExpense :"")

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!totalBill ) return
        onSplitBill(whoPaying === 'user'? friendsExpense : -userExpense)
    }
    
    return (
        <form className='bg-orange-50 w-8/12 px-5 py-5 flex flex-col' onSubmit={handleSubmit}>
            <h3 className='my-5 text-2xl font-semibold'>Split Bill with {currFriend.name}</h3>
                <div className='flex justify-between items-center mb-3'>
                    <label htmlFor="bill">Total Bill</label>
                    <input type="text" className='w-8/12 px-2 py-1' value={totalBill} onChange={e=>setTotalBill(Number(e.target.value))}/>
                </div>
                <div className='flex justify-between items-center mb-3'>
                    <label htmlFor="your-expense">Your Expense</label>
                    <input type="text" className='w-8/12 px-2 py-1' value={userExpense} onChange={e=>setUserExpense(Number(e.target.value)> totalBill? userExpense : Number(e.target.value))}/>
                </div>
                <div className='flex justify-between items-center mb-3'>
                    <label htmlFor="friends-expense">{currFriend.name}'s Expense</label>
                    <input type="text" className='w-8/12 px-2 py-1' disabled value={friendsExpense}/>
                </div>
                <div className='flex justify-between items-center mb-3'>
                    <label htmlFor="paying">Who is paying?</label>
                    <select name="" id="" className='w-8/12 px-2 py-1' value={whoPaying} onChange={e=> setWhoPaying(e.target.value)}>
                        <option value="user">You</option>
                        <option value="friend">{currFriend.name}</option>

                    </select>
                </div>
                <input type="submit" value="Split Bill" className='bg-orange-500 px-2 py-1 rounded-lg w-1/6 mt-5' />
        </form>
    );
};

export default FormSplitBill;