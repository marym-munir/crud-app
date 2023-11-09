import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const ListItem = (props) => {
    const {user,index,data,onDeleteSuccess} = props;

    const [passwordVisibilty, setPasswordVisibililty] = useState(false);
    
    const navigate = useNavigate();
    const {state} = useLocation();
    const handleDeleteUser = (userId) =>{
      axios.delete(`https://65350319c620ba9358ec12ae.mockapi.io/users/${userId}`).then((response)=>{
       console.log('delete user response',response);
      const tempData = data?.filter((item)=>item.id !== userId);
      onDeleteSuccess(tempData);
      navigate('/')
      }).catch((error)=>{
        console.log('delete user response',error);
      })      
    }

    const getPasswordLength = (length) =>{
      let str = '';
      for(let i = 0; i < length ; i++ ){
        str = str + '*'
      }
      return str;
    }
  return (
    <>
      <tbody>
                    <tr>
                        <td>{index+1}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td 
                        onClick = {()=>setPasswordVisibililty(!passwordVisibilty)}>
                          {passwordVisibilty ?  user.password : getPasswordLength(user.password.length)}</td>
                        <td>
                          <img src='https://cdn-icons-png.flaticon.com/512/3405/3405244.png'
                          style={{height:'25px',width:'25px'}}
                          onClick={()=>handleDeleteUser(user.id)}
                          />
                           <img
                src=" https://cdn3.iconfinder.com/data/icons/feather-5/24/edit-512.png"
                style={{ height: "25px", width: "25px" }}
                onClick={() =>navigate('/manageUser',{state :user.id})}
              />
                        </td>
                    </tr>
                </tbody>
    </>
  )
}

export default ListItem
