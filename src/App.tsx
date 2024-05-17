import "./App.scss";
import TitleBar from "./TitleBar";
import ASideBar from "./ASideBar";

function App() {

  return (
    <>
      <TitleBar></TitleBar>
      <div className="container">
        <ASideBar></ASideBar>
      </div>
    </>
  );
}

export default App;
