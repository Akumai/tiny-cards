import logo from './assets/artboard_copy_142.png';
import './App.css';

function App() {
  return (
    <div class="text-center">
      <div class="app-header min-h-screen flex flex-col items-center justify-center text-white text-2xl">
      
        <img src={logo} class="h-40" alt="logo" />

              <div>New words</div>
              <div>Kanji</div>
              <div>Verbs and conjugations</div>
              <div>Topic: food</div>

      </div>
    </div>
  );
}

export default App;
