import React ,{ useEffect , useState } from 'react'
import './style.css'
import axios from 'axios'

function Axios() {

    let [data ,setdata] = useState()

    useEffect(()=>{
        let url="https://jsonplaceholder.typicode.com/todos"
        axios(url).then(a=>setdata(a.data))
    },[])

    const  deleteRow=(d)=>{
        console.log(d)
        data.filter((a)=>{
            if(a.id !== d){
                console.log("yashwanth")
                
            }
        })
    }


  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {
              data === undefined ? null :  data.map((a,index)=>{
                    return <tr key={a.id} onClick={()=>{deleteRow(a.id)}}>
                        <td>{a.id}</td>
                        <td>{a.title}</td>
                        
                    </tr>
                })
            }
            
        </tbody>
      </table>
    </div>
  )
}

export default Axios
