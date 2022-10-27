import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { WrapperApp } from './App.styled';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { RequesPictures } from '../components/Services/ServicesApi';
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
  fetchImages = async (query, pages) => {
    
    const response = await RequesPictures(query, pages);
    const pictures = response.data.hits;
    const aryyPictures = pictures.map(elem => {
      const picture = {
        id: elem.id,
        webformatURL: elem.webformatURL,
        largeImageURL: elem.largeImageURL,
        tags: elem.tags,
      };
      return picture;
    });
    if (!pictures.length) {
      alert('Упс, по вашому запиту картинки не знайдені');
    } else {
      this.setState(prevState => ({
        picture: [...prevState.picture, ...aryyPictures],
        totalHits: response.data.totalHits,
      }));
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.inputText !== this.state.inputText ||
      prevState.page !== this.state.page
    ) {
      this.setState(() => ({ loading: true }));
      const { inputText, page } = this.state;
      this.fetchImages(inputText, page);
      this.setState(() => ({ loading: false }));
    }
  }

  openModal = e => {
    const srcPicture = e.target.name;

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
