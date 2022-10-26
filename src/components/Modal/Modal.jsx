import { Component } from 'react';
import { Overlay, ModalBack } from './Modal.styled';
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeMoodal);
  }
  closeMoodal = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeMoodal);
  }
  closeMoodalBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    const { picture } = this.props;
    return (
      <Overlay onClick={this.closeMoodalBackdrop}>
        <ModalBack>
          <img src={picture} alt="зображення" />
        </ModalBack>
      </Overlay>
    );
  }
}
