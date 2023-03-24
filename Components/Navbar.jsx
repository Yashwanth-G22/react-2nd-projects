import React from "react";


class Navbar extends React.Component{

    constructor(props){
        super(props)
        this.state={
            name:'yash',
            age:23,
            name1:""
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h2>{this.props.data}</h2>
                <h3>y</h3>
            </div>
        )
    }
}



// let Navbar = ({ data }) => {
//     console.log(data);
//     return <div>
//         {
//             data.map((data) => {
//                 return <div>
//                     <ul>
//                         <li>{data}</li>
//                     </ul>
//                 </div>
//             })
//         }

//     </div>
// }

export default Navbar;