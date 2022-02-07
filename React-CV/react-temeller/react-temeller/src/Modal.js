function Modal(props) {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.onCancel}>
        Cancel
      </button>
      <button className="btn" onClick={props.onConfirm}>
        Confirm
      </button>
    </div>
  );
}
/*Cancel ve Confirm butonlarına onClick eventlistenerını atayıp isimlerine onCancel ve onConfirm deyip prop olarak atadık. */
export default Modal;
