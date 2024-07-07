import React, { useState } from 'react';
import './App.css';
import carrots from './health-benefits-of-carrots.jpg';
import cucumbers from './GettyImages-143225018-5755c6eb3df78c9b469092de-removebg-preview.png';
import veggies from './vegetables.webp';
import jalapeno from './istockphoto-1017914984-612x612.jpg';
export default App;

function App() {
  const [heading, setHeading] = useState('');
  const [headingColor, setHeadingColor] = useState('');
  const [headerImage, setHeaderImage] = useState('');
  const [headerButtonText, setHeaderButtonText] = useState('');
  const [headerButtonTextColor, setHeaderButtonTextColor] = useState('');
  const [headerButtonBackground, setHeaderButtonBackground] = useState('');
  const [title, setTitle] = useState('');
  const [subheading, setSubheading] = useState('');
  const [description, setDescription] = useState('');
  const [firstMainImage, setFirstMainImage] = useState('');
  const [secondMainImage, setSecondMainImage] = useState('');
  const [thirdMainImage, setThirdMainImage] = useState('');
  const [fourthMainImage, setFourthMainImage] = useState('');
  const [fifthMainImage, setFifthMainImage] = useState('');
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  
  function handleHeadingChange(event) {
    setHeading(event.target.value);
  }
  function handleHeaderButtonTextChange(event) {
    setHeaderButtonText(event.target.value);
  }
  function handleHeadingColorChange(event) {
    setHeadingColor(event.target.value);
  }
  function handleHeaderButtonBackgroundColorChange(event) { 
    setHeaderButtonBackground(event.target.value);
  }
  function handleHeaderButtonTextColorChange(event) { 
    setHeaderButtonTextColor(event.target.value);
  }
  function handleSubHeadingChange(event){
    setSubheading(event.target.value);
  }
  function handleHeaderImageChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setHeaderImage(reader.result);
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }
  function handleFirstMainImageChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setFirstMainImage(reader.result);
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function handleSecondMainImageChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setSecondMainImage(reader.result);
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
    
  }
  function handleThirdMainImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setThirdMainImage(reader.result);
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  function handleFourthMainImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setFourthMainImage(reader.result);
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function handleFifthMainImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setFifthMainImage(reader.result);
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  return (
    <div className="App container">
      <FirstLayout heading={heading} headingColor={headingColor} headerImage={headerImage}
      headerButtonText={headerButtonText}
      headerButtonTextColor={headerButtonTextColor}
      headerButtonBackground={headerButtonBackground}
      title={title}
      subheading={subheading}
      description={description}
      firstMainImage={firstMainImage} 
      secondMainImage={secondMainImage}
      thirdMainImage={thirdMainImage}
      fourthMainImage={fourthMainImage}
      fifthMainImage={fifthMainImage}
      />
      <EditSection
        handleHeadingChange = {handleHeadingChange}
        handleHeadingColorChange = {handleHeadingColorChange}
        handleHeaderImageChange = {handleHeaderImageChange}
        handleHeaderButtonTextChange = {handleHeaderButtonTextChange}
        handleHeaderButtonTextColorChange = {handleHeaderButtonTextColorChange}
        handleHeaderButtonBackgroundColorChange = {handleHeaderButtonBackgroundColorChange}
        handleTitleChange = {handleTitleChange}
        handleSubHeadingChange = {handleSubHeadingChange}
        handleDescriptionChange = {handleDescriptionChange}
        handleFirstMainImageChange = {handleFirstMainImageChange}
        handleSecondMainImageChange={handleSecondMainImageChange}
        handleThirdMainImage={handleThirdMainImage}
        handleFourthMainImage={handleFourthMainImage}
        handleFifthMainImage={handleFifthMainImage}
      />
    </div>
  );
}

function FirstLayout({ heading, headingColor, headerImage, headerButtonText, headerButtonTextColor, headerButtonBackground, title, subheading, description, firstMainImage, secondMainImage, thirdMainImage, fourthMainImage, fifthMainImage}) {
  const headingStyle = {
    color: headingColor || 'black', // Default to black if headingColor is not set
    // Add other styles like fontFamily, backgroundColor, etc. based on state
  };
  const headerButtonStyle={
    backgroundColor: headerButtonBackground || 'black', // Default to blue if headerButtonBackground is not set
    color: headerButtonTextColor || 'white', // Default to white if headerButtonTextColor is not set
    // Add other styles like fontSize, fontFamily, etc. based on state
  }

  return (
    <div id="first-layout">
      <header>
        <nav>
          <ul>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">{title || 'A site'}</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
        <img src={headerImage || carrots} alt="food" /> {/* Default to carrots image if headerImage is not set */}
        <h1 style={headingStyle}>{heading || 'Carrot Competence'}</h1>
        <button style={headerButtonStyle}>{headerButtonText || 'Shop Now'}</button>
      </header>
      <main>
        <div className="container-1">
          <h2>{subheading || 'Only the highest quality ingredients'}</h2>
          <p>{description || 'Our carrots are grown with the highest quality ingredients to ensure you\'re getting the best possible carrot experience.'}</p>
          <div className="img-container">
            <img src={firstMainImage || cucumbers} className="img-responsive" alt="cucumbers" />
          </div>
          <button>{headerButtonText || 'Shop Now'}</button>
        </div>
        <div className="container-2">
          <img src={secondMainImage || veggies} className="img-responsive" alt="veggies" />
        </div>
        <div className="container-3">
          <div>
            <h2>What are you waiting for?</h2>
            <button>Subscribe</button>
          </div>
        </div>
        <div className="container-4">
          <img src={thirdMainImage || jalapeno} className="img-responsive" alt="jalapeno" />
          <img src={fourthMainImage || jalapeno} className="img-responsive" alt="jalapeno" />
          <img src={fifthMainImage || jalapeno} className="img-responsive" alt="jalapeno" />
        </div>
      </main>
      <footer>
        <h4>{title || 'A site'}</h4>
        <p>123 Demo Street</p>
        <p>New York, NY 1000</p>
        <p>© 2022 Carrot Competence. All rights reserved.</p>
      </footer>
    </div>
  );
}

function EditSection({ handleHeadingChange, handleHeadingColorChange, handleHeaderImageChange, handleHeaderButtonTextChange, handleHeaderButtonBackgroundColorChange, handleHeaderButtonTextColorChange, handleTitleChange, handleSubHeadingChange, handleDescriptionChange, handleFirstMainImageChange, handleSecondMainImageChange, handleThirdMainImage, handleFourthMainImage, handleFifthMainImage}) {
  return (
    <div id='edit-section'>
      <h2>Edit Section</h2>
      <div>
        <label>Heading Text: </label>
        <input type="text" onChange={handleHeadingChange} />
      </div>
      <div>
        <label>Heading Color: </label>
        <input type="color" onChange={handleHeadingColorChange} />
      </div>
      <div>
        <label>Header Image: </label>
        <input type="file" onChange={handleHeaderImageChange} ></input>
      </div>
      <div>
        <label>Header Button Text: </label>
        <input type="text" onChange={handleHeaderButtonTextChange} />
      </div>
      <div>
        <label>Header button background color: </label>
        <input type="color" onChange={handleHeaderButtonBackgroundColorChange}></input>
      </div>
      <div>
        <label>Header Button Text Color: </label>
        <input type="color" onChange={handleHeaderButtonTextColorChange}></input>
      </div>
      <div>
        <label>Title: </label>
        <input type="text" onChange={handleTitleChange}></input>
      </div>
      <div>
        <label>Subheading: </label>
        <input type="text" onChange={handleSubHeadingChange}></input>
      </div>
      <div>
        <label>Description: </label>
        <textarea onChange={handleDescriptionChange}></textarea>
      </div>
      <div>
        <label>First main image: </label>
        <input type="file" onChange={handleFirstMainImageChange}></input>
      </div>
      <div>
        <label>Second main image: </label>
        <input type="file" onChange={handleSecondMainImageChange} />
      </div>
      <div>
        <label>Third main image: </label>
        <input type="file" onChange={handleThirdMainImage} />
      </div>
      <div>
        <label>Fourth main image: </label>
        <input type="file" onChange={handleFourthMainImage} />
      </div>
      <div>
        <label>Fifth main image: </label>
        <input type="file" onChange={handleFifthMainImage} />
      </div>
    </div>
  );
}
