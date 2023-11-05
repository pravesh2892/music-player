import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar.js";
import Navbar from "./Navbar.js";
import BrowsePage from "./BrowsePage.js";
import MusicPlayerPage from "./MusicPlayerPage.js";
import SongList from "./SongList.js";
import SignIn from "./SignIn/SignIn.js";
import ListenNow from "./ListenNow.js";
import AlbumGridPage from "./RandomAlbumGrid.js";
import FavoriteSongsList from "./FavoriteSongsList.js";
import RandomAlbumGrid from "./RandomAlbumGrid.js"; // Import the RandomAlbumGrid component
import ChangePassword from "./ChangePassword/ChangePassword.js";
import Signup from "./Signup/Signup.js";
import LogOut from "./LogOut/LogOut.js";
import Radio from "./Radio/Radio.js";

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="app-container">
      <Router>
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/music-player" element={<MusicPlayerPage />} />
            <Route path="/album" element={<SongList token={token} />} />
            <Route path="/signin" element={<SignIn onSignIn={setToken} />} />
            <Route path="/ListenNow" element={<ListenNow />} />
            {/* Add a new route for "Playlist on the Pulse" */}
            <Route path="/random-albums" element={<RandomAlbumGrid />} />
            {/* Add a new route for AlbumFetcher with a section number */}
            <Route path="/favorites" element={<FavoriteSongsList />} />
            <Route path="/Radio" element={<Radio />}/>
            <Route path="/change-password" element={<ChangePassword />} />
              <Route path="/signUp" element={<Signup />} />
               <Route path="/LogOut" element={<LogOut />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}