import React from 'react';

import LogoInline, { LogoInlineProps } from './LogoInline';
import LogoRound, { LogoRoundProps } from './LogoRound';

export type LogoProps = LogoInlineProps | LogoRoundProps;

const Logo: React.FC<LogoProps> = (props) => {
  const { variant, ...otherProps } = props;

  switch (variant) {
    case 'round':
      return <LogoRound variant="round" {...otherProps} />;
    
    case 'inline':
      default:
      return <LogoInline variant="inline" {...otherProps} />;
  }
}

export default Logo;

