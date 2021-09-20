import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  to: string;
};

const Li = styled.li`
  margin: 0;
  &:hover {
    background-color: red;
  }
`;

const ListElementLink: React.FC<Props> = props => {
  const { children, to } = props;

  return (
    <Li>
      <Link to={to}>{children}</Link>
    </Li>
  );
};

export default ListElementLink;
