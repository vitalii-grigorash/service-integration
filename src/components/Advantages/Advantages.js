import React from "react";
import textBorderBottom from '../../images/text-border-bottom.svg';
import oneIcon from "../../images/one-icon.svg";
import twoIcon from '../../images/two-icon.svg';
import threeIcon from "../../images/three-icon.svg";
import fourIcon from "../../images/four-icon.svg";
import fiveIcon from "../../images/five-icon.svg";
import sixIcon from "../../images/six-icon.svg";
import Footer from "../Footer/Footer";

function Advantages (props) {

    const {
        handleContactsScroll,
        isContacts,
        handleMainScroll,
        handleAboutUsScroll,
        handleDirectionsScroll
    } = props;

    return (

        <div className="advantages">
            <h2 className="advantages__heading">
                <img className="advantages__heading-border" src={textBorderBottom} alt="Рамка" />
                Преимущества работы с нами
            </h2>
            <p className="advantages__description">Мы стараемся, чтобы работы с нашей компании приносила максимум пользы для наших партнеров</p>

            <div className="advantages__info-container">

                <div className="advantages__info-top-container">
                    <div className="advantages__info-item-container">
                        <img className="advantages__info-item-icon" src={oneIcon} alt="Иконка" />
                        <p className="advantages__info-item-text">Индивидуальный подход к каждому заказчику</p>
                    </div>
                    <div className="advantages__info-item-container">
                        <img className="advantages__info-item-icon" src={twoIcon} alt="Иконка" />
                        <p className="advantages__info-item-text">Высокая скорость работы</p>
                    </div>
                    <div className="advantages__info-item-container">
                        <img className="advantages__info-item-icon" src={threeIcon} alt="Иконка" />
                        <p className="advantages__info-item-text">Качественное исполнение задач</p>
                    </div>
                </div>

                <div className="advantages__info-bottom-container">
                    <div className="advantages__info-item-container">
                        <img className="advantages__info-item-icon" src={fourIcon} alt="Иконка" />
                        <p className="advantages__info-item-text">Высококвалифированные сотрудники</p>
                    </div>
                    <div className="advantages__info-item-container">
                        <img className="advantages__info-item-icon" src={fiveIcon} alt="Иконка" />
                        <p className="advantages__info-item-text">Быстрая обратная связь</p>
                    </div>
                    <div className="advantages__info-item-container">
                        <img className="advantages__info-item-icon" src={sixIcon} alt="Иконка" />
                        <p className="advantages__info-item-text">Положительные отзывы от клиентов</p>
                    </div>
                </div>

            </div>

            <Footer
                handleContactsScroll={handleContactsScroll}
                isContacts={isContacts}
                handleMainScroll={handleMainScroll}
                handleAboutUsScroll={handleAboutUsScroll}
                handleDirectionsScroll={handleDirectionsScroll}
            />

        </div>

    );

}

export default Advantages;