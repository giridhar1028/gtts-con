import React, {Component} from 'react';
import { ThemeProvider } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';

let Interval;
class Otpauthenticate extends Component{

  constructor(props) {
    super(props);
    this.state = {
        radioValue:"",
        otp : this.props.otp,
        resend: false,
        
        
    }
}

componentDidMount(){
  let i = 0;
  Interval = setInterval(() => {

    
    i++;
    if(i === 30){
      this.handleSetInterval();
      this.setState({resend:true});
      clearInterval(Interval);
    }
    console.log(i);
    
  }, 1000);

  
}

handleSetInterval(){

this.setState({otp:"0"})

}

handlecancle = () => {
   clearInterval(Interval);
   this.props.cancle()
}

handleSubmit = e => {

    console.log(this.state.otp);
    
    
    

    if(parseInt(this.state.otp) === parseInt(e)){

      clearInterval(Interval);
      this.handleSetInterval();
      sessionStorage.setItem("Login","true");
      this.props.confirm()
      console.log("Success");
      
    }
    else{

      document.getElementById("div").innerHTML = "Pasword incorrect"
      console.log("failure");
      
    }
}

generateOtp = (input) =>{

  console.log(input);
  
  axios.post('http://localhost:4000/Otpgenerator' , {Authenticate:input} )
  .then(res => {

       console.log(res);
       this.setState({resend:false,otp:res.data});
       document.getElementById("text").value = ""
       this.componentDidMount()
      })
}

render(){
  return(
    <div>
        <div style={{backgroundColor: "#282c34",
                      /* background-color:white; */
                      minHeight:"100vh",
                      display:"flex",
                      flexDirection:"column",
                      alignItems:"center",
                      justifyContent:"center",
                      fontSize:"calc(10px + 2vmin)",
                       color:"white"
                      }} >
             
                    Enter Otp
                    <input type="text" id="text" required></input>
                     {
                       !this.state.resend &&  <Button variant="primary" onClick={() => this.handleSubmit(document.getElementById("text").value)}>Confirm</Button>
                    
                     }
                     {

                       this.state.resend &&  <Button variant="primary"  onClick={() => this.generateOtp(this.props.input)}>resend</Button>
                    
                     }    
                     <div id="div"></div>
                   <Button variant="primary" onClick={() => this.handlecancle()}>Cancel</Button>
                    
              </div>
            
        </div>
    
  );
}
}
export default Otpauthenticate;
