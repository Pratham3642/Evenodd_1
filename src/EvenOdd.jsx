import { useState,useRef } from "react";
import axios from "axios";

function EvenOdd()
{
    const rNum =useRef();
    const [num,setNum]=useState("");
    const [msg,setMsg]=useState("");

    const hNum =(event) => {setNum(event.target.value);}

    const check =(event)=>{
        event.preventDefault();

        if(num=="")
            {
                alert("u did not enter integer");
                setMsg("");
                rNum.current.focus();
                return;
            }

        let data ={params:{number:num}};
        let url ="https://eoapp20june24.onrender.com"
        axios.get(url,data)
        .then(res=>setMsg(res.data.r))
        .catch(err=>setMsg("Issue"+err));
    }

    return(
        <>
        <center>
            <h1>Even Odd App</h1>
            <form onSubmit={check}>
                <input type="number" placeholder="Enter integer" onChange={hNum} ref={rNum} />
                <br /><br />
                <input type="submit" value="Find Even/Odd" />
            </form>
            <h2>{msg}</h2>
        </center>
        </>
    );

}

export default EvenOdd;