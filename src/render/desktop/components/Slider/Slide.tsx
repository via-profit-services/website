import * as React from 'react';
import styled from 'styled-components';

export type SlideProps = {
  readonly image: {
    readonly source: {
      readonly url: string;
    } | null;
  };
};

const Container = styled.div<{ $src: string }>`
  height: 320px;
  background-image: url(${props => props.$src});
  background-size: cover;
  background-position: center center;
`;

const Slide: React.FC<SlideProps> = props => {
  const { image } = props;

  return <Container $src={image.source?.url || ''} />;
};

export default Slide;
