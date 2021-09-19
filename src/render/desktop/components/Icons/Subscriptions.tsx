import * as React from 'react';

const Icon: React.ForwardRefRenderFunction<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
> = (props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
    ref={ref}>
    <path
      d="M12 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h3l5 4V4l-5 4m3 7.6L13 14H4v-4h9l2-1.6v7.2m6.5-3.6c0 1.71-.96 3.26-2.5 4V8c1.53.75 2.5 2.3 2.5 4Z"
      fill="currentColor"
    />
  </svg>
);

export default React.forwardRef(Icon);
