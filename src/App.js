import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import CardPreview from './components/CardPreview';
import CardForm from './components/CardForm';
import './App.css';

function App() {

  // updating user's data that coming from the form fields
  const [ user, setUser ] = useState({});

  // keep image url that is uploaded via 'Upload Avatar' button click in the form
  const [ image, setImage ] = useState({ preview_imgUrl: '' });

  const handleImage = (e) => {
    // 'preview_imgUrl' is used for screen display. 'URL.createObjectURL(obj)' creates a DOMString containing a URL representing the object given in the parameter
    setImage({
     preview_imgUrl: URL.createObjectURL(e.target.files[0]),
    })
   }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]:e.target.value });
  }

  // No functionality added for the submit button.
  const handleSubmit = (e) => {
    alert('congratulation !!! Form submitted successfully.')
  }

  return (
    <section className = 'App'>
      <Helmet>
        <title>hCard  Builder</title>
        <meta name = "description" content = "hCard Builder is a simple app, publishing people, companies and organizations on the web" />
      </Helmet>
      <CardForm handleChange = { handleChange } handleSubmit = { handleSubmit } handleImage = { handleImage } />
      <CardPreview user={user} avatar={image} />
    </section>
  );
}

export default App;
