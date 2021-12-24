import * as React from 'react';
import styled from 'styled-components';

import reducer, { defaultState } from './reducer';

type Props = {
  trigger: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
  open: boolean;
  onToggle: (open: boolean) => void;
};

type ContentProps = {
  $isOpen: boolean;
  $maxHeight: React.CSSProperties['maxHeight'];
  $overflow: React.CSSProperties['overflow'];
  $transitionTime: number;
};

const Container = styled.div``;
const Trigger = styled.div``;

const Content = styled.div<ContentProps>`
  overflow: ${props => props.$overflow};
  transition: ${props => `max-height ${props.$transitionTime}ms ease-out`};
  max-height: ${props =>
    typeof props.$maxHeight === 'string'
      ? props.$maxHeight
      : `${props.$maxHeight}px`};
`;

const Collapsible: React.FC<Props> = props => {
  const { open, trigger, children, onToggle } = props;
  const contentRef = React.useRef<HTMLDivElement>(null);
  const transitionTimeRef = React.useRef(240);
  const timeoutRef = React.useRef<NodeJS.Timeout>(null);
  const prevOpenState = React.useRef(open);
  const [state, dispatch] = React.useReducer(reducer, {
    ...defaultState,
    isOpen: open,
    maxHeight: open ? 'initial' : 0,
    overflow: open ? 'visible' : 'hidden',
  });
  const contentIDRef = React.useRef(
    'c-' + Math.floor(Math.random() * Date.now()),
  );
  const triggerIDRef = React.useRef(
    'c-' + Math.floor(Math.random() * Date.now()),
  );
  const { isOpen, maxHeight, overflow } = state;

  React.useEffect(() => {
    if (prevOpenState.current !== open && contentRef.current) {
      prevOpenState.current = open;

      if (contentRef.current) {
        if (open) {
          dispatch({
            type: 'state',
            payload: {
              maxHeight: contentRef.current.scrollHeight,
              overflow: 'hidden',
              isOpen: true,
            },
          });
          timeoutRef.current = setTimeout(() => {
            dispatch({
              type: 'state',
              payload: {
                maxHeight: 'initial',
                overflow: 'visible',
              },
            });
          }, transitionTimeRef.current);
        }

        if (!open) {
          prevOpenState.current = open;
          dispatch({
            type: 'state',
            payload: {
              maxHeight: contentRef.current.scrollHeight,
              overflow: 'hidden',
              isOpen: false,
            },
          });

          timeoutRef.current = setTimeout(() => {
            dispatch({
              type: 'state',
              payload: {
                maxHeight: 0,
              },
            });
          }, 15);
        }
      }
    }
  }, [open]);

  React.useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    },
    [],
  );

  const handleTriggerClick: React.MouseEventHandler<HTMLDivElement> = event => {
    const { isOpen } = state;
    event.preventDefault();
    onToggle(!isOpen);
  };

  return (
    <Container>
      <Trigger
        id={triggerIDRef.current}
        aria-controls={contentIDRef.current}
        aria-expanded={isOpen}
        role="button"
        onClick={handleTriggerClick}>
        {trigger}
      </Trigger>
      <Content
        id={contentIDRef.current}
        ref={contentRef}
        role="region"
        aria-labelledby={triggerIDRef.current}
        $transitionTime={transitionTimeRef.current}
        $isOpen={isOpen}
        $maxHeight={maxHeight}
        $overflow={overflow}>
        {children}
      </Content>
    </Container>
  );
};

export default Collapsible;
