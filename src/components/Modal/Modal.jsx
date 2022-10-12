
import "./Modal.css";
const Modal = (titulo) => {


  return (
    <div class='modal'>
        <div class='modal__loginFail'>
            <div class='modal__msg'>
                <h1 id="h1__msg">{titulo}</h1>
                <p id="p__msg">mensaje</p>
            </div>
                <div class="modal__buttons">
                    <button type="button" id='response'>OK</button>
            </div>
        </div>
    </div>
  )
}

export default Modal