import { useState } from "react"
import FriendList from "./Components/FriendList/FriendList"
import FormSplitBill from "./Components/FormSplitBill/FormSplitBill"

const friends =[
  {
    id: 12132521231,
    name: "Jonas",
    image: "https://i.pravatar.cc/50?u=24",
    balance: 12
  },{
    id: 12132521222,
    name: "Max",
    image: "https://i.pravatar.cc/50?u=21",
    balance: -20
  },
  {
    id: 12132521237,
    name: "Clara",
    image: "https://i.pravatar.cc/50?u=44",
    balance: 0
  },
]
function App() {
  const [friendList, setFriendList] = useState(friends)
  const [addFriend, setAddFriend] = useState(false)
  const [currFriend, setCurrFriend] = useState(null)

  const handleSetCurrFriend = (friend) =>{
    // setCurrFriend(curr => (curr?.id === friend.id? null : friend))
    setCurrFriend((curr) => (curr?.id === friend.id ? null : friend));
    setAddFriend(false)
  }

  const handleSplitBill = (value) =>{
    console.log(value) 
    setFriendList(list => list.map(el => el.id === currFriend.id ? {...el, balance: el.balance + value}: el))
    setCurrFriend(null)
  }

  return (
    <div className="w-9/12 mx-auto mt-10 grid grid-cols-2 gap-x-10">
      <FriendList friends={friendList} onSetFriendList={setFriendList} addFriend={addFriend} onSetAddFriend={setAddFriend} onSetCurrFriend ={handleSetCurrFriend} currFriend={currFriend}/>
      {currFriend && <FormSplitBill currFriend={currFriend} onSplitBill={handleSplitBill}/>}
      
    </div>
  )
}

export default App
