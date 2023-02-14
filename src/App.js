import "./input.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./features/Users";
import { useState } from "react";



function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value)

  const [name, setName] = useState('');
  const [username, setUserName] = useState('');


  return (
    <div className="flex justify-center items-center flex-col mt-2">
      <div className="space-x-2">
        <input className="border-2 border-black rounded" type='text'
          placeholder="Name..."
          onChange={
            (event) => { setName(event.target.value) }} />

        <input
        className="border-2 border-black rounded"
          type='text'
          placeholder="Username..."
          onChange={
            (event) => { setUserName(event.target.value) }} />

        <button
        className="rounded-full"
          onClick={
            () => {
              dispatch(addUser({
                id: userList[userList.length - 1].id + 1,
                name, username
              }))
            }}>
          Add user</button>
      </div>

      <div>
        {userList.map((user) => {
          return (
            <div className="mt-2 w-60 h-22 p-6 border-2 border-black">
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>

            </div>
          )
        })}

      </div>
    </div>
  );
}

export default App;
