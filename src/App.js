import "./App.css";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Feed from "./components/feed/Feed";
import Login from "./components/login/Login";
import { useStateValue } from "./store/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className='app__body'>
            <SideBar />
            <Feed />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
