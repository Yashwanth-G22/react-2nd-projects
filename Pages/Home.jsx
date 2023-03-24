import React from "react";
import { Link,Outlet } from "react-router-dom";

const Home=()=>{
    
    return(<div>
        <Link to='/login'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9o6gQslfPz3WXDB-hrqhiT_M7l7Z5TSBD1A&usqp=CAU" alt="" width={300}/></Link>
        <h1>Am the Good Am Strong I Can Do It</h1>
        <h2><Link to="/mobile">Mobile</Link></h2>
        <div>
        <Outlet/>
        </div>
    </div>)
}
export default Home