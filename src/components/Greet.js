import React from "react";

// function Greet(){
//     return <h1>Hello Mrunmayee</h1>
// }
const Greet = (props) =>{
    console.log(props)
     return(
        <div>
            <h1>
                Hello {props.name} the {props.relation} of Mrunmayee
            </h1>
            {props.children}
        </div>


     )
}

//export const Greet = () => <h1>Hello Mrunmayee</h1> // named export


export default Greet // default export
