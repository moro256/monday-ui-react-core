/* eslint-disable */
/* tslint:disable */
import * as React from "react";
export interface InboxProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}
const Inbox: React.FC<InboxProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={size || "20"} height={size || "20"} {...props}>
    <path
      d="M1.91632 11.0669C1.91632 10.6527 2.25211 10.3169 2.66632 10.3169H7.44893C7.86314 10.3169 8.19893 10.6527 8.19893 11.0669V11.6764C8.19893 11.9011 8.40478 12.1455 8.72429 12.1455H11.5939C11.9134 12.1455 12.1192 11.9011 12.1192 11.6764V11.0669C12.1192 10.6527 12.455 10.3169 12.8692 10.3169H17.333C17.7472 10.3169 18.083 10.6527 18.083 11.0669V13.3336C18.083 14.8523 16.8518 16.0836 15.333 16.0836H4.66632C3.14754 16.0836 1.91632 14.8523 1.91632 13.3336V11.0669ZM3.41632 11.8169V13.3336C3.41632 14.0239 3.97597 14.5836 4.66632 14.5836H15.333C16.0233 14.5836 16.583 14.0239 16.583 13.3336V11.8169H13.6142C13.5391 12.8634 12.6313 13.6455 11.5939 13.6455H8.72429C7.68683 13.6455 6.77904 12.8634 6.70395 11.8169H3.41632Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
    <path
      d="M5.84564 5.41675C5.59751 5.41675 5.37654 5.57371 5.29484 5.808L3.37482 11.3137C3.23843 11.7048 2.8108 11.9113 2.41968 11.7749C2.02857 11.6385 1.82208 11.2109 1.95847 10.8198L3.87849 5.31407C4.17029 4.47733 4.95947 3.91675 5.84564 3.91675H14.1543C15.0405 3.91675 15.8297 4.47733 16.1215 5.31407L18.0415 10.8198C18.1779 11.2109 17.9714 11.6385 17.5803 11.7749C17.1892 11.9113 16.7615 11.7048 16.6251 11.3137L14.7051 5.808C14.6234 5.57371 14.4024 5.41675 14.1543 5.41675H5.84564Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);
Inbox.displayName = "Inbox";
export default Inbox;
/* tslint:enable */
/* eslint-enable */
