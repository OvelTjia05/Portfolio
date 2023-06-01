import "./App.css";
import { Banner } from "./components/molecules/Banner";
import { NavBar } from "./components/molecules/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Skills } from "./components/molecules/Skills";
import { Profil } from "./components/molecules/Profil";
import { Footer } from "./components/molecules/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Profil />
      <Footer />
    </div>
  );
}

export default App;
