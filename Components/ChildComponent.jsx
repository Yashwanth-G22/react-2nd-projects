import React from "react";


export default class ChildComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            counter:0
        }
    }

    increment=()=>{
        this.setState(({counter})=>({counter:counter+1}))
       
    }
    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
            <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}