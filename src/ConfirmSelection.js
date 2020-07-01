import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button  as bootButton} from 'react-bootstrap';
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';

class ConfirmSelection extends Component{
  constructor(props) {
    super(props);
    this.state = {
        radioValue:"",
        
        
    }

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
             
                    Are you Sure to send OTP to {this.props.name} Mail

                    <Button varient="primary" onClick={()=> this.props.confirm(this.props.name)}>Confirm</Button>
                    <Button varient="primary" onClick={() => this.props.cancle()}>Cancel</Button>
                    
                   
                
              
            
              </div>
            
        </div>
    
  );
}
}
export default ConfirmSelection;
