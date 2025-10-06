const WelcomeMessage = ({todoItems}) => {
  return todoItems.length===0 &&
      <p className="fw-bolder mt-5 text-center fs-1">Enjoy your day</p>

}

export default WelcomeMessage;