import * as React from "react"
import "./ModalComponent.scss"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"

const ModalComponent = (props) => {
  const { open, handleClose, children } = props
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="box">
          <button onClick={handleClose}>X</button>

          {children}
        </Box>
      </Modal>
    </div>
  )
}
export default ModalComponent
