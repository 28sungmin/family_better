import "./assets/scss/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPg from "./pages/MainPg";
import IntroPg from "./pages/IntroPg";
import StartPg from "./pages/StartPg";
import MiddlePg from "./pages/MiddlePg";
import FamilyPg from "./pages/FamilyPg";

import HeaderCp from "./components/common/HeaderCp";
import FooterCp from "./components/common/FooterCp";
import NavCp from "./components/common/NavCp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <HeaderCp /> */}
        <NavCp />
        <main>
          <Routes>
            <Route path="/" element={<MainPg />} />
            <Route path="/intro" element={<IntroPg />} />
            <Route path="/start" element={<StartPg />} />
            <Route path="/middle" element={<MiddlePg />} />
            <Route path="/family" element={<FamilyPg />} />
          </Routes>
        </main>
        <FooterCp />
      </BrowserRouter>
    </div>
  );
}

export default App;
