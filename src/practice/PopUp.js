import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// export default function MyPopUp() {
//     return (
//         <div>
//             <h4>Popup - GeeksforGeeks</h4>
//             <Popup trigger=
//                 {<button> Click to open popup </button>}
//                 position="right center">
//                 <div>GeeksforGeeks</div>
//                 <button>Click here</button>
//             </Popup>
//         </div>
//     )
// };


// export default function MyPopUp() {
//     return (
//         <div>
//             <h4>Popup - GeeksforGeeks</h4>
//             <Popup trigger=
//                 {<button> Click to open modal </button>} 
//                 modal nested>
//                 {
//                     close => (
//                         <div className='modal'>
//                             <div className='content'>
//                                 Welcome to GFG!!!
//                             </div>
//                             <div>
//                                 <button onClick=
//                                     {() => close()}>
//                                         Close modal
//                                 </button>
//                             </div>
//                         </div>
//                     )
//                 }
//             </Popup>
//         </div>
//     )
// };


// export default function MyPopUp() {
//     return(
//     <Popup
//       trigger={<button>Open Custom Popup</button>}
//       position="right center"
//       contentStyle={{
//         width: '300px',
//         padding: '20px',
//         backgroundColor: '#f1f1f1',
//         textAlign: 'center',
//       }}
//     >
//       <div>Custom Popup Content</div>
//     </Popup>
//     );
// }


export default function MyPopUp() {
    const [name, setName] = useState('');
  
  
    return (
      <Popup trigger={<button>Enter Name</button>} position="right center">
        <div>
          <label>Your Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>You entered: {name}</p>
        </div>
      </Popup>
    );
  };
  

// export default function MyPopUp() {

// const [poped, setPoped] = useState(false);
// const [checked, setChecked] = useState(false);
// const [comments, setComments] = useState();

// const onFraudCommentsClick = () => {
    
// console.log("onFraudCommentsClick:");
// alert("onFraudCommentsClick:"+comments)
// setChecked(false)
//     setPoped(false)
// }

// const onFraudAbortClick = () => {
//     console.log("onFraudAbortClick");
//     setChecked(false)
//     setPoped(false)
//     alert("onFraudAbortClick")
//     }


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("submit value:"+e.target.value);
//         console.log("submit poped:"+poped);
//         console.log("submit checked:"+checked);
//         console.log("submit comments:"+comments);
//       };

//     return (
//         <>
     
//         <label>
//           <input
//             type="checkbox"
//             name="option1"
//             checked={poped}
//             onChange={() => setPoped(true)}
//           />
//           pop up option
//         </label>
// <br/>
//         <label>
//           <input
//             type="checkbox"
//             name="option2"
//             checked={checked}
//             onChange={() => setChecked(true)}
//           />
//           checked option
//         </label>

// {checked &&
//     <Popup
//         position='center'
//         open={ poped }
//         closeOnDocumentClick={ false }
//         closeOnEscape={ false }
//         onClose={ () => {
//     this.setState( { checked: false } );

//   } }
      
//     >
//         <div >
//             <h2>COMMENTS FOR LP AGENT REVIEW:</h2>
//             <br />
//             <div >
//                 <textarea
//                     rows='6'
//                     placeholder='Enter Comments'
//                     onChange={ ( e ) => {
//             setComments( e.target.value.length <= 5 ? e.target.value : e.target.value.substr( 0, 5 ))} }
//                     value={ comments}
//                     maxLength='5'
//                 />
//             </div>
//             <div>
//                 <p >
//                     <button  onClick={ () => onFraudCommentsClick() }>SAVE COMMENTS</button>
//                 </p>

//                 <div ><button  onClick={ () => onFraudAbortClick() } >ABORT REVIEW</button></div>

//             </div>
//         </div>

//     </Popup>
    
// }
// </>

//     )}