import "./Feedback.css";
export const Feedback = () => {
  return (
    <div className="feedback-container">
      <div className="feedback-form-container">
        <h3 className="feedback-form-title">
          Для заказа или консультации заполните форму, и мы с Вами свяжемся с
          ближайшее время
        </h3>
        <form action="" className="feedback-form">
          <input
            type="text"
            className="feedback-form-input"
            placeholder="First name"
          />
          <input
            type="text"
            className="feedback-form-input"
            placeholder="Email"
          />
          <input
            type="text"
            className="feedback-form-input bg"
            placeholder="Describe your wishes..."
          />
          <button className="feedback-form-button">SEND MESSAGE</button>
        </form>
      </div>
      <div className="image-container"></div>
    </div>
  );
};
