import React ,{Component} from 'react'     

import axios from 'axios'

const reducer = (state,action) =>{ // actionları yöneten personel
    
        switch(action.type)
        {
          case "DELETE_USER":
          return{
             ...state, // split işlemi
             
             users : state.users.filter(user => action.payload !== user.id)

          }
          case "ADD_USER":
          return{
             ...state, // split işlemi
             
             users :[...state.users,action.payload]
          }

          default :
          return state
// eski state geri döndük uygulamada bulunmayan bir type gnderilmi ise
        }

}


const UserContext = React.createContext();

//Provider , Consumer

//ilerde UserProvider altına appi koyacağımız için
//bunu ekledik
// {this.props.children} aslına burası App
//UserContext.Provider sarmaladığı comp ları gösterir
export  class UserProvider extends Component {
// App.js state 
// value = {this.state} ile aldık sarmala    
  state = {

    users : [],
    dispatch : action =>{  // bu da value ile istenilen classa çekiliyor daha sonra içine action paramteresini alıp çağırılyıor

      this.setState(state =>reducer(state,action))
    }

    
  }

  //axios
  componentDidMount = async () => {   //async internet sitelerine bağlanmak için await veri çekerse geri dönene kadar bekliyor
    
  
    const response =  await axios.get("http://localhost:3005/users")

    console.log(response)   

    this.setState({

      users : response.data
    })
  }
  
    render() {
        return (
            
            <UserContext.Provider value = {this.state}>
             {this.props.children} {/*kimi sarmalarsak onu kullanıcak*/}
            </UserContext.Provider>
        )
    }
}

//state leri kullanmak içim oluşturduk
const UserConsumer = UserContext.Consumer;

export default UserConsumer;


/*
   state = {

    a : 10,
    b : 20,
    c : 30,

   }

   ...state,
   a : 20

   {
    a : 10, x bunun değeri değişir
    b : 20,
    c : 30,
    //bunu dersek
    a: 20
    
   }



 state = {

 
   users : [
        {
          "id" : "unique-1",
          "fullName" : "Mustafa Fırat YILMAZ",
          "department" : "IT",
          "salary" : 5000
        },
        {
          id : "unique-2",
         "fullName" : "Emre YILMAZ",
         "department" : "IT",
         "salary" : 10000
        },
        {
         "id" : "unique-3",
         "fullName" : "Murat YILMAZ",
         "department" : "",
         "salary" : 8000
        }
 
     ] ,

     dispatch : action =>{

      this.setState(state => reducer(state,action))
     }

    }
     ...state,

     users : [...users,action.payload]


   





*/
