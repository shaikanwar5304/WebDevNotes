function Validate() {
  if (localStorage.getItem("login") === "true") {
    return true;
  }
  return false;
}
export default Validate;