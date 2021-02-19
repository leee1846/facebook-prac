import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";

function App() {
  return (
    <div className='App'>
      <Header />

      <div className='app__body'>
        <SideBar />
        {/* sidebar */}
        {/* feed */}
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
