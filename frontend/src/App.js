import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/workouts" element={<Workouts/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}


export default App;
