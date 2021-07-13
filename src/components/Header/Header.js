import React from "react";

function Header (props) {

    const {
        handleAboutUsScroll,
        handleDirectionsScroll,
        handleContactsScroll,
        handleFeedbackFormScroll,
    } = props;

    return (

        <div className="header">
            <div className="header__container">
                <div className="header__links-container">
                    <p className="header__link header__link_main">Главная</p>
                    <p className="header__link" onClick={handleAboutUsScroll}>О нас</p>
                    <p className="header__link" onClick={handleDirectionsScroll}>Направления</p>
                    <p className="header__link" onClick={handleContactsScroll}>Контакты</p>
                </div>
                <button className="header__button" onClick={handleFeedbackFormScroll}>Оставить заявку</button>
            </div>
        </div>

    );

}

export default Header;