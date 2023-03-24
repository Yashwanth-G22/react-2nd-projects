import React, { useContext } from "react";
import {yash} from '../API/ContextApi'


const Children =()=>{

    let data = useContext(yash)
    console.log(data);
    return(
        <div>
            App
            <h2>{data}</h2>
        </div>
    )
}
export default Children