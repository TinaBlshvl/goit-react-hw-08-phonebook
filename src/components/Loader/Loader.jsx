import { Grid } from 'react-loader-spinner';
import { StyledOverlay } from './Overlay.styled';

export const Loader = () => {
  return (
    <StyledOverlay>
      <Grid
        height="120"
        width="120"
        color="#303f9f"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        // align-items="center"
        // justify-content="center"
        // margin="0 auto"
      />
    </StyledOverlay>
  );
};
