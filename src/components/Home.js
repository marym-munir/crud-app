import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ListItem from './ListItem';

const Home = () => {
    const [data , setData] = useState([]);
    const [searchValue , setSearchvalue] = useState('');
    const navigate = useNavigate();
    
    //function that get data by API request

    const getUserData = ()=>{
        axios.get('https://65350319c620ba9358ec12ae.mockapi.io/userInfo').then(
            (response)=>{
                console.log('get user Data response',response)
                setData(response.data)

            }).catch(
                (error)=>{
                    console.log('get user Data error',error)
                })
    }
    
    useEffect(()=>{
getUserData();
    },[])
  return (
    <>
    <div className='d-flex justify-content-between m-4'>
      <h2>Users Information</h2>
      <input 
      type='text'
      placeholder='Search Here'
      onChange={(event)=>setSearchvalue(event.target.value)}
      style={{borderRadius: '10px'}}
      />
      <button 
      className='btn btn-primary'
      onClick={()=>navigate('/addUser')}
      >
        Create User
        </button>
    </div>
    <table className='table table-bordered table-hover m-4'>
        <thead>
            <tr>
                <th scope='col'>ID</th>
                <th scope='col'>First Name</th>
                <th scope='col'>Last Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Password</th>
                <th scope='col'>Action</th>
            </tr>
        </thead>
        {data.map((user,index)=>{
            return(
              <ListItem 
              user = {user}
              index = {index}
              />
            )
        })}

    </table>
    </>
  )
}

export default Home
