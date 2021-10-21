import * as React from 'react';

const Icon: React.ForwardRefRenderFunction<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
> = (props, ref) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 43 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}>
    <path
      d="M.24 23.856 5.531 21.3.518 18.954c-.389-.182-.617-.663-.348-1.111l.52-.604c.337-.367.702-.636 1.146-.461l3.725 1.404c.081.03.17.035.254.01l1.442-.408a.315.315 0 0 1 .303.075l1.542 1.464a12.528 12.528 0 0 1 2.308-5.353l-2.255-.018a.269.269 0 0 1-.233-.139l-.798-1.448a.384.384 0 0 0-.186-.168l-3.69-1.573c-.227-.097-.366-.568-.323-.873l.12-1.102c.099-.316.543-.595.755-.516l5.55 1.934-1.887-5.203c-.145-.404.033-.906.54-1.033l.796-.058c.497-.022.945.046 1.136.483l1.64 3.627c.037.08.097.145.173.188l1.308.73a.315.315 0 0 1 .161.267l.056 2.127a12.514 12.514 0 0 1 5.418-2.153l-1.583-1.608a.269.269 0 0 1-.066-.263l.459-1.588a.386.386 0 0 0-.013-.251L16.992 1.61c-.092-.228.142-.66.389-.845l.864-.694c.293-.155.804-.037.899.168L21.7 5.532 24.046.518c.182-.389.663-.617 1.112-.348l.603.521c.367.336.636.701.461 1.145l-1.404 3.725a.406.406 0 0 0-.01.254l.407 1.442a.314.314 0 0 1-.074.303l-1.464 1.542a12.528 12.528 0 0 1 5.353 2.308l.018-2.255c0-.097.054-.186.139-.233l1.448-.798a.385.385 0 0 0 .168-.186l1.573-3.69c.097-.227.568-.366.873-.323l1.102.12c.316.099.595.543.517.755l-1.935 5.55 5.203-1.886c.404-.147.906.032 1.033.54l.058.795c.022.497-.046.945-.483 1.135l-3.627 1.642a.407.407 0 0 0-.188.172l-.73 1.308a.315.315 0 0 1-.267.161l-2.127.056a12.514 12.514 0 0 1 2.153 5.418l1.608-1.583a.269.269 0 0 1 .263-.067l1.588.46a.38.38 0 0 0 .251-.013l3.722-1.497c.228-.091.66.143.845.39l.694.864c.155.293.037.804-.168.899L37.468 21.7l5.014 2.345c.389.182.617.663.348 1.111l-.521.604c-.336.367-.701.636-1.145.461l-3.725-1.404a.408.408 0 0 0-.254-.01l-1.442.408a.315.315 0 0 1-.303-.075l-1.542-1.464a12.529 12.529 0 0 1-2.308 5.353l2.255.018c.097 0 .186.054.233.139l.798 1.448a.387.387 0 0 0 .186.168l3.69 1.573c.227.097.366.568.323.873l-.12 1.102c-.099.316-.543.595-.755.517l-5.55-1.935 1.886 5.203c.146.404-.032.906-.54 1.033l-.795.058c-.497.022-.945-.046-1.135-.483l-1.642-3.627a.408.408 0 0 0-.172-.188l-1.308-.73a.315.315 0 0 1-.161-.267l-.056-2.127a12.514 12.514 0 0 1-5.418 2.153l1.583 1.608a.27.27 0 0 1 .066.263l-.459 1.588a.386.386 0 0 0 .013.251l1.497 3.722c.091.228-.143.66-.39.845l-.864.694c-.293.154-.804.037-.899-.168L21.3 37.468l-2.345 5.014c-.182.389-.663.617-1.112.348l-.603-.521c-.367-.336-.636-.701-.461-1.145l1.404-3.725a.407.407 0 0 0 .01-.254l-.408-1.442a.315.315 0 0 1 .075-.303l1.464-1.542a12.526 12.526 0 0 1-5.353-2.308l-.018 2.255a.268.268 0 0 1-.139.233l-1.448.798a.386.386 0 0 0-.168.186l-1.573 3.69c-.097.227-.568.366-.873.323l-1.102-.12c-.316-.099-.595-.543-.517-.755l1.935-5.55-5.203 1.886c-.405.146-.906-.032-1.033-.54l-.058-.795c-.022-.497.046-.945.483-1.135l3.627-1.642a.408.408 0 0 0 .188-.172l.73-1.308a.315.315 0 0 1 .267-.161l2.127-.056a12.514 12.514 0 0 1-2.153-5.418l-1.608 1.583a.269.269 0 0 1-.263.067l-1.589-.46a.384.384 0 0 0-.25.013L1.61 26.009c-.228.091-.66-.143-.845-.39l-.694-.864c-.155-.293-.037-.804.168-.899Zm12.234-3.76h2.677a6.47 6.47 0 0 1 1.084-2.41l-1.876-1.877a9.088 9.088 0 0 0-1.885 4.287Zm5.53-4.078a6.46 6.46 0 0 1 2.47-.94v-2.652a9.08 9.08 0 0 0-4.362 1.7l1.892 1.892Zm.326 5.482a3.17 3.17 0 1 0 6.34 0 3.17 3.17 0 0 0-6.34 0Zm4.574-9.026v2.677a6.47 6.47 0 0 1 2.41 1.084l1.877-1.876a9.089 9.089 0 0 0-4.287-1.885Zm4.078 5.53c.47.736.797 1.572.94 2.47h2.652a9.083 9.083 0 0 0-1.7-4.362l-1.892 1.892Zm3.544 4.9h-2.677a6.468 6.468 0 0 1-1.084 2.41l1.876 1.877a9.09 9.09 0 0 0 1.885-4.287Zm-5.53 4.078a6.461 6.461 0 0 1-2.47.94v2.652a9.079 9.079 0 0 0 4.362-1.7l-1.892-1.892Zm-4.9 3.544v-2.677a6.47 6.47 0 0 1-2.41-1.084l-1.876 1.876a9.089 9.089 0 0 0 4.286 1.885Zm-4.078-5.53a6.465 6.465 0 0 1-.94-2.47h-2.652a9.083 9.083 0 0 0 1.7 4.362l1.892-1.892Z"
      fill="currentColor"
    />
  </svg>
);

export default React.forwardRef(Icon);