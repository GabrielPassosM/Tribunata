import "./EditPlayerModal.css";

const EditPlayerModal = ({ isVisible, children }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {children}
      </div>
    </div>
  )
}

export default EditPlayerModal;