import { useState } from "react"

function Home(){
  const[name,setname] = useState("anurag")
  const[age,setage] = useState(0)
  const[login, setlogin] = useState(false)
  const[skill,setskill]=useState("")
  const[addskill,setaddskill] =useState([])
  const[editindex,seteditindex]=useState(null)
  const handlename =(e)=>{
    setname(e.target.value)
  }
  
  const handleage=(e)=>{
    setage(Number(e.target.value))
  }
  
  const uppercase = ()=>{
    setname(name.toUpperCase())
  }
  
  const lowercase = ()=>{
    setname(name.toLowerCase())
  }
  
   const handlskill =()=>{
     if(!skill.trim())return
     if(addskill.includes(skill.trim()))return
    setaddskill([...addskill,skill])
    setskill("")
   }

   const handledelet = (index)=>{
    console.log(index)
    setaddskill(pre =>pre.filter((item,i)=> i !== index))
   }
   const handleedit =(index)=>{ 
    setskill(addskill[index]) //production level
    seteditindex(index)
    // addskill.filter((item,i)=>i !== index?console.log("hello"):setskill(item)) // meri thinking
   }
   const updatebtn =()=>{
    setaddskill(pre=>pre.map((item,i)=>i === editindex? skill: item))
    setskill("")
    seteditIndex(null)
   }
  return(
    <div className="flex flex-col mt-2 justify-center items-center gap-1.5 border-2">
    
    <input onChange={handlename} type="text" placeholder="enter name" name="" value={name} id="" className="w-[200px]" />

    <input onChange={handleage} type="number" placeholder="enter age" name="" id="" value={age} className="w-[200px]"/>

    <button className="bg-blue-400 w-[200px] border-2" onClick={()=>setage(age=>age+1)}>Increase Age</button>
    
    <button className={`w-[200px] border-2 ${login?" bg-red-400": "bg-blue-400"}`} onClick={()=>{setlogin(pre=>!pre)}}>{login?"Logout":"Login"}</button>

    <button className={`w-[200px] border-2 bg-blue-400`} onClick={uppercase}>Uppercase</button>
    <button className="bg-blue-400 w-[200px] border-2" onClick={lowercase}>Lowercase</button>

    <h1>{name}</h1>
    <h1>{age}</h1>
 
      <div>
     <label htmlFor="skill">Enter Skill: </label>
     <input onChange={(e)=>setskill(e.target.value)} onKeyDown={(e)=>{if(e.key==="Enter"){handlskill()}}} type="text" name="skill" value={skill} id="skill" className="border" /> 

     <button className="ml-2 border border-black-200 p-1 bg-green-300" onClick={handlskill} >Add</button>
     <button className="ml-2 border border-black-200 p-1 bg-blue-400" onClick={updatebtn}>Update</button>
      </div>

    {addskill.map((i,index) => <div><h1>{i}<button className="ml-10 border p-1 bg-red-600 font-black" onClick={()=>handledelet(index)}>Delete</button> <button className="ml-10 border p-1 bg-red-600 font-black" onClick={()=>handleedit(index)}>Edit</button></h1></div>)}

    <h2>Total Skil {addskill.length}</h2>

    </div>
  )
}

export default Home