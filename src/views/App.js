import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent';
import ListToDo from './todo/ListToDo';
import Nav from './Nav/Nav';
import Home from './example/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <MyComponent /> */}
          {/* <ListToDo /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<ListToDo />} />
            <Route path="/cources" element={<MyComponent />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
