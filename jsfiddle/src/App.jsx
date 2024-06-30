import React, { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Navbar from "./components/Navbar";
import Console from "./components/Console";
import axios from "axios";
import "./styles.css";

const App = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [logs, setLogs] = useState([]);

  const handleRun = () => {
    // Clear previous logs
    setLogs([]);
  };

  const handleSave = async () => {
    try {
      const response = await axios.post("/api/snippets", { html, css, js });
      alert("Snippet saved: " + response.data.id);
    } catch (error) {
      console.error("Error saving snippet", error);
    }
  };

  const handleError = (message) => {
    setLogs((prevLogs) => [...prevLogs, message]);
  };

  return (
    <div className="container">
      <header className="header">
        <Navbar onRun={handleRun} onSave={handleSave} />
      </header>
      <div className="main-content">
        <div className="sidebar">
          <div className="sidebar-item sidebar-title">Fiddle meta</div>
          <input
            type="text"
            className="fiddle-title untitled"
            placeholder="Untitled fiddle"
          />
          <input
            type="text"
            className="fiddle-title no-description"
            placeholder="No description"
          />

          <div className="private-fiddle">
            <input type="checkbox" id="private-fiddle-checkbox" />
            <label htmlFor="private-fiddle-checkbox">
              Private fiddle <span className="pro">PRO</span>
            </label>
          </div>

          <div className="groups-pro">
            Groups <span className="pro">PRO</span>
          </div>

          <div className="sidebar-item sidebar-title">Resources <span className="url">URL</span> <span className="cdnjs">cdnjs</span></div>
          

          <div className="sidebar-item sidebar-title">Async request</div>

          <div className="sidebar-item sidebar-title">
            Other (links, license)
          </div>
        </div>
        <div className="editor-pane">
          <div className="upper-pane">
            <Editor
              language="html"
              value={html}
              onChange={setHtml}
              label="HTML"
            />
            <Editor language="css" value={css} onChange={setCss} label="CSS" />
          </div>
          <div className="lower-pane">
            <Editor
              language="javascript"
              value={js}
              onChange={setJs}
              label="JavaScript"
            />
            <div className="preview-container">
              <div className="editor-label">Result</div>
              <Preview html={html} css={css} js={js} onError={handleError} />
            </div>
          </div>
        </div>
      </div>
      <div className="console-pane">
        <Console logs={logs} />
      </div>
    </div>
  );
};

export default App;
