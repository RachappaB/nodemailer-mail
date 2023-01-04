import logo from './logo.svg';
import './App.css';
import axios  from 'axios';
import React from 'react';
import { useState } from 'react';

function App() {
  const [name,setname] = useState("")
  const [email,setemail] = useState("")
  const [sub,setsub] = useState("")
  const [text,settext] = useState("")
  const handleSubmit = async e => {
   
    e.preventDefault()
    try{
      
        await  axios.post('/',{email,name,sub,text})
        
        window.location.href ="/"

    }catch(err)
    {
        alert(err.response.data.msg)
    }

}
  return (
    <div className="App">
      <h1>Mail by nodemailer</h1>
      <form  onSubmit={handleSubmit}>
      Name:  <input type="text" value={name} onChange={(e) =>{setname(e.target.value)}}/><br/>
      Email:  <input type="email" value={email} onChange={(e) =>{setemail(e.target.value)}} /><br/>
      SUb:  <input type="text" value={sub} onChange={(e) =>{setsub(e.target.value)}}/><br/>
      Text:  <input type="text" value={text} onChange={(e) =>{settext(e.target.value)}}/><br/>
      <button type='submit'>send</button>
      </form>
    </div>
  );
}

export default App;
