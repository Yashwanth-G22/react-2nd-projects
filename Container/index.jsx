import React, { Component } from "react";


class Container extends Component{

    render(){
        const {text,value,btnText,btnClass,click}=this.props
        return(
            <div className={`container ${btnClass}`}>
                <div>
                    <h2>{text}</h2>
                    <h2>{value}</h2>
                    <button onClick={click}>{btnText}</button>
                </div>
                
            </div>
        )
    }
}
export default Container