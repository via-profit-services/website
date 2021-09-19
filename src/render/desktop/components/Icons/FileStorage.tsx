import * as React from 'react';

const Icon: React.ForwardRefRenderFunction<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
> = (props, ref) => (
  <svg
    viewBox="0 0 520 520"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    ref={ref}>
    <path
      d="M475 125.016V90c0-24.813-20.187-45-45-45H219.402l-7.86-12.834A15 15 0 0 0 198.75 25H45C20.187 25 0 45.187 0 70v380c0 24.813 20.187 45 45 45h430c24.813 0 45-20.187 45-45V170.016c0-24.814-20.187-45-45-45zM430 75c8.271 0 15 6.729 15 15v35H268.394l-30.62-50zm60 375c0 8.271-6.729 15-15 15H45c-8.271 0-15-6.729-15-15V70c0-8.271 6.729-15 15-15h145.347l7.857 12.83a.008.008 0 0 1 .002.004l48.992 80 .003.004.007.011A15 15 0 0 0 260 155.015h215c8.271 0 15 6.729 15 15z"
      fill="currentColor"
    />
    <path
      d="M345.282 289.618H174.718c-8.284 0-15 6.716-15 15v60.199c0 8.284 6.716 15 15 15h170.564c8.284 0 15-6.716 15-15v-60.199c0-8.284-6.716-15-15-15zm-15 60.199H189.718v-30.199h140.564z"
      fill="currentColor"
    />
  </svg>
);

export default React.forwardRef(Icon);
