import React from 'react';
import { FaJsfiddle } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";
import { CiSaveUp1 } from "react-icons/ci";
import { LuMessageSquare } from "react-icons/lu";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsFillLightningChargeFill } from "react-icons/bs";

const Navbar = ({ onRun, onSave }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FaJsfiddle style={{ height: '33px', width: '46px', color: '#3a6cff', transition: 'all 0.15s', position: 'relative' }} className="nav-icon" />
        <CiPlay1 /><button onClick={onRun} className="nav-item">Run</button>
        <CiSaveUp1 /><button onClick={onSave} className="nav-item">Save</button>
        <LuMessageSquare /><button className="nav-item">Collaborate</button>
      </div>
      <div className="navbar-right">
        <BsFillLightningChargeFill className="nav-icon pro-icon" />
        <div className="pro-item">Go PRO</div>
        <GiSettingsKnobs /><button className="nav-item">Settings</button>
        <button className="nav-item">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
