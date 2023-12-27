/* eslint-disable */
/* tslint:disable */
import * as React from "react";
export interface FeedbackProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}
const Feedback: React.FC<FeedbackProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={size || "20"} height={size || "20"} {...props}>
    <path
      d="M13.6787 2.81141C12.6 2.27571 11.4118 1.99795 10.2076 2.00001C8.82154 1.99824 7.46024 2.36762 6.26487 3.06986C5.06913 3.77232 4.08301 4.78224 3.40884 5.99482C2.73467 7.20739 2.39702 8.57845 2.43092 9.9657C2.46129 11.2085 2.78887 12.4237 3.38348 13.5103L2.13059 16.1439C1.60692 17.2446 2.75507 18.3935 3.8548 17.8692L6.48564 16.6149C7.41302 17.123 8.43558 17.4373 9.49117 17.5368C10.6905 17.6499 11.8996 17.4827 13.0234 17.0484C14.1471 16.614 15.1547 15.9245 15.9667 15.034C16.7788 14.1435 17.3731 13.0764 17.7029 11.9168C18.0326 10.7572 18.0888 9.53685 17.867 8.35185C17.6451 7.16685 17.1514 6.0496 16.4245 5.08814C15.6977 4.12669 14.7578 3.34731 13.6787 2.81141ZM10.2092 3.55355C11.1735 3.55174 12.125 3.77408 12.9887 4.20304C13.8525 4.632 14.6049 5.25587 15.1867 6.02547C15.7684 6.79508 16.1637 7.68939 16.3413 8.63794C16.5188 9.58648 16.4739 10.5633 16.2099 11.4915C15.946 12.4197 15.4702 13.2739 14.8202 13.9867C14.1702 14.6995 13.3637 15.2515 12.4642 15.5992C11.5647 15.9468 10.5968 16.0807 9.63678 15.9901C8.67679 15.8996 7.75091 15.5872 6.93213 15.0775C6.70752 14.9377 6.42723 14.922 6.18843 15.0358L3.84556 16.1528L4.96133 13.8075C5.07505 13.5685 5.05929 13.2879 4.91952 13.0631C4.33329 12.1204 4.00983 11.0378 3.9827 9.92771C3.95557 8.81763 4.22576 7.72051 4.76524 6.7502C5.30471 5.77989 6.09381 4.97175 7.05064 4.40964C8.00747 3.84754 9.09717 3.55195 10.2067 3.55355L10.2092 3.55355ZM8.52778 6.25C7.73406 6.25 7.0726 6.56336 6.62326 7.1071C6.18852 7.63317 6 8.31485 6 8.99682C6 9.81586 6.37377 10.5433 6.94786 11.0391L9.50267 13.4541C9.70771 13.648 9.97723 13.75 10.25 13.75C10.5228 13.75 10.7923 13.648 10.9974 13.4541L13.5527 11.0386C14.1265 10.5429 14.5 9.81561 14.5 8.99682C14.5 8.34659 14.3546 7.66909 13.9543 7.13505C13.5306 6.56971 12.8834 6.25 12.0833 6.25C11.5338 6.25 10.9995 6.47399 10.6238 6.67457C10.4982 6.7416 10.3783 6.81261 10.268 6.8833C10.1731 6.81772 10.0696 6.75121 9.95944 6.68734C9.60122 6.47969 9.08764 6.25 8.52778 6.25ZM7.5 8.99682C7.5 8.57599 7.61705 8.25925 7.77954 8.06262C7.92743 7.88365 8.15486 7.75 8.52778 7.75C8.70082 7.75 8.9408 7.83066 9.20716 7.98506C9.46185 8.1327 9.66288 8.30225 9.73432 8.37037C10.0223 8.64493 10.4745 8.64687 10.7648 8.37481C10.8184 8.32449 11.0375 8.15407 11.3302 7.99783C11.6327 7.83635 11.9037 7.75 12.0833 7.75C12.4499 7.75 12.6361 7.87729 12.754 8.03467C12.8954 8.22333 13 8.54424 13 8.99682C13 9.34907 12.8396 9.67594 12.5645 9.91005C12.5546 9.9185 12.5448 9.92721 12.5354 9.93617L10.25 12.0965L7.96509 9.93656C7.95556 9.92755 7.94579 9.91879 7.9358 9.91029C7.66055 9.67617 7.5 9.34919 7.5 8.99682Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);
Feedback.displayName = "Feedback";
export default Feedback;
/* tslint:enable */
/* eslint-enable */
