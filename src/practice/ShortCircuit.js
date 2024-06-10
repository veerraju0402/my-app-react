



const functionmySc=()=>{

    const [game,setGame] = useState(true);
 
    const temp=()=>{
        return(
            <div>I like games</div>
        );
    }

    return(
            <div>
            {game && <temp/>}  

            {/* if first value is true,then it returns second element */}
            </div>
    )


    //spread operator

    const obj1={a:1,b:2}
    const obj2={c:3,d:4}

    const obj3={...obj1,...obj2}
    console.log(obj3)

}