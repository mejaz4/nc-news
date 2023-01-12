import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import { Routes,Route } from 'react-router-dom';
import Articles from './Articles';
import Topics from './Topics';
import SingleArticle from './SingleArticle';
import Users from './Users'

function App() {
  return (
    <div className="app">
    <Header />
    <Navbar />

    <div className="main">
        <Routes>
          <Route path="/" element={<Articles />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/topics" element={<Topics />}></Route>
          <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
        </Routes>
      </div>



  </div>
  );
}

export default App;
