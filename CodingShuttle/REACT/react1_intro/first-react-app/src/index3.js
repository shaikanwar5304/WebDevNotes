import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
function Card({name, ...otherElem}){//we can also write (props) or (anyName) jst destructured it for example
    return <div className="Card">
        <ProfilePic srce = {otherElem.src} name = {name} />
        <h1>{name}</h1>
        <p>{otherElem.email}</p>
    </div>
}
function ProfilePic(props){
    return <img src={props.srce}alt={props.name}/>
}
// root.render(<Card/>)
//if you want to render multiple cards

//class component
class Welcome extends React.Component{
    render(){
        return <p>Hello {this.props.name}</p>
    }
}

//this can be equivalent to 

// function Welcome (props){
//     return <p>Hello {props.name}</p>
// }

const myName = "yaswanth"
let email = "sivasai@gmail.com"
let src ="https://via.placeholder.com/200"
root.render(
  <div className="container">
    <Card name={myName} email={email} src={src} />
    <Card name={"myName"} email={"email"} src={src} />
    <Card name={"myName"} email={"email"} src={src} />
    <Welcome name="React" />
  </div>
);