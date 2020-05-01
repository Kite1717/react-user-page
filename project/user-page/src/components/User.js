import React, { Component } from 'react'

import PropType from 'prop-types'

import UserConsumer from '../context'
//short cut rcc
 class User extends Component {

   /* state = {
        isVisible :false,
    }*/

 
   constructor(props)
   {
       super(props)

       this.state = {
           test : 'Test',
           isVisible : false,
       }

    this.onClickEvent =   this.onClickEvent.bind(this)  //bind etme yöntemi 1
   }



   /*onClickEvent = (e) =>{

    
    console.log("test")

   } */

  /* onClickEvent = (e) =>{  // bind etmeye gerek yok oto yapar

    console.log(this)
   } */

   onClickEvent (number,e){  // bind etmeye gerek  var this.onClickEvent.bind(this) şeklinde çağır

    console.log(e.target)
    console.log(this)
    console.log(number)


   
     this.setState({
        isVisible : !this.state.isVisible, // şu an ki halinin tam tersini kendisine ata
    })
   }




   onDeleteUser = (dispatch,e) =>{
    const {id} = this.props

    //consumer dispatch
    dispatch({type : "DELETE_USER", payload : id})

    //burası bitince consoledan bak
   
   }

   componentWillUnmount = () =>{ // component ekrandan tam kaldırılmadan önce çalışır

         window.alert("successfully removed!!")

   }

static defaultProps  = {
    fullName : "No content",
    derpartment : "No content",
    salary : "No content"
}

    render() {
        //Destructing
        const {fullName,department,salary} = this.props
        const {isVisible} = this.state
        return(
              
            <UserConsumer>
            {
                value =>{
                const {dispatch} = value;

                return (
                    <div className = "col-md-8 mb-4" >
                 
                        <div className="card" style = { isVisible ? {backgroundColor : "#C70039" ,color : '#fff'} : null}>
                            <div className="card-header d-flex justify-content-between" onClick = {this.onClickEvent.bind(this,35)}>
                                <h4 className="d-inline" >{fullName}</h4>
                                <i onClick = {this.onDeleteUser.bind(this,dispatch)} className="far fa-trash-alt" style = {{cursor : 'pointer'}}></i>
                            </div>
                            
                            {
                                isVisible 
                                ?<div className="card-body">
        
                                    <p className="card-text">Salary : {salary}</p> 
                                    <p className="card-text">Department : {department}</p> 
                                    <p>{this.state.test}</p>
                                </div>
        
                                : null
                            }
                            
                        </div>
                      
                    </div>
                )

                }
            } 
           
           </UserConsumer>     
           )

          

    }
}
export default User; // final hash summary 


User.propTypes = {

    id: PropType.string.isRequired,
    name : PropType.string,
    department : PropType.string,
    salary : PropType.number,
}