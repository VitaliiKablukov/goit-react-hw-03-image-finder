import { Overlay, Modal } from './Modal.styled';
export const Modal = ({ picture }) => {
  console.log(picture);
  return (
    <Overlay>
      <Modal>
        <img src={picture} alt="зображення" />
      </Modal>
    </Overlay>
  );
};
