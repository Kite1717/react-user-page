import React, { Component } from 'react'


import User from './User'
import UserConsumer from '../context'
class Users extends Component {
    render() {

        return(
            <UserConsumer>
            {
                value =>{
                    const{users} = value // this.state = value
                    return(
                        <div>
                        {
                             users.map(user =>{
                                return (
                                    <User
                                     key = {user.id}
                                     id = {user.id}
                                    fullName = {user.fullName}
                                    department = {user.department}
                                    salary = {user.salary}
           
                                   />
                                )
                            })
                        
                        
                        }
                        </div>
                    )
                  

                }
            }
            </UserConsumer>
        )
       
     

    }

}

export default  Users;