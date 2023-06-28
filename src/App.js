import "./App.css";
import Navbar from "./components/Navbar";
import MyButton from "./components/MyButton";

function App() {
  const NavText = "Hello";
  const clicked = () => {
    alert("Sudah di klik");
  };

  return (
    <div>
      <Navbar test={NavText} />
      <MyButton clicked={clicked} />
    </div>
  );
}

export default App;
