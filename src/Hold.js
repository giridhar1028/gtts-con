import React ,{Component} from 'react';
import './App.css';
import axios from 'axios';


let Interval;
export default class Queue extends Component{

    constructor(props){
        
        
        super(props);
        this.state={
            queueList:[],
            quedisp:false,
            displayQueue:"sdlksdl"
        }

    }

    async componentDidMount(){

       console.log("called2");

       
       

       let queue = await axios.get('http://localhost:4000/getHoldArray');
            console.log(queue);
            this.setState({queueList: queue.data,quedisp:true});
         
       }
async componentWillReceiveProps(){

    let queue = await axios.get('http://localhost:4000/getHoldArray');
    console.log(queue);
    
    this.setState({queueList: queue.data,quedisp:true});
 
}


      

 render(){
     
     
    return(

        <div>
            
                        <div style= {{
                                        borderBottom:"1px solid #ffff ",
                                        color:"#282c34",
                                        marginBottom:"10px",
                                        marginTop:"10px"
                                        }}>
                                        <b> On hold ({this.state.queueList.length})</b>
                        </div>
                       <table>
                            {this.state.quedisp && this.state.queueList.map(que => 
                            <tr >
                                        <td style={{textAlign:"center"}} onClick={() => this.props.onClick(que.empid)}>{que.empid}</td>
                                        <td style={{textAlign:"center"}} onClick={() => this.props.onClick(que.empid)}>{que.empName}</td>
                                        <td style={{textAlign:"center"}}> <button className="button1"  onClick={() => this.props.unhold(que.empid)}>Unhold</button></td>
                            </tr>)}
                       </table>

                   
        </div>
    )
}
}