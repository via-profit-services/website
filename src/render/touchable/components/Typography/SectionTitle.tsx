import * as React from 'react';
import styled from 'styled-components';

import H2 from './H2';

type Props = {
  style?: any;
  className?: string;
  children: React.ReactNode | React.ReactNode[];
};

const Title = styled(H2)`
  justify-content: center;
  display: flex;
  text-align: center;
`;

const Inner = styled.span`
  position: relative;
  & :before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -15px;
    height: 3px;
    width: 40px;
    transform: translate(-50%, 0);
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`;

const SectionTitle: React.FC<Props> = props => {
  const { style, className, children } = props;

  return (
    <Title style={style} className={className}>
      <Inner>{children}</Inner>
    </Title>
  );
};

export default SectionTitle;
