import axios from 'axios';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { WrapperApp } from './App.styled';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    picture: [],
    inputText: '',
    loading: false,
    page: 1,
    totalHits: null,
    showModal: false,
    modalPicture: '',
  };
  onSubmit = data => {
    this.setState(() => ({
      picture: [],
      inputText: data,
      page: 1,
      totalHits: null,
    }));
  };
  counterPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.inputText !== this.state.inputText ||
      prevState.page !== this.state.page
    ) {
      try {
        if (
          prevState.inputText !== this.state.inputText ||
          prevState.page !== this.state.page
        ) {
          this.setState(() => ({ loading: true }));
          const response = await axios.get(
            `https://pixabay.com/api/?q=${this.state.inputText}&page=${this.state.page}&key=29826556-a4f91074fca654992db1f732d&image_type=photo&orientation=horizontal&per_page=12`
          );
          const pictures = response.data.hits;
          if (!pictures.length) {
            alert('Упс, по вашому запиту картинки не знайдені');
          } else {
            this.setState(prevState => ({
              picture: [...prevState.picture, ...pictures],
              totalHits: response.data.totalHits,
            }));
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.setState(() => ({ loading: false }));
      }
    }
  }

  openModal = e => {
    const srcPicture = e.target.alt;
    this.setState(() => ({
      modalPicture: srcPicture,
    }));
    this.toggleModal();
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { loading, picture, totalHits, showModal, modalPicture } = this.state;
    return (
      <WrapperApp>
        <Searchbar onSubmit={this.onSubmit} />
        {loading && <Loader />}

        {picture !== [] && (
          <ImageGallery
            cardInfo={this.state.picture}
            openModal={this.openModal}
          />
        )}
        {totalHits && totalHits !== picture.length && (
          <Button counterPage={this.counterPage} />
        )}
        {showModal && (
          <Modal picture={modalPicture} onClose={this.toggleModal} />
        )}
      </WrapperApp>
    );
  }
}
