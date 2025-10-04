function Hello(){
  let myName="Ankita";
  let number=456;
  let fulName=()=>{
    return "Ankita Singh";
  }
  return <p>
    MessageNo={number} Hello this is the future speaking.
    I am your mentor {fulName()}
  </p>
}

export default Hello;