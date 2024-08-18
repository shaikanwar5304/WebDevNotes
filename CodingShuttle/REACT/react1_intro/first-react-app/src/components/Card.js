import ProfilePic from "./ProfilePic";
function Card({ name, ...otherElem }) {
  //we can also write (props) or (anyName) jst destructured it for example
  return (
    <div className="Card">
      <ProfilePic srce={otherElem.src} name={name} />
      <h1>{name}</h1>
      <p>{otherElem.email}</p>
    </div>
  );
}
export default Card;