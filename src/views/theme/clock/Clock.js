// import { useState } from "react"

// function Clock(){
//     let ctime=new Date().toLocaleTimeString();

//     const[time,setTime]=useState(ctime)
//     const[msg,setMsg]=useState("welcome")
    
//     function Change(){
//         ctime=new Date().toLocaleTimeString();
//         setTime(ctime)
//     }

//         function changeMssg(){
//             // let myDate = new Date();
//             let hours= new Date().getHours();
            
        
//             if (hours < 12)
//                 setMsg("morning")
//             else if (hours >= 12 && hours <= 17)
//                setMsg("afternoon")
//             else if (hours >= 17 && hours <= 24)
//                setMsg("night")
//     }
//     setTimeout(()=>{
//         Change()
//     },1000) 
   
// return(
//     <>
//     <div>{time}</div>
//     <h2>{msg}</h2>
//     <button onClick={changeMssg}>click</button>

   
//     </>
//     )
//     }
// export default Clock




import { useState } from "react"
import axios from 'axios'

function Innt(){
    const[api,setApi]=useState([])
    function upDate(){
        axios.get('https://archive.org/metadata/TheAdventuresOfTomSawyer_201303')
        .then((response)=>{
            console.log(response)
            setApi(response.data.files)
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{

        })

    }
    return(<>
    <button onClick={upDate}>click</button>
    <p>
        {api.map((file)=>
            <li>
                Text:{file.name}
            </li>
        )}
    </p>
    </>)
}
export default Innt





