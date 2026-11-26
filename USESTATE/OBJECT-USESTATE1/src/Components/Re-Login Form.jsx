import { use, useState } from "react"

function Form (){
    const [user,setuser] = useState({
        name:'',
        email:'',
        age:''
    })

    
    const handleform = (e)=>{
        let{name , value} = e.target 
        setuser((i) =>({...i ,[name]:value}))
    }

    return(
    
    <div className="items-center">
    <form  className="flex flex-col" >

    <label htmlFor="name">Name</label>
    <input onChange={handleform} value={user.name} type="text" name="name" id="name" placeholder="Enter your name"/>

    <label htmlFor="email">Email</label>
    <input onChange={handleform} value={user.email} type="email" name="email" id="email" placeholder="Enter your email"/>

    <label htmlFor="age">Age</label>
    <input onChange={handleform} value={user.age} type="text" name="age" id="age" placeholder="Enter your age"/>
    <button>Submit</button>

    <button>Login</button>

    <p>name: {user.name}</p>
    <p>name: {user.email}</p>
    <p>name: {user.age}</p>

    </form>
    </div>)
}

export default Form