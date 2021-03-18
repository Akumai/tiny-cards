import logo from './assets/artboard_copy_142.png';
import './App.css';

import Deck from "./components/Deck";

const DECKS = ["New words", "Kanji", "Verbs and conjugations", "Topic: food"]

function App() {
    return (
        <div class="">
            <div class="min-h-screen flex flex-col items-center justify-center">

                <img src={logo} class="h-40" alt="logo"/>
                <div class="text-2xl">Decks</div>

                <div class="text-xl w-1/4">
                    <For each={DECKS} fallback={<div>Loading...</div>}>
                        {d => (
                            <Deck description={d} />
                        )}
                    </For>

                </div>
            </div>
        </div>
    );
}

export default App;
