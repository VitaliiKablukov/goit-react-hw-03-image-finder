import { ButtonMore } from './Button.styled';
export const Button = ({ counterPage }) => {
  return (
    <ButtonMore type="button" onClick={counterPage}>
      Load More
    </ButtonMore>
  );
};
