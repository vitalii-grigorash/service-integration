import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Directions from "../Directions/Directions";
import Request from "../Request/Request";
import Advantages from "../Advantages/Advantages";
import textTop from "../../images/text-top.svg";

function Main (props) {

    const {
        onSendForm,
        submitButtonText,
        handleAboutUsScroll,
        isAboutUs,
        handleDirectionsScroll,
        isDirections,
        handleContactsScroll,
        isContacts,
        handleFeedbackFormScroll,
        isFeedbackForm,
        handleMainScroll,
        isMain
    } = props;

    React.useEffect(() => {
        if (isMain) {
          const elem = document.getElementById("#main".slice(1))
          if (elem) {
            elem.scrollIntoView({ behavior: "smooth" })
          }
          handleMainScroll();
        }
      }, [isMain, handleMainScroll])

  return (

    <div id="main" className="main">
        <div className="main__top-container">
            <div className="main__info-container">
                <h1 className="main__heading">Сервис-Интеграция</h1>
                <div className="main__description-top-container">
                    <p className="main__description-top"> 
                        <img className="main__description-img" src={textTop} alt="взаимодействие" />
                        Мы обеспечиваем взаимодействие
                    </p>
                </div>
                <p className="main__description">операторов связи с управляющими компаниями</p>
                <button className="main__button" onClick={handleFeedbackFormScroll}>Оставить заявку</button>
            </div>
        </div>
        <AboutUs
            handleAboutUsScroll={handleAboutUsScroll}
            isAboutUs={isAboutUs}
            handleFeedbackFormScroll={handleFeedbackFormScroll}
        />
        <Directions
            handleDirectionsScroll={handleDirectionsScroll}
            isDirections={isDirections}
        />
        <Request 
            onSendForm={onSendForm}
            submitButtonText={submitButtonText}
            handleFeedbackFormScroll={handleFeedbackFormScroll}
            isFeedbackForm={isFeedbackForm}
        />
        <Advantages
            handleContactsScroll={handleContactsScroll}
            isContacts={isContacts}
            handleMainScroll={handleMainScroll}
            handleAboutUsScroll={handleAboutUsScroll}
            handleDirectionsScroll={handleDirectionsScroll}
        />
    </div>

  );
  
}

export default Main;