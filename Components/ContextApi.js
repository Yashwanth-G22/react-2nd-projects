import React, { createContext, useState } from "react";

export let userContext=createContext()

const ContextApi = ({childern}) => {
    let [name , setname] = useState();
    return(<div>
        <userContext.Provider value={name}>
            {/* {childern} */}
        </userContext.Provider>
    </div>)
}

export default ContextApi