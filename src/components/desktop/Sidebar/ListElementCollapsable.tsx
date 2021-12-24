import * as React from 'react';
import { useMatch } from 'react-router-dom';
import styled, { css } from 'styled-components';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';

import Collapsible from '~/components/both/Collapsible';
import { linkStyles } from './ListElementLink';

type Props = {
  path: string;
  children: React.ReactNode | React.ReactNode[];
  label: React.ReactNode;
};

const Trigger = styled.div<{ $open: boolean; $active: boolean }>`
  ${linkStyles}
  display: flex;
  justify-content: space-between;
  align-items: center;
  & svg {
    transition: all 160ms ease-out;
    ${props =>
      props.$open &&
      css`
        transform: rotate(90deg);
      `}
  }
`;

const TriggerLabel = styled.span`
  flex: 1;
`;

const ListElementCollapsable: React.FC<Props> = props => {
  const { path, children, label } = props;
  const match = useMatch({
    path,
    end: false,
  });
  const [open, setOpen] = React.useState<boolean>(match !== null);

  return (
    <Collapsible
      open={open}
      onToggle={setOpen}
      trigger={
        <Trigger $open={open} $active={match !== null}>
          <TriggerLabel>{label}</TriggerLabel>
          <ChevronRightIcon size="1em" color="currentColor" />
        </Trigger>
      }>
      <>{children}</>
    </Collapsible>
  );
};

export default ListElementCollapsable;
