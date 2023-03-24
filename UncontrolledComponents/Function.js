import React,{useRef} from "react";

const Function=()=>{
    let nameRef=useRef()
    let passwordRef=useRef()

    
    let handleChange=()=>{
        let name = nameRef.current.value
        console.log(name);
    }
    return(<div>
        <from>
            <label>Username Or Email</label>
            <input type='text' placeholder="Enter Ur Name Or Email" ref={nameRef}/>
            <label>Password</label>
            <input type="text" placeholder="Enter Ur Password" ref={passwordRef}/>
            <button type="submit" onClick={handleChange}>LogIn</button>
        </from>
    </div>)
}
export default Function