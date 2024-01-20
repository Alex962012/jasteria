import { useState } from "react";
import "./Feedback.css";
import emailjs from "@emailjs/browser";
export const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e: any) => {
    e.preventDefault();
    if (name === '') {
      alert("Заполните имя")
      return
  }
  if (email === '') {
      alert("Заполните номер")
      return
  }
  // if (check === false) {
  //     alert("Необходимо согласиться с политикой конфиденциальности")
  //     return
  // }
    emailjs
      .sendForm(
        "service_l6hcini",
        "template_gsu817g",
        e.target,
        "xduDM1b0TgoASuAHP"
      )
      .then(
        (result) => {
          alert("Сообщение отправлено");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="feedback-wrapper">
      <div>
        <h1 className="feedback-title">J.Asteria в соцсетях</h1>
        <div>
        <ul className="feedback-social-container">
            <a
              href="https://instagram.com/j.asteria13?igshid=MzRlODBiNWFlZA=="
              className="feedback-item"
            >
              <li className="feedback-icon">
              <div className="icon-instagram icon-feedback-size"></div>
              </li>
            </a>
            <a href="https://wa.me/79247354213" className="footer-item">
              <li className="feedback-icon">
              <div className="icon-whatsapp icon-feedback-size"></div>
              </li>
            </a>
            <a href="https://t.me/j_asteria" className="footer-item">
              <li className="feedback-icon">
              <div className="icon-telegram icon-feedback-size"></div>
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div className="feedback-container" id="feedback">
        <div className="feedback-form-container">
          <h3 className="feedback-form-title">
            Для заказа или консультации заполните форму, и я с Вами свяжусь в
            ближайшее время
          </h3>
          <form action="" onSubmit={sendEmail} className="feedback-form">
            <input
              type="text"
              className="feedback-form-input"
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="user_name"
            />
            <input
              type="text"
              className="feedback-form-input"
              placeholder="Предпочитаемый способ связи и контакты"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="user_email"
            />
            <input
              type="text"
              className="feedback-form-input bg"
              placeholder="Комментарий..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="user_message"
            />
            <button className="feedback-form-button" type="submit">
              Отправить сообщение
            </button>
          </form>
        </div>
        {/* <div className="image-container"></div> */}
      </div>
    </div>
  );
};
