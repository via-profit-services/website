import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import styled, { css } from 'styled-components';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';

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
  const match = useRouteMatch(path);
  const [open, setOpen] = React.useState<boolean>(match !== null);

  return (
    <Collapsible
      trigger={
        <Trigger $open={open} $active={match !== null}>
          <TriggerLabel>{label}</TriggerLabel>
          <ChevronRightIcon size="1em" color="currentColor" />
        </Trigger>
      }
      triggerTagName="div"
      open={open}
      handleTriggerClick={() => setOpen(!open)}
      transitionTime={120}>
      <>{children}</>
    </Collapsible>
  );
};

export default ListElementCollapsable;
