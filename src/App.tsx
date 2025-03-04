import './App.css'
import Counter from "./containers/Password/Counter.tsx";
import Toolbar from "./components/ToolBar/Toolbar.tsx";
import {Routes, Route} from "react-router-dom";
import Calculator from "./containers/Calculator/Calculator.tsx";

const App = () => {

  return (
    <>
        <header>
            <Toolbar/>
        </header>
        <main>
            <Routes>
                <Route path="/" element={<Counter/>}/>
                <Route path="/task2" element={<Calculator/>}/>
            </Routes>
        </main>
    </>
  )
};

export default App
