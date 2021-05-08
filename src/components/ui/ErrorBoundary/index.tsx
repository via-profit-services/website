import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  border-radius: inherit;
  color: red;
`;

const ErrorBox = styled.pre`
  max-height: 300px;
  overflow: auto;
`;

export interface ErrorBoundaryComponentProps {
  children: React.ReactNode | React.ReactNode[];
}

const scope = 'components.ErrorBoundary';
const ErrorBoundaryComponent: React.FC<ErrorBoundaryComponentProps> = (props) => {
  const { children } = props;

  return (
    <ErrorBoundary
      FallbackComponent={({ error }) => (
        <Container>
          <h2>
            Something went wrong
          </h2>
          {process.env.NODE_ENV === 'development'
          ? (
            <>
              <ErrorBox>{error?.message}</ErrorBox>
            </>
            )
          : (
            <p>
              Please try again later or contact your system administrator
            </p>
          )}
        </Container>
      )}
    >
      <>{children}</>
    </ErrorBoundary>
  )
}


export default ErrorBoundaryComponent;
