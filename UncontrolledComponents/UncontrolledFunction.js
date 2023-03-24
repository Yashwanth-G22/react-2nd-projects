import React, { useRef } from "react"
import '../Pages/style.css'
import { useNavigate } from "react-router-dom"; 

const UncontrolledFunction=(props)=>{

    let nameRef=useRef();
    let PasswordRef=useRef();
    let navigate=useNavigate()

    const onclick=(e)=>{
        e.preventDefault()
        console.log(nameRef.current.value)
        navigate('./')
    }
    return(<div >
        <from >
       <label>UserName r Email</label>
       <input type='text'  placeholder="Enter UserName or Email" ref={nameRef}/>
       <label>Password</label>
       <input  placeholder="Enter U r Password" ref={PasswordRef}/>
       <button type="submit" onSubmit={onclick}>Submit</button>
         </from>
    </div>
    )
}
export default UncontrolledFunction