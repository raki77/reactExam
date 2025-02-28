import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './component/Layout';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import Hero_list from './component/hero/Hero_list';
import PhotoList from './component/album/PhotoList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/hero/list" element={<Hero_list/>}/>
          <Route path="/photos/list" element={<PhotoList/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
