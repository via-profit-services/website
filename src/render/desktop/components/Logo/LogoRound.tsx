import * as React from 'react';

type Props = React.SVGProps<SVGSVGElement> & {
  className?: string;
};

const LogoInline: React.ForwardRefRenderFunction<SVGSVGElement, Props> = (
  props,
  ref,
) => {
  const { className } = props;

  return (
    <svg
      ref={ref}
      className={className}
      viewBox="0 0 1245 1245"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M623.855 0C948.566 0 1215.31 251.534 1245 573.125l-1.41-.478s-11.9-4.423-18.15-6.814c-6.24-2.51-5.3-6.814-9.42-6.695-4.25 0-6.37-1.673-6.37-1.673s2.24-3.109 5.89-8.608c3.66-5.5 7.78-13.39 7.78-13.39s-2.12 3.706-5.54 4.543c-3.3.837-20.5 2.63-20.5 2.63s1.3-4.184 1.42-7.293c.11-3.108.23-8.607.23-8.607s-2.83.12-5.89 1.674c-3.06 1.434-10.96 5.26-14.14 2.032-3.18-3.108-5.89-11.835-4.94-16.139.82-4.185 3.18-4.543 4.71-4.902 1.65-.359 5.54-.239 5.54-.239s-7.66-4.185-12.14-6.097c-4.48-1.913-11.55-5.38-11.55-9.564 0-4.185 1.3-5.5.24-8.728-1.06-3.228-3.06-5.26-3.06-5.26s-.71 4.423-2.95 4.423c-2.36 0-9.07-3.227-15.67-10.759-6.48-7.532-7.19-8.129-11.31-9.684-4.24-1.554-13.08-9.325-13.2-15.183-.11-5.857 1.77-8.846 1.77-8.846s-1.88 1.195-6.01 4.662c-4.12 3.467-5.89 3.108-8.83 2.63-3.07-.598-5.31-1.793-4.6-7.412.59-5.619 3.06-11.835 3.06-15.183 0-3.347-1.06-5.619-1.06-5.619s-.7 7.293-3.53 6.695c-2.83-.598-6.48-5.619-8.37-7.651-1.76-1.913.12.598-2.23 3.108-2.36 2.511-5.31 5.38-8.37 0-3.06-5.38-12.96-28.692-12.25-34.311.82-5.619-.12-8.966-.12-8.966s-.47 3.586-1.65 6.814-1.06 7.651-5.77 7.054c-4.6-.478-11.43-3.826-11.43-3.826s22.74-51.646 19.32-77.229c-3.3-25.465-10.96-60.971-57.38-64.916-46.418-3.826-61.617-6.097-86.006 3.945-24.388 9.922-47.952 31.561-47.952 31.561s-112.753-43.038-168.246-40.408c-55.376 2.63-178.026 9.922-250.249 38.256-72.224 28.453-60.795 18.411-92.371 41.723-31.576 23.074-37.584 26.899-40.648 30.486-3.063 3.467-22.975 29.648-30.515 35.865-7.658 6.097-9.19 9.205-16.024 10.759-6.833 1.554-11.075 2.391-11.428 4.663-.353 2.271-1.531 8.488-1.531 13.868 0 5.379-1.885 18.53-6.009 23.551-4.242 5.021-16.731 21.28-16.731 21.28s2.357 0 7.541.717l5.302.837s-11.429 8.847-32.636 27.019c-21.326 18.052-38.881 36.582-51.723 46.266-12.96 9.683-20.619 16.976-31.222 22.356-10.604 5.379-35.111 22.116-40.412 28.094-5.184 5.858-7.187 6.217-8.248 8.249-1.178 1.912-4.83 8.966-3.063 14.585 1.767 5.738 8.365 30.964 9.897 31.681 1.531.717 1.531.837 2.003 1.315.353.478 3.299 3.826 4.241 4.663 1.061.837 2.357 1.674 3.064 2.032.589.24 1.06.12 1.295.478.236.359.59 1.077 1.297.837.589-.239.589-1.554.942-2.032.236-.478 2.592-2.271 5.184-2.391 2.592-.12 3.182.478 4.242.837 1.06.358 1.296.478 1.296.478s-.118 8.608.118 10.999c.236 2.271.942 4.901 1.06 6.455.118 1.554-.118 8.01-.118 9.804 0 1.673.118 18.291 3.064 22.834 3.063 4.662 6.48 8.488 6.951 10.4.354 2.033 4.948 5.022 6.362 8.13 1.532 3.108 4.36 10.52 9.544 10.879 5.184.24 19.322-.598 22.386-.717 2.945-.12 3.534-.598 4.594-.837 1.178-.359 5.42 0 5.42 0s2.003 6.575 4.359 9.086c2.239 2.51 7.777 4.065 7.777 4.065s-1.415-7.532-.707-9.445c.824-1.913-.118-4.901 6.833-5.619 6.834-.837 64.566.359 64.566.359s4.123 3.108 6.48 3.108c2.474 0 15.552-2.75 18.615 4.662 3.063 7.293-7.423 7.652-10.014 8.01-2.475.24-9.19.957-11.194 1.674-1.884.717-5.419 1.794-5.419 1.794s.353 3.586-5.891 5.618c-6.245 2.152-8.719 4.783-9.308 5.978-.589 1.195-4.595 6.934-6.009 7.771-1.531.717-8.247 2.989-10.604 2.75-2.356-.12-8.601-2.392-11.546-7.412-2.827-5.022-2.945-6.935-2.945-6.935s-4.595 5.978-3.063 10.641c1.531 4.782 3.652 8.966 4.948 13.27 1.296 4.304 3.77 11.237 1.296 13.03-2.356 1.675-6.245 3.228-6.245 3.228s-.236 8.01.118 12.195c.236 4.064 1.061 8.488 1.297 10.401.118 1.912-.707 5.499.118 6.694.707 1.196 15.198 29.29 35.699 37.061 20.501 7.651 31.222 12.314 44.889 10.042 13.667-2.391 35.346-9.325 38.409-9.325 3.064 0 7.894-.717 9.308 0 1.531.837 5.656 3.108 5.656 3.108s-.354-2.869-1.061-4.064c-.707-1.315-1.178-2.749-.354-3.945.707-1.196 1.532-2.63 7.776-3.108 6.127-.478 19.205-2.631 25.449-1.913 6.245.717 6.245 3.826 6.245 3.826l-1.178 5.021s.353-1.196 3.417-1.196c3.063 0 6.479 3.826 9.896 10.042 3.417 6.097 5.42 10.401 6.834 11.597 1.531 1.076 3.181 0 5.066.956 1.885.957 1.885 1.076 2.945 1.554 1.061.478 3.417 1.315 3.417 1.315s.236 5.141 1.296 8.01a376.538 376.538 0 0 0 2.474 5.858s-.942-5.499 1.297-7.532c2.12-2.152 8.247-5.499 10.957-.119 2.709 5.26 1.767 5.619 1.885 7.412 0 1.793-.118 1.913.354 2.869.471.836 1.649 2.63 1.649 2.63s-.589-3.706.354-4.184c1.06-.478 3.417.956 5.302 1.913 2.003.837 6.362.837 6.362.837s1.767 5.379 2.356 8.607c.471 3.109-.353 1.196 2.592.478 2.946-.837 4.949-1.315 4.949-1.315s.236 4.423.118 9.564c0 5.141.353 14.107-2.828 17.813-3.063 3.706-6.127 4.782-6.127 4.782s4.242.957 8.601.717c4.36-.239 11.665-.358 13.903 2.75 2.356 3.108 2.356 6.934 2.356 6.934s-3.063 1.674-5.537 2.63c-2.592.957-5.891 2.032-5.891 2.032s1.649 2.033 2.238 2.63c.59.478 2.357 1.196 2.357 1.196v4.662l-1.414-.119s.589 5.379 1.414 7.053c.707 1.554 1.885 1.435 1.885 1.435l6.48-.718h3.77s-1.06 3.587-2.003 5.5c-1.06 1.912-3.652 7.651-6.362 7.651s-6.952-.12-6.952-.12 4.36 2.75 6.48 3.467c2.121.717 3.417.359 5.067-.239 1.649-.597 3.77-1.554 3.77-1.554s.471 2.272-.589 4.304c-.943 1.913-.943 3.348-.943 3.348v12.429l3.771-1.55s2.003 3.71 2.003 6.46-.472 8.12-.472 10.16c0 2.03-.942 6.57-1.06 11.59-.118 4.91 1.06 7.3 2.238 13.51 1.179 6.1 3.417 20.8 1.179 23.08-2.357 2.39-7.894 4.78-9.897 7.65s-3.888 6.33-3.888 6.33 6.598-5.62 11.075-5.38c4.595.36 12.724-.24 13.313 2.99.59 3.35 1.532 10.04-1.531 11.6-3.063 1.55-18.616.6-18.616.6s.354 6.33 3.888 7.17c3.535.96 6.598.48 8.248 4.54 1.649 4.19 1.767 7.18-1.768 7.77-3.652.6-8.836 2.27-10.132 3.83-1.178 1.55-3.652 6.93-3.652 6.93s2.709-3.11 4.594-2.27c1.768.84 5.067 3.11 6.598 5.98 1.532 2.99 2.474 4.06-.118 6.34-2.71 2.39-9.307 3.7-13.077 6.45-3.771 2.87-2.828 5.26-4.124 6.7-1.296 1.43 3.77-4.19 6.48-2.16 2.71 2.16 4.241 1.44 1.178 5.26-3.063 3.83-5.42 4.55-5.42 4.55s.707.71 2.357.95c1.649.24 4.123.48 4.123.48s-.942 2.87-2.238 4.66c-1.297 1.8-5.656 6.34-5.656 6.34s1.414 1.55 3.181 2.39c1.768.72 4.36 1.44 4.36 1.44s-1.06 2.98-2.239 4.78c-1.178 1.91-4.948 5.62-4.948 5.62s1.178.47 2.592 2.27c1.413 1.79 3.063 3.23 4.595 3.47 1.531.11 4.005.59 4.005.59s-1.296 6.46-4.123 9.21c-2.828 2.75-5.891 6.45-5.891 6.45s-2.003-.47-2.474.24c-.471.72-1.061 3.47-2.121 4.43-1.06.95-7.658 6.93-7.658 6.93s-4.124 4.19-4.713 7.05c-.589 2.99-.354 6.22-.354 6.22s4.006-8.96 8.955-9.32c4.83-.36 5.184.36 7.54 1.07 2.356.84 5.302 5.86 5.302 5.86s-6.244 4.9-8.601 8.61c-2.356 3.7-4.241 7.53-4.241 7.53s1.531.48 2.71 1.31c1.178.84 3.063 2.52 3.063 2.52l.118 1.43C196.641 1173.27 0 926.397 0 633.02 0 283.335 279.233 0 623.855 0Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M625.035 1058.86s-29.101-11.36-48.541-18.17c-19.441-6.82-44.301-14.83-47.011-12.8-2.71 1.92-2.238 1.68-3.416 4.19-1.061 2.63-2.592 6.34-2.592 6.34s-8.483-.72-10.369 4.54c-2.002 5.38-2.474 12.31-2.12 25.34.354 13.27 2.12 42.2 4.359 48.18 2.239 6.1 6.716 19.01 12.961 33.72 6.362 14.7 8.601 22.35 10.839 29.52 2.239 7.18 6.834 13.39 10.25 13.27 3.299-.24 36.76-14.46 44.3-19 7.541-4.55 27.688-22.6 35.464-32.52 7.776-9.81 10.015-13.63 10.015-13.63s4.595-.48 8.247-1.32c3.653-.71 14.492-3.46 14.492-3.46s.825 2.51 4.595 1.79c3.652-.72 10.132-2.99 10.132-2.99s5.303 1.2 7.305.72c2.121-.48 7.187-4.07 7.187-4.07s21.208 8.61 32.401 11.6c11.192 3.11 21.796 6.1 30.397 6.81 8.483.84 11.664.84 11.664.84s9.897 1.08 16.26.96c6.362-.12 21.56-1.79 28.983-5.5 7.541-3.83 12.725-5.98 14.256-8.37 1.532-2.39.236-11-2.12-16.86-2.357-5.85-5.184-10.64-10.604-16.49-5.42-5.74-8.601-22.36-10.486-28.82-1.767-6.45-7.07-26.54-12.607-41.6-5.655-15.18-17.908-42.081-21.679-48.059-3.652-6.097-7.54-12.792-13.078-12.433-5.655.478-7.069 4.423-16.141 11.238-8.954 6.814-27.57 21.16-38.762 33.354-11.194 12.07-21.562 22.72-26.039 29.05-4.477 6.46-11.193 16.26-11.193 16.26s-7.069.84-12.488.84c-5.42 0-11.782 1.31-15.671 2.63-3.888 1.31-9.189 4.9-9.189 4.9h-.001Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default React.forwardRef(LogoInline);
