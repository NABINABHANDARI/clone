import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import './Console.css'


const Console = ({ logs }) => {
  return (
    <div className="console">
      {logs.map((log, index) => (
        <div key={index} className="console-log">
          <FaExclamationCircle className="console-icon" />
          <span className="console-message">{log}</span>
        </div>
      ))}
    </div>
  );
};

export default Console;
