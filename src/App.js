import "./App.css";
import Encuesta from "./Componentes/Encuesta/Encuesta";

function App() {
  console.log("App -> ========= tipo render ============");
  return (
    <div className="App">
      <header className="App-header">
        <Encuesta />
      </header>
    </div>
  );
}

export default App;
