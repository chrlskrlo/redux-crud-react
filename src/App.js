import "./input.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, } from "react";
import { addUser, deleteUser, updateUsername } from "./features/Users";

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value)

  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [newUsername, setNewUserName] = useState('');


  return (
    <div className="flex justify-center items-center flex-col mt-4">
      <div className="flex align-center">
        <Box
          sx={{
            '& > :not(style)': { m: 1 },
          }}
        >
          <TextField
            helperText="Please enter your name"
            id="demo-helper-text-misaligned"
            label="Name"
            size='small'
            onChange={
              (event) => { setName(event.target.value) }}
          />

          <TextField
            helperText="Please enter your username"
            id="demo-helper-text-misaligned"
            label="username"
            size='small'
            onChange={
              (event) => { setUserName(event.target.value) }}
          />
          {/* Material Button UI*/}
          <Button
            className="h-10"
            size="small"
            color='success'
            variant="outlined"
            onClick={
              () => {
                dispatch(addUser({
                  id: userList[userList.length - 1].id + 1,
                  name, username,
                }))
              }}
          >Add user</Button>
        </Box>
      </div>

      {/*Userlist section. Mapping each list in userlist*/}
      <div>
        {userList.map((user) => {
          return (
            <div className="p-5 m-5 rounded-xl border-2 border-black text-center ">
              <p className="text-xl">{user.name}</p>
              <p className="text-lg">{user.username}</p>
              
              <TextField
            id="demo-helper-text-misaligned"
            label="New username"
            size='small'
            onChange={
              (event) => { setNewUserName(event.target.value) }}
          />
          <Button 
          variant="text"
          onClick={
            () => {
              dispatch(updateUsername({ id: user.id, username: newUsername }))
            }}>Update Username</Button>
          <Button 
          variant="text"
           color="error"
           onClick={
            () => { dispatch(deleteUser({ id: user.id })) }}>Delete Username</Button>
            </div>
          )
        })}

      </div>
    </div>
  );
}

export default App;
