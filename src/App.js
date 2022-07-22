import "./App.css";
import MainRoutes from "./Components/AllRoutes/MainRoutes";
import CompLogo from "./Components/CompLogo/CompLogo";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import TeamPage from "./Components/Timer/TeamPage";
import Tour from "./Pages/Tour/Tour";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <MainRoutes />
      <Footer /> */}
      <TeamPage/>
    </div>
  );
}

export default App;
