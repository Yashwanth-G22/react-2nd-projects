import React from 'react'
import '../Components/style.css'
import { useEffect } from 'react'
import { useRef , useState } from 'react'

function Todo() {

    let nameRef=useRef()
    let [ text , settext ] = useState(()=>{
        let svaedTodo = JSON.parse(localStorage.getItem("data"))
        if(svaedTodo !== "" && svaedTodo !== null){
            return svaedTodo;
        }else{
            return []
        }
    })

    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(text))
    },[text])
    const handleData = (e) => {
        e.preventDefault()
        let list = nameRef.current.value
        console.log(list)
        nameRef.current.value=""
        settext([...text,list])
    }

  return (
    <div className='container'>
      <form>
      <input type="text" placeholder='Enter todo list' ref={nameRef} />
      <button type='submit' onClick={handleData}>Click Todo </button>
      </form>

      <div className='todolist'>
        {
         text !== null ?  text.map((a,index)=>{
           return <ul key={index}>
                <li>{a}</li>
            </ul>
          }) : []
        }
      </div>
    </div>
  )
}

export default Todo
