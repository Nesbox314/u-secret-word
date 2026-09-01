import "./StartScreen.css"

const StartScreen = ({ startGame }) => {
  return (
    <div className="startScreenDiv">
        <h1>Secret Word</h1>
        <p>Clique no botão a baixo para começar a jogar</p>
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen