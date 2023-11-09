import axios from 'axios';
import React,{useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

const ManageUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate =useNavigate();
    const {state} = useLocation();

    //object name{state} that stores users from home that user that is selected by clinking edit icon
    console.log("state", state);
    const isExistingUser = state && Object.keys(state).length > 0;
    console.log(isExistingUser);


    useEffect(()=>{
        if(isExistingUser){
            setFirstName(state.firstName)
            setLastName(state.lastName);
            setEmail(state.email);
            setPassword(state.password);
        }
    },[])
    
const addNewUser =(e)=>{
    e.preventDefault();
    if(isExistingUser){
    axios.put(`https://65350319c620ba9358ec12ae.mockapi.io/users/${state.id}`,{firstName,lastName,email,password}).then((response)=>{
        console.log("response post", response)
       }).catch((error)=>{
         console.log('delete user response',error);
       })      
     }
    else{

axios.post("https://65350319c620ba9358ec12ae.mockapi.io/users",{firstName,lastName,email,password}).then((response)=>{
    console.log("response post", response)
}).catch((error)=>{
    console.log("error post", error)
})
    }
}
  return (
    <div>
     <form className= 'm-4'>
        <h1> {isExistingUser ? 'Add User Form' : 'Update User Form'} </h1>
          <div className="form-group m-2">
            <label htmlFor="exampleInputEmail1">First Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter Your First Name" onChange={(e)=>setFirstName(e.target.value)}  value={firstName}/>
          </div>
          <div className="form-group m-2">
            <label htmlFor="exampleInputEmail1">Last Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter Your Last Name" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
          </div>
          <div className="form-group m-2">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)}  value={email}/>
          </div>
          <div className="form-group m-2">
            <label htmlFor="exampleInputEmail1">Password</label>
            <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)} value ={password}/>
          </div>
          
          <button className="btn btn-primary" onClick={addNewUser}>
          {isExistingUser ?  'UpdateUser' : 'AddUser'} </button>
        </form>
    </div>
  )
}

export default ManageUser
