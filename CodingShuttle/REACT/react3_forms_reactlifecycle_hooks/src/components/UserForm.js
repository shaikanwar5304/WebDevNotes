import {useRef} from "react"
function UserForm(){
    const nameInputRef = useRef(null)//will not re render the component (used instead of  doc.getElemby id  )
    function handleSubmit(e){
        e.preventDefault();
        // console.log("submit clicked");
        let text = nameInputRef.current.value
        console.log(text) ;
    }
    return (
        <form onSubmit={handleSubmit}>{/**triggers when submit forms or press enter*/}
            <label htmlFor="name">Name</label>
            <input type="text" ref={nameInputRef} />
            <input type="submit" id="name" onClick={handleSubmit} />
            {/* <p>the text entered is : {nameInputRef.current.value}</p> => this won't change as it willnot render again  */}
        </form>
    )
} 
export default UserForm