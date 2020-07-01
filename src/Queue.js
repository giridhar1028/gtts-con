import React ,{Component} from 'react';
import './App.css';
import axios from 'axios';
import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';

let Interval;
export default class Queue extends Component{

    constructor(props){
        super(props);
        this.state={
            queueList:"",
            displayQueue:"sdlksdl"
        }

    }

    

      

 render(){
     console.log("render");
     
    return(

        <div>
            
                        <div style= {{
                                        borderBottom:"1px solid #ffff ",
                                        color:"#282c34",
                                        marginBottom:"10px",
                                        marginTop:"10px"
                                        }}>
                                        <b> Queue ({this.props.details.length})</b>
                        </div>
                       <table>
                            {this.props.details.length !== 0 && this.props.details.map(que => 
                            <tr >
                                        <td style={{textAlign:"center"}} onClick={() => this.props.onClick(que.empid)}>{que.empid}</td>
                                        <td style={{textAlign:"center"}} onClick={() => this.props.onClick(que.empid)}>{que.empName}</td>
                                        <td style={{textAlign:"center"}}> <button className="button1"  onClick={() => this.props.hold(que.empid)}>Hold</button></td>
                            </tr>)}
                       </table>

                   
        </div>
    )
}
}