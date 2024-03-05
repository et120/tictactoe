import logo from './logo.svg';
import './App.css';
import BoardComponent from './components/Board/BoardComponent';
import SquareComponent from './components/Square/SquareComponent';
import GameComponent from './components/Game/GameComponent';

function App() {
  return (
    <div className="App">
      <GameComponent />
    </div>
  );
}

export default App;
