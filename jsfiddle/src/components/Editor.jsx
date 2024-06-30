import React from 'react';
import MonacoEditor from '@monaco-editor/react';

const Editor = ({ language, value, onChange, label }) => {
  const handleEditorChange = (value, event) => {
    onChange(value);
  };

  return (
    <div className="editor-container">
      <div className="editor-label">{label}</div>
      <MonacoEditor
        height="300px"
        language={language}
        theme="vs-dark"
        value={value}
        onChange={handleEditorChange}
        options={{
          lineNumbers: 'on',
          roundedSelection: true,
          scrollBeyondLastLine: false,
          readOnly: false,
          contextmenu: true,
          minimap: { enabled: false },
        }}
      />
    </div>
  );
};

export default Editor;
