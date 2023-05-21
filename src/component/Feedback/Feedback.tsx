import "./Feedback.css";
export const Feedback = () => {
  return (
    <div className="feedback-container" id="feedback">
      <div className="feedback-form-container">
        <h3 className="feedback-form-title">
          Для заказа или консультации заполните форму, и мы с Вами свяжемся с
          ближайшее время
        </h3>
        <form action="" className="feedback-form">
          <input
            type="text"
            className="feedback-form-input"
            placeholder="Имя"
          />
          <input
            type="text"
            className="feedback-form-input"
            placeholder="Предпочитаемый способ связи и контакты"
          />
          <input
            type="text"
            className="feedback-form-input bg"
            placeholder="Комментарий..."
          />
          <button className="feedback-form-button">Отправить сообщение</button>
        </form>
      </div>
      <div className="image-container"></div>
    </div>
  );
};
