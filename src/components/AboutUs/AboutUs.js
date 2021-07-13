import React from "react";
import baseStation from "../../images/base-station.webp";
import build from "../../images/build.webp";
import arrow from "../../images/arrow.svg";
import textAboutUs from "../../images/text-about-us.svg";

function AboutUs (props) {

    const {
        handleAboutUsScroll,
        isAboutUs,
        handleFeedbackFormScroll,
    } = props;

    React.useEffect(() => {
        if (isAboutUs) {
            const elem = document.getElementById("#about".slice(1))
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" })
            }
            handleAboutUsScroll();
        }
    }, [isAboutUs, handleAboutUsScroll])

    return (

        <div id="about" className="about-us">

            <div className="about-us__main-container">

                <div className="about-us__img-container">
                    <img className="about-us__base-station-img" src={baseStation} alt="Изображение базовых станций" />
                    <img className="about-us__build-img" src={build} alt="Изображение здания" />
                </div>

                <div className="about-us__info-container">
                    
                    <div className="about-us__heading-container">
                        <h2 className="about-us__heading-top">
                            Чем занимается наша
                            <img className="about-us__heading-top-img" src={textAboutUs} alt="Изображение рамки" />
                        </h2>
                    </div>

                    <p className="about-us__heading">компания</p>

                    <p className="about-us__description">Сервис-Интеграция – лидер по оптимизации взаимодействия операторов
                        связи с управляющими компаниями, ЖКС, ТСЖ, собственниками
                        жилья. Благодаря квалифицированным кадрам и качественной
                        работе, мы осуществляем деятельность на высоком уровне и являемся
                        надежными партнерами для наших заказчиков. Ценности и политика компании
                        направлены на эффективное взаимодействие между субъектами
                        предпринимательства, что обеспечивает нам положительные отклики
                        со стороны наших клиентов.
                    </p>

                    <div className="about-us__feedback-link-container">
                        <img className="about-us__feedback-link-icon" src={arrow} alt="Иконка стрелки" onClick={handleFeedbackFormScroll} />
                        <p className="about-us__feedback-link" onClick={handleFeedbackFormScroll}>Оставить заявку</p>
                    </div>

                </div>

            </div>

        </div>

    );

}

export default AboutUs;