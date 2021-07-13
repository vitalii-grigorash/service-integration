import React from "react";
import point from "../../images/point.svg";
import mailIcon from "../../images/mail-icon.svg";
import phoneIcon from "../../images/phone-icon.svg";

function Footer(props) {

  const {
    handleContactsScroll,
    isContacts,
    handleMainScroll,
    handleAboutUsScroll,
    handleDirectionsScroll
  } = props;

  React.useEffect(() => {
    if (isContacts) {
      const elem = document.getElementById("#contacts".slice(1))
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" })
      }
      handleContactsScroll();
    }
  }, [isContacts, handleContactsScroll])

  return (

    <div id="contacts" className="footer">

      <h2 className="footer__heading">Сервис-Интеграция</h2>

      <div className="footer__nav-container">
        <nav className="footer__menu">
          <p className="footer__menu-text">Меню</p>
          <p className="footer__menu-link" onClick={handleMainScroll}>Главная</p>
          <p className="footer__menu-link" onClick={handleAboutUsScroll}>О нас</p>
          <p className="footer__menu-link" onClick={handleDirectionsScroll}>Направления</p>
          <p className="footer__menu-link">Контакты</p>
        </nav>

        <nav className="footer__contacts">
          <p className="footer__contacts-text">Контакты</p>

          <div className="footer__contacts-item-container">
            <img className="footer__contacts-item-icon" src={point} alt="Иконка метки" />
            <a
              className="footer__contacts-item-link"
              href="https://yandex.ru/maps/2/saint-petersburg/house/prospekt_obukhovskoy_oborony_70k2/Z0kYcgVpTEIAQFtjfXVxcXpjZQ==/?ll=30.429577%2C59.900602&source=wizgeo&utm_medium=maps-desktop&utm_source=serp&z=17.03"
              target="_blank"
              rel="nofollow noreferrer"
            >
              г. Санкт-Петербург, пр-кт Обуховской обороны, дом 70, корпус 2, литер А, помещение 1-Н, этаж №4 КОМ 289, офис 449
            </a>
          </div>

          <div className="footer__contacts-item-container">
            <img className="footer__contacts-item-icon footer__contacts-item-icon_mail" src={mailIcon} alt="Иконка метки" />
            <a href="mailto:info@s-integration.ru" className="footer__contacts-item-link">
              info@s-integration.ru
            </a>
          </div>

          <div className="footer__contacts-item-container">
            <img className="footer__contacts-item-icon footer__contacts-item-icon_phone" src={phoneIcon} alt="Иконка метки" />
            <a href="tel:+79819027478" className="footer__contacts-item-link">
              +7 (981) 902-74-78
            </a>
          </div>

        </nav>
      </div>

    </div>

  );

}

export default Footer;