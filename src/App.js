import "./Styles/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
