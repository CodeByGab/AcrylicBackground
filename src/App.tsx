import "./App.scss";
import TitleBar from "./TitleBar";
import ASideBar from "./ASideBar";
import MainContentSheet from "./MainContentSheet";

function App() {

  return (
    <>
      <TitleBar></TitleBar>
      <div className="container">
        <ASideBar></ASideBar>
        <MainContentSheet></MainContentSheet>
      </div>
    </>
  );
}

export default App;
