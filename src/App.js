import "./App.css";
import Navbar from "./components/Navbar";
import MyButton from "./components/MyButton";
import Home from "./components/Home";

function App() {
  const NavText = "Hello";
  const clicked = () => {
    alert("Sudah di klik");
  };

  return (
    <div>
      <Navbar test={NavText} />
      <Home />
      <MyButton clicked={clicked} />
    </div>
  );
}

export default App;
