import { useState } from "react";
import "./Feedback.css";
import emailjs from "@emailjs/browser";
export const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l6hcini",
        "template_gsu817g",
        e.target,
        "xduDM1b0TgoASuAHP"
      )
      .then(
        (result) => {
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
    <div className="feedback-container" id="feedback">
      <div className="feedback-form-container">
        <h3 className="feedback-form-title">
          Для заказа или консультации заполните форму, и мы с Вами свяжемся с
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
      <div className="image-container"></div>
    </div>
  );
};
