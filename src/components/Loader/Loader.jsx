import { Audio } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';
export const Loader = () => {
  return (
    <Wrapper>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
      />
    </Wrapper>
  );
};
