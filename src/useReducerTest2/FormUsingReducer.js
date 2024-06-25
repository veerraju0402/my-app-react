import React,{ useReducer } from "react"
import { signUpFormReducer } from "./signUpFormReducer"
import { signUpFormValidation } from "./signupformvalidation"

const initialFormState = {
    input:{
        "name":'',
        "email":'',
        "password":'',
        "consent":false
    },
    errors:{
        "name":'',
        "email":'',
        "password":'',
    }

}

const FormUsingReducer = () => {
    const [formState,dispatch] = useReducer(signUpFormReducer,initialFormState) 

    const Reset =  () => {
        // initialFormState.errors={}
        // initialFormState.errors = {}
       dispatch({type:'resetErrors'})      
   }

    const onInput = (e) =>{
        //console.log({type:'input',payload:{field:e.target.id,value:e.target.value}});
        dispatch({type:'input',payload:{field:e.target.id,value:e.target.value}})
    }
    const onFormSubmit = (e) =>{
        console.log('entette');
        e.preventDefault()
        dispatch({type:'resetErrors'})
        const errors = signUpFormValidation(formState.input)
        if(errors !== null){
            console.log(errors);
            for (const m in errors){
                dispatch({type:'error',payload:{field:m,value:errors[m]}})
            }
        } else {
            alert('form submitted successfully!!')
        }
    }
    
    return (
        <form id="reducer-form" onSubmit={onFormSubmit}>
            <label htmlFor="name">Name </label>
            <input type="text" id="name" value={formState["name"]} onChange={onInput} />
            {formState.errors["name"]}
            <br />
            <br />
            <label htmlFor="password">Password </label>
            <input type="text" id="password"  value={formState["password"]} onChange={onInput}/>
            {formState.errors["password"]}
            <br />
            <br />
            <label htmlFor="email">Email </label>
            <input type="text" id="email" value={formState["email"]} onChange={onInput} />
            {formState.errors["email"]}
            <br />
            <br />
            <label htmlFor="consent">Send marketing emails? </label>
            <input type="checkbox" id="consent" checked={formState.consent} />
            <button type="submit">Sign Up</button>
            <button  type="reset" name="Reset" onClick={Reset}>Reset</button> 
        </form>
    )
}

export { FormUsingReducer }