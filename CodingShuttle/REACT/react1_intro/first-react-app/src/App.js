import Card from "./components/Card"
// import ProfilePic from "./components/ProfilePic";

const myName = "yaswanth";
let email = "sivasai@gmail.com";
let src = "https://via.placeholder.com/200";
function App() {
  return (
    <div className="container">
    <Card name={myName} email={"yaswanth@gmail.com"} src={src} />
    <Card name={"sivasai"} email={email} src={src} />
    <Card name={"Anwar"} email={"Anwar@gmail.com"} src={src} />
    {/* <ProfilePic srce={src} name={myName} /> */}
  </div>
  );
}

export default App;