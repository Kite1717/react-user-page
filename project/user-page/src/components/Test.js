import React, { Component } from 'react'

  class Test extends Component {

    constructor(props)
  {
    super(props) // her zaman yapılması gereklidir
   // console.log(this.props)

    this.state = {
        a : 10,
    }
    console.log("constructor called ..");
  }
  componentDidMount() { //eklendikten sonra çalışan method
    console.log("componentDidMount called ...")
    //api isteklerimizi gerçekleştirdiğimşz yerdir

    //mantık şu biz bi component oluştruduk fakat belli bir dataya bağlı uzak sunucudan api ile
    // veri çekip statelerimizi güncelliyeceğiz
    this.setState({

        a : 20,
    })
     
  }

  //güncelleme işleminden hemen sonra çalışır sst olduğu zaman çalışır bu method sadece
  componentDidUpdate = (prevProps, prevState) => {  // önceki props ve statelerimizi kullanabiliyoruz
        
    console.log("componentDidUpdate")
}

shouldComponentUpdate = () =>{ // ara katman componentDidMount sonra çalışır  render işlemi tekrardan olup olmamasını kontrol eder 

    // true veya false döndürülmelidir

    console.log("shouldComponentUpdate") 
    return true
}



  //override 

  // render bir tane jsx formatında elemnt geri döndürür 2. asla setSate işlerini burda yapma

    render() {

        /*this.setState({
            a : 20,
        })   render methodu sadece jsx formatında bir elemnt döndürmeye yarar*/

        //state güncellenince render tekrar çalışıyordu o yüzden sonsuz döngüye girecek
        
        console.log("render called..")
        console.log(this.state.a)
        return (
            <div>
                
            </div>
        )
    }
}
export default  Test;