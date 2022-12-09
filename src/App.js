import "./Styles/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRoutes from "./AppRoutes";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
