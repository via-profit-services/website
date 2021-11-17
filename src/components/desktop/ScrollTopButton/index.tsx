import * as React from 'react';
import { useIntl } from 'react-intl';
import styled from 'styled-components';
import Icon from 'mdi-react/ChevronUpIcon';

const Button = styled.button<{ $visible: boolean }>`
  position: fixed;
  right: 20px;
  bottom: 20px;
  padding: 0;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background: ${({ theme }) => theme.color.accent.primary};
  color: ${({ theme }) => theme.color.text.inverse};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  z-index: ${props => props.theme.zIndex.header};
  border-radius: 100%;
  transform: scale(${props => (props.$visible ? '1' : '0')});
  transition: all 160ms ease-out;
`;

const VISIBILITY_OFFSET = 300;
const SCROLL_TIMEOUT = 100;

const ScrollButton: React.FC = () => {
  const intl = useIntl();
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const [visible, setVisibility] = React.useState(false);

  const handleScroll = () => {
    setVisibility(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    const listener = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        if (btnRef.current) {
          setVisibility(window.scrollY > VISIBILITY_OFFSET);
        }
      }, SCROLL_TIMEOUT);
    };
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return (
    <Button
      ref={btnRef}
      aria-label={intl.formatMessage({
        description: '«aria-label» attribute of Scroll to top button',
        defaultMessage: 'Scroll to top',
      })}
      onClick={handleScroll}
      $visible={visible}>
      <Icon size="1em" color="currentColor" />
    </Button>
  );
};

export default ScrollButton;
