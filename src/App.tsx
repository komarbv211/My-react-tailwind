import './App.css'
import Card from "./components/common/card";
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Team from './pages/Team';
import Projects from './pages/Projects';
function App() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Card/>} />
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    )
}

export default App