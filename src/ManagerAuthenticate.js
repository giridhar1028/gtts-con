import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button  as bootButton} from 'react-bootstrap';
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';

class ManagerAuthenticate extends Component{
  constructor(props) {
    super(props);
    this.state = {
        radioValue:"Manager",
        
    }

}

onChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
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
             
                    <h3>Please select </h3>
                    <div>
                    <table>
                      <tr> 
                        <td><input type="radio" name="radioValue" value="Manager" checked={this.state.radioValue === "Manager"} onChange={(e) => 
                        this.onChange(e)}></input></td>
                        <td><label>Manager</label></td>
                      </tr>
                      <tr> 
                        <td><input type="radio" name="radioValue" value="DM" checked={this.state.radioValue === "DM"} onChange={(e) => {
                          this.onChange(e)
                        }}></input></td>
                        <td><label>Delivery Manager</label></td>
                        
                      </tr>
                      <tr><Button varient="primary" onClick={() => this.props.onClick(this.state.radioValue)}>Send OTP</Button></tr>
                    </table>
                    </div>
                    
                   
                
              
            
              </div>
            
        </div>
    
  );
}
}
export default ManagerAuthenticate;
