import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import * as FeedbackForm from '../../utils/FeedbackForm';

function App () {

  const [submitButtonText, setSubmitButtonText] = useState('Оставить заявку');
  const [isAboutUs, setAboutUs] = useState(false);
  const [isDirections, setDirections] = useState(false);
  const [isContacts, setContacts] = useState(false);
  const [isFeedbackForm, setFeedbackForm] = useState(false);
  const [isMain, setMain] = useState(false);

  function handleAboutUsScroll() {
    if (!isAboutUs) {
      setAboutUs(true);
    } else {
      setAboutUs(false);
    }
  }

  function handleDirectionsScroll() {
    if (!isDirections) {
      setDirections(true);
    } else {
      setDirections(false);
    }
  }

  function handleContactsScroll() {
    if (!isContacts) {
      setContacts(true);
    } else {
      setContacts(false);
    }
  }

  function handleFeedbackFormScroll() {
    if (!isFeedbackForm) {
      setFeedbackForm(true);
    } else {
      setFeedbackForm(false);
    }
  }

  function handleMainScroll() {
    if (!isMain) {
      setMain(true);
    } else {
      setMain(false);
    }
  }

  function feedbackFormSend (name, number, comment) {
    setSubmitButtonText('Отправка...')
    FeedbackForm.sendForm(name, number, comment)
    .then(() => {})
    .catch((err) => {
      console.log(err.message);
    })
    .finally(() => {
      setSubmitButtonText('Оставить заявку');
    });
  }

  return (
    <div className="app">
      <Header
        handleAboutUsScroll={handleAboutUsScroll}
        handleDirectionsScroll={handleDirectionsScroll}
        handleContactsScroll={handleContactsScroll}
        handleFeedbackFormScroll={handleFeedbackFormScroll}
      />
      <Main 
        onSendForm={feedbackFormSend}
        submitButtonText={submitButtonText}
        handleAboutUsScroll={handleAboutUsScroll}
        isAboutUs={isAboutUs}
        handleDirectionsScroll={handleDirectionsScroll}
        isDirections={isDirections}
        handleContactsScroll={handleContactsScroll}
        isContacts={isContacts}
        handleFeedbackFormScroll={handleFeedbackFormScroll}
        isFeedbackForm={isFeedbackForm}
        handleMainScroll={handleMainScroll}
        isMain={isMain}
      />
    </div>
  );
}

export default App;
