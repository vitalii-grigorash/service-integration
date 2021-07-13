import React from "react";
import { Validation } from '../../utils/Validation';
import vector from "../../images/vector.svg";

function Form (props) {

    const {
        onSendForm,
        submitButtonText,
    } = props;

    const name = Validation();
    const number = Validation();
    const comment = Validation();

    function submitForm(evt) {
        evt.preventDefault();
        onSendForm(name.value, number.value, comment.value);
        name.setValue('');
        number.setValue('');
        comment.setValue('');
    }

    return (

        <form className="form" onSubmit={submitForm}>

            <div className="form__input-container">
                <input
                    type="text"
                    className="form__input"
                    id="name-input"
                    name="name"
                    value={name.value}
                    onChange={name.onChange}
                    minLength="2"
                    maxLength="50"
                    placeholder="Имя"
                    pattern="[A-Za-zа-яёА-ЯЁ -]{1,}"
                    required
                />
                <span id="name-input-error" className="form__input_error">{name.errorMessage}</span>
            </div>

            <div className="form__input-container">
                <input
                    type="text"
                    className="form__input"
                    id="number-input"
                    name="number"
                    value={number.value}
                    onChange={number.onChange}
                    minLength="3"
                    maxLength="20"
                    placeholder="Телефон"
                    pattern='^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$'
                    required
                />
                <span id="number-input-error" className="form__input_error">{number.errorMessage}</span>
            </div>

            <textarea
                type="text"
                className="form__textarea"
                name="comment"
                value={comment.value}
                onChange={comment.onChange}
                placeholder="Текст"
            ></textarea>

            <div className="form__agree-container">
                <img className="form__agree-vector" src={vector} alt="Иконка вектора" />
                <p className="form__agree-text">Принимаю пользовательское соглашение</p>
            </div>

            <button className="form__button" type="submit">{submitButtonText}</button>

        </form>

    );

}

export default Form;