// App.js
import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling
import InputField from './InputField';
import ShortenButton from './ShortenButton';
import DisplayArea from './DisplayArea';

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const handleShorten = async () => {
    // Simulate URL shortening by appending "shortened/" to the original URL
    setShortenedUrl(`shortened/${originalUrl}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setCopySuccess(true);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">URL Shortener</h1>
        <div className="content">
          <InputField value={originalUrl} onChange={(e) => setOriginalUrl(e.target.value)} />
          <ShortenButton onClick={handleShorten} />
          <DisplayArea shortenedUrl={shortenedUrl} copyToClipboard={copyToClipboard} copySuccess={copySuccess} />
        </div>
      </div>
    </div>
  );
}

export default App;
