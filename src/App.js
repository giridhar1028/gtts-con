import React,{Component} from 'react';
import ManagerAuthenticate from './ManagerAuthenticate';
import ConfirmSelection from './ConfirmSelection';
import Otpauthenticate from './OtpAuthenticate'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button  as bootButton} from 'react-bootstrap';
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';
import axios from 'axios';
import Queue from './Queue'
import Employeedetails from './Empdeatils'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        radioValue:"",
        display:"",
        Login:sessionStorage.getItem("Login")
        
    }

}

componentDidMount(){

if(sessionStorage.getItem("Login") === "true"){

  this.setState({display:<Employeedetails logout={() => this.handleCancle()}></Employeedetails>})

  }
  else{

    this.setState({display:<ManagerAuthenticate onClick={(e) => this.handleManagerSelection(e)}></ManagerAuthenticate>})

  }

}

generateOtp = (input) =>{

  console.log(input);
  
  axios.post('http://localhost:4000/Otpgenerator' , {Authenticate:input} )
  .then(res => {

       console.log(res);
       this.setState({display: <Otpauthenticate input={input}  otp={res.data} confirm={() => this.componentDidMount()} cancle={() => this.handleCancle()}></Otpauthenticate>})
      })
}


handleCancle = () => {

  
       this.setState({display:<ManagerAuthenticate onClick={(e) => this.handleManagerSelection(e)}></ManagerAuthenticate>})
  

}

//Manager selection function
handleManagerSelection(input){

  console.log("Manager Selection Clickedx");
  this.setState({
    display: <ConfirmSelection name={input} confirm={(e) => this.generateOtp(e)} cancle={() => this.handleCancle()}></ConfirmSelection>
  })
  
}

render(){
  return(
    <div>
      
      {this.state.display}
            
     </div>
    
  );
}
}
export default App;
