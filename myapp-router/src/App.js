import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import Calculator from './component/Calculator';
import { Routes,Route,Outlet,Link }  from 'react-router-dom';
 
function App() {
  return (    
    <div className="App">
      {/* url과 컴포넌트 연결하기 */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/calculator" element={<Calculator/>}/>
        </Route>
      </Routes>
      <h1>리액트</h1>  
      <Counter/>
    </div>
  );
}

// Layout 컴포넌트 추가
function Layout() {
  return ( 
    <div>
      <nav>
        <ul>
          <li><Link to="/">HOME</Link></li>
          {/* to -> route의 path */}
          <li><Link to="/counter">counter</Link></li>
          <li><Link to="/calculator">계산기</Link></li>
        </ul>      
      </nav>
      <hr/> {/*outlet이 컴포넌트가 출력될 위치*/}
      <Outlet /> {/* 중첩된 라우트가 렌더링될 위치 */} 
    </div>
  );
}

function Home() {
  return (
    <div>home</div>
  )
}

export default App;
