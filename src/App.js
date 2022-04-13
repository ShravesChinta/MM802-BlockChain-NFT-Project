// import SignMessage from "./SignMessage";
// import VerifyMessage from "./VerifyMessage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import AssetsGallery from "./pages/AssetsGallery";

export default function App() {
  return (

    <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/AssetsGallery" element={<AssetsGallery />} />
        </Routes>
    </Router>

  );
}
