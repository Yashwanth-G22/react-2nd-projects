import React,{ useContext } from "react";
import { userContext } from "./ContextApi";


function Child(){
    let data=useContext(userContext)
    return(<div>
        <h1>{data}</h1>
    </div>)
}
export default Child



// import React from "react";
// import './index.css';
// import Container from "./Container";
// import Header from './Container/Header';
// import ContextApi from "./Components/ContextApi";
// import Child from './Components/Child'

// class App extends React.Component{
    
//     constructor(){
//         super()
//         this.state={
//             likes : 1,
//             dislikes : 5
//         }
//         this.handlelikes=this.handlelikes.bind(this)
//         this.handledislikes=this.handledislikes.bind(this)
//     }

//     handlelikes(){
//         this.setState({likes :this.state.likes+1})
//     }
//     handledislikes(){
//         this.setState({dislikes :this.state.dislikes+1})
//     }

//     render(){
//         const { likes , dislikes } = this.state;
//         return(<div>
//             <ContextApi>
//                 <Child/>
//             </ContextApi>
//             <Header text='FeedBack App'/>
//             <section>
//             <Container text='likes'
//              value={likes}
//              btnText='Likes'
//              btnClass='likes'
//              click={this.handlelikes}/>

//             <Container text='dislikes'
//              value={dislikes}
//              btnText='Dislikes'
//              btnClass='dislikes'
//              click={this.handledislikes}/>
//             </section>
//             <Header text={`Total: ${likes + dislikes}`}/>
//             </div>
//         )
//     }
// }

// export default App