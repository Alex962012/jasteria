export const Modal = ({ active, setActive, title }: any) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div>{title}</div>
      </div>
    </div>
  );
};
