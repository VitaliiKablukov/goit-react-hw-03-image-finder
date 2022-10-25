import { GalleryItem, ItemImage } from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ cardInfo }) => {
  return cardInfo.map(({ webformatURL, id, largeImageURL }) => (
    <GalleryItem key={id}>
      <ItemImage src={webformatURL} alt={largeImageURL} />
    </GalleryItem>
  ));
};
