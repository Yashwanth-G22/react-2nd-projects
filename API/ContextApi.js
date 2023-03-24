import React, { createContext ,useState } from "react";

export let yash=createContext()

const ContextApi=({children})=>{
    let [ name , setname ] = useState('Yash')
return(
    <div>
        <yash.Provider value={name}>
            {children}
        </yash.Provider>
    </div>
)

}
export default ContextApi