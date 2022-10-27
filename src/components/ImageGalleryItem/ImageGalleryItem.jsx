import { GalleryItem, ItemImage } from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ cardInfo }) => {
  return cardInfo.map(({ webformatURL, id, largeImageURL, tags }) => (
    <GalleryItem key={id}>
      <ItemImage src={webformatURL} alt={tags} name={largeImageURL} />
    </GalleryItem>
  ));
};
