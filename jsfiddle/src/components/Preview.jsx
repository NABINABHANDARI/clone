// src/components/Preview.jsx
import React, { useEffect, useRef } from 'react';

const Preview = ({ html, css, js, onError }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const document = iframeRef.current.contentDocument;
    document.open();
    document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>
            window.onerror = function(message, source, lineno, colno, error) {
              window.parent.postMessage({ message, source, lineno, colno, error }, '*');
              return true;
            };
            ${js}
          </script>
        </body>
      </html>
    `);
    document.close();
  }, [html, css, js]);

  useEffect(() => {
    const handleError = (event) => {
      if (event.data && event.data.message) {
        onError(event.data.message);
      }
    };
    window.addEventListener('message', handleError);
    return () => {
      window.removeEventListener('message', handleError);
    };
  }, [onError]);

  return <iframe ref={iframeRef} title="preview" />;
}

export default Preview;
