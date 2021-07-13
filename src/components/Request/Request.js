import React from "react";
import requestBorder from "../../images/request-border.svg";
import Form from "../Form/Form";

function Request (props) {

  const {
    onSendForm,
    submitButtonText,
    handleFeedbackFormScroll,
    isFeedbackForm
} = props;

React.useEffect(() => {
  if (isFeedbackForm) {
    const elem = document.getElementById("#feedback".slice(1))
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" })
    }
    handleFeedbackFormScroll();
  }
}, [isFeedbackForm, handleFeedbackFormScroll])

  return (

    <div id="feedback" className="request">
       <div className="request__feedback-container">
           <h2 className="request__heading">
               У вас остались вопросы?
               <img className="request__border" src={requestBorder} alt="Рамка" />
            </h2>
            <p className="request__description">Оставьте заявку, и наш специалист свяжется с вами для консультации по возникшему вопросу</p>
            <Form
              onSendForm={onSendForm}
              submitButtonText={submitButtonText}
            />
       </div>
    </div>

  );
  
}

export default Request;