import {useState} from "react";
import "./App1.css";
function App(){
    const [task,setTask]=useState("");
    const [tasks,setTasks]=useState([]);
    const addTask=()=>{
        if(task.trim()==="")return;
        setTasks([...tasks,{text:task,completed:false}]);
        setTask("");

    };
    const deleteTask=(index)=>{
        const newTasks=tasks.filter((_,i)=>i!==index);
        setTasks(newTasks);
    };
    const toggleTask=(index)=>{
        const updated=[...tasks];
        updated[index].completed=!updated[index].completed;
        setTasks(updated);
    };
}