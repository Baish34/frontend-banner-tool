import React, { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('');
  const [bannerText, setBannerText] = useState('I love Playing Basketball!');
  const [imageUrl, setImageUrl] = useState('https://images.unsplash.com/photo-1546519638-68e109498ffc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFza2V0YmFsbHxlbnwwfHwwfHx8MA%3D%3D');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBgColor = e.target.bgColor.value;
    const newText = e.target.textInput.value;
    const newImageUrl = e.target.imageUrl.value;

    if (newBgColor) setBgColor(newBgColor);
    if (newText) setBannerText(newText);
    if (newImageUrl) setImageUrl(newImageUrl);
  };

  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundColor: bgColor || 'initial',
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <h1>{bannerText}</h1>
      </div>

      <form onSubmit={handleSubmit}>

        <label htmlFor="textInput">Change Banner Text:</label>
        <input type="text" id="textInput" name="textInput" placeholder="Enter new banner text" />

        <label htmlFor="imageUrl">Change Banner Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter image URL" />

        <button type="submit">Apply Changes</button>
      </form>
    </div>
  );
}

export default App;

