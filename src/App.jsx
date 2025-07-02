import "./App.css";
import HomePage from "./Components/Pages/HomePage";
import useDisableZoom from "./Hooks/useDisableZoom";

function App() {
  useDisableZoom();
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
