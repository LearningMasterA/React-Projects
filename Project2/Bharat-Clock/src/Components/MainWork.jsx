function MainWork(){
  let currDate=new Date();
  return <p>
    This is the current time: {(currDate).toLocaleDateString()}-{(currDate).toLocaleTimeString()}
  </p>
}

export default MainWork;