import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import styled from 'styled-components';

type CollapsableElemProps = {
  path: string;
  children: React.ReactNode | React.ReactNode[];
  label: React.ReactNode;
};

const Trigger = styled.div`
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;

const CollapsableElem: React.FC<CollapsableElemProps> = props => {
  const { path, children, label } = props;
  const match = useRouteMatch(path);
  const [open, setOpen] = React.useState<boolean>(match !== null);

  return (
    <Collapsible
      trigger={<Trigger>{label}</Trigger>}
      triggerTagName="div"
      open={open}
      handleTriggerClick={() => setOpen(!open)}
      transitionTime={120}>
      <li>{children}</li>
    </Collapsible>
  );
};

export default CollapsableElem;
