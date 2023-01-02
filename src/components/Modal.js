import './Modal.css'

export default function Modal(props) {
  return (
    <div className="modal-backdrop">
        <div className="modal" style={{border: '4px solid', borderColor: 'rgb(255, 136, 0)'}}>
            {props.children}
            <button onClick={props.closeModal}>close</button>
        </div>

    </div>
  )
}
