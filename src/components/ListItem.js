import React from 'react'

const ListItem = (props) => {
    const {user,index} = props;
  return (
    <>
      <tbody>
                    <tr>
                        <td>{index+1}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                    </tr>
                </tbody>
    </>
  )
}

export default ListItem
