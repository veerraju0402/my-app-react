import {  useState } from "react";
import '../App.css';
import axios from "axios";
import React from "react";
// import {Redirect} from "react-router";

export default function SampleRest() {

    const[isSubmitted,setIsSubmitted]=useState(false)

    let [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    let { myName, email, password, confirmPassword } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit =  (e) => {
        e.preventDefault();
         axios.post("https://myreactapp1-6948d-default-rtdb.firebaseio.com/register.json", user).then(()=>
         alert('Data published successfully!!'))
        //setUser({})
        // setIsSubmitted=true
    };



    const Reset =  () => {
        setUser({})
    }
// deprecated,we can use navigate
// if(isSubmitted){
//     return <Redirect to='/home'/>
// }
    return (

        <div>
            <center>
                {/* <form  onSubmit={(e) => onSubmit(e)}> */}
                <form className="myForm" onSubmit={onSubmit}>
                
                    <label htmlFor="Name" className="form-label">
                        Name:
                    </label>
                    <input className="form-input" type="text" name="name" value={myName} onChange={(e) => onInputChange(e)} /><br /><br />
                    
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label><input className="form-input" type="text" name="email" value={email} onChange={(e) => onInputChange(e)} /><br /><br />
                    
                    <label htmlFor="password" className="form-label">
                        Password:
                    </label><input className="form-input" type="password" name="password" value={password} onChange={(e) => onInputChange(e)} /><br /><br />
                    
                    <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password:
                    </label><input className="form-input" type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => onInputChange(e)} /><br /><br />
                    
                    <button className="submit" type="submit" name="submit">submit</button>
                    {/* <button className="submit" type="reset" name="Reset" onClick={Reset}>Reset</button> */}
                    <button className="submit" type="reset" name="Reset" onClick={()=>setIsSubmitted(true)}>Reset</button>

                </form>
            </center>
        </div>
    );

}