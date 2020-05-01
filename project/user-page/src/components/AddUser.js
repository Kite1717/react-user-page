import React, { Component } from 'react'


import UserConsumer from '../context'
import posed from 'react-pose'

var uniqid = require('uniqid');
//console.log(uniqid())
const Animation = posed.div({


    visible: { 
        
        opacity: 1 ,  // şuan ki halinden 1 e getir demek
        applyAtStart : {  // bu işe başlamadan önce
            display : 'block'
        } 
    
    
    },
    hidden: { 
        opacity: 0, // şuan ki halinde 0 a getir demek
        applyAtEnd : {  // bu işi bitirdikten sonra
            display : 'none'
        } 
    }
  })

  //btn-block bloğun hepsini kapsasın 
 class AddUser extends Component {

    state = {
        visible : false,
        fullName : "",
        salary : "",
        department : "",

    }
    changeVisibility = (e) =>{

        this.setState({
            visible : !this.state.visible
        })
    }

  
   changeName = (e) =>{
     
        // biz bunu kullanarak state mii değiştirirsek 
        // otomatikte input value değştirmiş oluyoruz
        const value = e.target.value
        this.setState({

            fullName : value,
        })
        console.log(this.state.fullName)
    }

     
   /* changeDepartment = (e) =>{

        const {value} = e.target.value
        this.setState({

            department : value,
        })
    }
    changeSalary = (e) =>{

        const {value} = e.target.value
        this.setState({

            salary : value,
        })
    } */

    changeInput = (e) =>{  // tek fonsk indirdik

         //e.target.name = fullName
         const name = e.target.name;
         //const ahmet = e.target.id;
         const value = e.target.value;
         console.log(value)

        this.setState({
           [name] : value, // [name] name değişkenin değeri demek yani [ASDSA] = "fullName"

            // [ahmet] : value  
        })

        console.log(this.state.salary)
        console.log(this.state.department)
        

    }  

    addUser = (dispatch,e) =>{

        // formun default davranışı sayfanın yenilenmesi onu engellemeliyiz
       e.preventDefault(); // default davranış engelleme fonskiyonu

        const {fullName,department,salary} = this.state // aldık

        const newUser = {  // yeni kullanıcı

              id : uniqid(),
              //ES5
             /* fullName : fullName,
              salary : salary,
              department : department, */
             //ES6
            fullName,
              salary,
              department,

        }
       // console.log(uniqid())

       dispatch({type : "ADD_USER",payload : newUser })

    }


    render() {

        const {visible,fullName,salary,department} = this.state

        // ************ controlled components**************
        //name,salary,department console hatası alıncak bir bak
        // bu stateleri değiştirmek için onChange eventini implement etmelisin!!!
        // react tüm elementler kontrollü component olarak geçer
        // bunlar da kendi için state barındırır
        //input - textarea-select mutlaka onChange eventi olması gerekir
       
       
          return( 
          <UserConsumer>
            {
            value =>{
                const {dispatch} = value; // this.state context içinde ki   this.state = value
                    return(
                        <div className = "col-md-8 mb-4">
        <button onClick = {this.changeVisibility} className = "btn btn-dark btn-block mb-2"> {visible ? "Hide Form" : "Show Form"} </button>
        <Animation pose = {visible ? 'visible' : 'hidden'}>
            <div className = "card">
                <div className="card-header">
                <h4>Add User Form</h4>
                </div> 
               
                <div className="card-body">
                    <form /* burası önemli */onSubmit = {this.addUser.bind(this,dispatch)}> 
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input  // kontrollü componentler
                            value = {fullName} 
                            onChange = {this.changeInput} // value değiştirmek bu eventi yazmamız lazım
                            name = "fullName" //const  
                            id = "fullName"
                            placeholder = "Enter the name"
                            className = "form-control"
                            type="text"/>

                        </div>

                        <div className="form-group">
                            <label htmlFor="department">Department</label>
                            <input 
                            value = {department}
                            onChange = {this.changeInput}
                            name = "department"
                            id = "department"
                            placeholder = "Enter the department"
                            className = "form-control"
                            type="text"/>

                        </div>

                        <div className="form-group">
                            <label htmlFor="salary">Salary</label>
                            <input 
                            value = {salary}
                            onChange = {this.changeInput}
                            name = "salary"
                            id = "salary"
                            placeholder = "Enter the salary"
                            className = "form-control"
                            type="number"/>

                        </div>

                        <button className = "btn btn-danger btn-block" type = "submit">Add User</button>
                    </form>
                    
                </div>  
            </div>
          

            </Animation>
                        </div>
                    )
    






                    }
                  
            }
          </UserConsumer>  
          )
       
       
       
       
    }
}
export default AddUser;