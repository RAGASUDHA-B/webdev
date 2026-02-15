import {useEffect,useState}from "react";//use state stor data,useeffect run code
function App(){ //starts with a component every react
   const [message,setMessage]=useState("") //message-current value,setmessage-function to update it,""initial value empty
   useEffect(()=>{//code runs automatically
    fetch("https://localhost:5000/") //get request to backend
    .then(res=>res.text()) //convers backend response into text
    .then(data=>setMessage(data)); //stores backend response into message
   },[]);
   return(//jsx ui part
    <div>
      <h1>MERN Project</h1>
      <p>{message}</p>
    </div>
   );
}
export default App;//makes app usable in other files and react start rendering from this components