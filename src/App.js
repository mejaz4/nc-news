import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import { Routes,Route } from 'react-router-dom';
import Articles from './Articles';
import Topics from './Topics';

function App() {
  return (
    <div className="app">
    <Header />
    <Navbar />

    <main className="main">
        <Routes>
          <Route path="/" element={<Articles />}></Route>
          <Route path="/topics" element={<Topics />}></Route>
        </Routes>
      </main>



  </div>
  );
}

export default App;
