import React from "react";
import textDirections from "../../images/text-directions.svg";
import paperIcon from "../../images/paper.svg";
import baseStation from "../../images/base-station.svg";
import buildIcon from "../../images/build-icon.svg";
import paperQuestionIcon from "../../images/paper-question.svg";

function Directions (props) {

    const {
        handleDirectionsScroll,
        isDirections
    } = props;

    React.useEffect(() => {
        if (isDirections) {
            const elem = document.getElementById("#directions".slice(1))
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" })
            }
            handleDirectionsScroll();
        }
    }, [isDirections, handleDirectionsScroll])

    return (

        <div id="directions" className="directions">
            <h2 className="directions__heading-top">
                <img className="directions__heading-top-border-img" src={textDirections} alt="Рамка" />
                Основные направления
            </h2>
            <p className="directions__heading">деятельности компании</p>
            <p className="directions__description">Наша деятельность осуществляется по основным четырем направлениям</p>

            <div className="directions__services-container">

                <div className="directions__services-left-container">

                    <div className="directions__services-item-container">
                        <img className="directions__services-item-icon" src={paperIcon} alt="Иконка" />
                        <p className="directions__services-item-text">Cоздание нестандартных проектов и решений под размещение активного оборудования.</p>
                    </div>

                    <div className="directions__services-item-container">
                        <img className="directions__services-item-icon" src={baseStation} alt="Иконка" />
                        <p className="directions__services-item-text">Технологический контроль и надзор за размещением телекоммуникационного оборудования на жилых домах, промышленных сооружениях и коммерческих зданиях.</p>
                    </div>

                </div>

                <div className="directions__services-right-container">

                    <div className="directions__services-item-container">
                        <img className="directions__services-item-icon" src={buildIcon} alt="Иконка" />
                        <p className="directions__services-item-text">Проведение общих собраний собственников жилья в многоквартирных домах, оказываем юридическую поддержку</p>
                    </div>

                    <div className="directions__services-item-container">
                        <img className="directions__services-item-icon" src={paperQuestionIcon} alt="Иконка" />
                        <p className="directions__services-item-text">Решение спорных вопросов, возникающих при размещении и эксплуатация сервисного оборудования, защищая интересы каждой из сторон.</p>
                    </div>

                </div>

            </div>

        </div>

    );

}

export default Directions;