// import React from "react"
// import Navbar from "./Navbar/Navbar"
// import { BrowserRouter } from "react-router-dom"
// import RoutesApplication from "./Routes/RoutesApplication"
// // import Home from "./Pages/Home"
// // import Contact from "./Pages/Contact"
// // import LogIn from "./Pages/LogIn"
// // import SignUp from "./Pages/SignUp"
// // import Mobile from "./Pages/Mobile"

// const App=()=>{

//     return(
//     <BrowserRouter>
//     <Navbar/>

//         <RoutesApplication/>

//     {/* <Routes>
//         <Route path="/home" element={<Home/>}>
//             <Route path="home/mobile" element={<Mobile/>}></Route>
//         </Route>
//         <Route path="/contact" element={<Contact/>}></Route>
//         <Route path="/login" element={<LogIn/>}></Route>
//         <Route path="/signup" element={<SignUp/>}></Route>
//    </Routes> */}

//     </BrowserRouter>)
// }
// export default App

import React from 'react'
import Todo from './Todo'
// import Axios from './Components/Axios'

function App() {
  return (
    <div>
      {/* <Axios/> */}

      <Todo/>
    </div>
  )
}

export default App




