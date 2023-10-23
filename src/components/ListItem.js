import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const ListItem = (props) => {
    const {user,index,data,onDeleteSuccess} = props;
    const navigate = useNavigate();
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
  return (
    <>
      <tbody>
                    <tr>
                        <td>{index+1}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>
                          <img src='https://cdn-icons-png.flaticon.com/512/3405/3405244.png'
                          style={{height:'25px',width:'25px'}}
                          onClick={()=>handleDeleteUser(user.id)}
                          />
                        </td>
                    </tr>
                </tbody>
    </>
  )
}

export default ListItem
