import React from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ListIcon from "@mui/icons-material/List";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <div className="navbar">
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button>
          <SearchIcon className="search-icon" />
        </button>
      </div>

      <div className="items">
        <div className="item">
          <button>
            <LanguageIcon className="item-icon" />
          </button>
          <span>English</span>
        </div>
        <div className="item">
          <button onClick={() => setDarkMode(!darkMode)}>
            <DarkModeIcon className="item-icon" />
          </button>
        </div>
        <div className="item">
          <button>
            <FullscreenExitIcon className="item-icon" />
          </button>
        </div>
        <div className="item">
          <button>
            <NotificationsIcon className="item-icon" />
          </button>
          <div className="counter">1</div>
        </div>
        <div className="item">
          <button>
            <ChatBubbleIcon className="item-icon" />
          </button>
          <div className="counter">3</div>
        </div>
        <div className="item">
          <button>
            <ListIcon className="item-icon" />
          </button>
        </div>
        <div className="item">
          <img
            src="https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="profile-img"
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
