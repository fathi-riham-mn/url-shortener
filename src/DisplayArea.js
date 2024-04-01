// DisplayArea.js
import React from 'react';

const DisplayArea = ({ shortenedUrl, copyToClipboard, copySuccess }) => {
  return (
    <div className="display-area">
      {shortenedUrl && (
        <>
          <p className="shortened-url">Shortened URL: {shortenedUrl}</p>
          <button onClick={copyToClipboard} className="copy-button">Copy</button>
          {copySuccess && <span className="copy-success">Copied!</span>}
        </>
      )}
    </div>
  );
};

export default DisplayArea;
