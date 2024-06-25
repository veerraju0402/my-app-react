import { Routes, Route } from "react-router-dom";

import "../App.css";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Detail } from "./Detail";
import { Followers } from "./Followers";
import { Following } from "./Following";

function OutletApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="/profile" element={<Detail />} />
          <Route path="/profile/followers" element={<Followers />} />
          <Route path="/profile/following" element={<Following />} />
        </Route>
      </Routes>
    </div>
  );
}

export default OutletApp;

// //call this 
// <React.StrictMode>
//     <BrowserRouter>
//       <OutletApp />
//     </BrowserRouter>
//   </React.StrictMode>