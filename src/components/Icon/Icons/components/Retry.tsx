/* eslint-disable */
/* tslint:disable */
import * as React from "react";
export interface RetryProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}
const Retry: React.FC<RetryProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={size || "20"} height={size || "20"} {...props}>
    <path
      d="M4.64896 6.91492C6.26045 4.1854 9.67945 2.99391 12.6868 4.25113C15.9729 5.62487 17.5229 9.40197 16.149 12.6875C14.7752 15.973 10.9975 17.523 7.7114 16.1492C5.76819 15.3369 4.4318 13.6848 3.94814 11.7877C3.84582 11.3863 3.43749 11.1439 3.03611 11.2462C2.63474 11.3485 2.39231 11.7569 2.49464 12.1582C3.08965 14.4922 4.73671 16.5315 7.13284 17.5332C11.1831 19.2264 15.8394 17.3161 17.5329 13.2662C19.2264 9.21619 17.3157 4.56043 13.2654 2.86719C9.78854 1.41371 5.86517 2.61558 3.75267 5.54681L3.75 4.45782C3.74898 4.04361 3.41237 3.70865 2.99816 3.70967C2.58395 3.71068 2.24899 4.04729 2.25 4.46151L2.25788 7.67079C2.2589 8.085 2.59551 8.41996 3.00972 8.41894L6.2194 8.41107C6.63362 8.41005 6.96858 8.07344 6.96756 7.65923C6.96655 7.24502 6.62994 6.91006 6.21572 6.91107L4.64896 6.91492Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);
Retry.displayName = "Retry";
export default Retry;
/* tslint:enable */
/* eslint-enable */
