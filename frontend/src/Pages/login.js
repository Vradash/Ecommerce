import { useState , useEffect} from "react"
import axios from "axios"

export default function Login(props){
    const [header,setheader] = useState("Login");
    const [onSubmit,setSubmit]=useState(false);
    const [onLogIn,setLogIn]=useState(false);

    const [userData,setUserData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value.toString();
        // console.log(name,value)
        setUserData({...userData,[name]: value});
        //writing in brackets means im adding dynamic data
    }
    // console.log(userData)

    useEffect(() => {
        axios.post(`${props.apiURL}/api/auth/register`,{
            username: userData.username,
            email: userData.email,
            password: userData.password,
        })
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err.message)) 
    },[onSubmit])
    
    useEffect(() => {
        axios.post(`${props.apiURL}/api/auth/login`,{
            username: userData.username,
            // email: "",
            password: userData.password,
        })
        .then((res)=>props.func(res))
        .catch((err)=>console.log(err.message))
    },[onLogIn])

    const handleSubmit=()=>{
        setSubmit(!onSubmit);
    }
    const handleLogIn=()=>{
        setLogIn(!onLogIn);
    }
    const handleClick=(e)=>{
        setheader(e.target.innerHTML);
        setUserData({
            username: "",
            email: "",
            password: "",
        });
    }
    // {props.func()}
    return (
        <>
            <div className="userContainer">
                <div className="head">{header}</div>

                
                <div className="user" id="name">
                    <input type="text" name="username" placeholder="Name" value={userData.username} onChange={handleInput}/>
                </div>

                {header==="Login"?<div />:
                <div className={header==="Login"?"invisible":"user"} id="email">
                    <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleInput}/>
                </div>
                }

                <div className="user" id="key">
                    <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleInput}/>
                </div>

                <div className="forgotpass" onClick={handleClick}>{header==="SignUp"?"Login":"SignUp"}</div>

                <div className="buttons"> 
                    <button className={header==="Login"?"userLog":"invisible"} type="submit" onClick={handleLogIn}>Login</button>
                    <button className={header==="SignUp"?"userSign":"invisible"} type="submit" onClick={handleSubmit}>Sign Up</button>
                </div>
                
            </div>
        </>
    )
}
