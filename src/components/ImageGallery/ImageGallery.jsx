import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Wrapper } from './ImageGallery.styled';
export const ImageGallery = ({ cardInfo, openModal }) => {
  return (
    <Wrapper onClick={openModal}>
      <ImageGalleryItem cardInfo={cardInfo} />
    </Wrapper>
  );
};
