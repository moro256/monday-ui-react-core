/* eslint-disable */
/* tslint:disable */
import * as React from "react";
export interface PrintProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}
const Print: React.FC<PrintProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={size || "20"} height={size || "20"} {...props}>
    <path
      d="M6.41525 3.72801C6.45803 3.68523 6.51606 3.66119 6.57656 3.66119H13.4234C13.4839 3.66119 13.542 3.68523 13.5847 3.72801C13.6275 3.77079 13.6516 3.82882 13.6516 3.88932V6.07367H6.34843V3.88932C6.34843 3.82882 6.37247 3.77079 6.41525 3.72801ZM4.84843 6.07367V3.88932C4.84843 3.43099 5.0305 2.99144 5.35459 2.66735C5.67868 2.34326 6.11823 2.16119 6.57656 2.16119H13.4234C13.8818 2.16119 14.3213 2.34326 14.6454 2.66735C14.9695 2.99144 15.1516 3.43099 15.1516 3.88932V6.07367H16.3578C16.8161 6.07367 17.2557 6.25574 17.5798 6.57983C17.9039 6.90391 18.0859 7.34347 18.0859 7.80179V12.6924C18.0859 13.1507 17.9039 13.5903 17.5798 13.9144C17.2557 14.2385 16.8161 14.4205 16.3578 14.4205H14.8338V17.0888C14.8338 17.503 14.4981 17.8388 14.0838 17.8388H5.91612C5.50191 17.8388 5.16612 17.503 5.16612 17.0888V14.4205H3.64219C3.18386 14.4205 2.7443 14.2385 2.42022 13.9144C2.09613 13.5903 1.91406 13.1507 1.91406 12.6924V7.80179C1.91406 7.34347 2.09613 6.90391 2.42022 6.57983C2.74431 6.25574 3.18386 6.07367 3.64219 6.07367H4.84843ZM5.59233 7.57367H3.64219C3.58168 7.57367 3.52366 7.5977 3.48088 7.64049C3.4381 7.68327 3.41406 7.74129 3.41406 7.80179V12.6924C3.41406 12.7529 3.4381 12.8109 3.48088 12.8537C3.52366 12.8965 3.58169 12.9205 3.64219 12.9205H5.16612V10.7361C5.16612 10.3219 5.50191 9.98615 5.91612 9.98615H14.0838C14.4981 9.98615 14.8338 10.3219 14.8338 10.7361V12.9205H16.3578C16.4183 12.9205 16.4763 12.8965 16.5191 12.8537C16.5619 12.8109 16.5859 12.7529 16.5859 12.6924V7.80179C16.5859 7.74129 16.5619 7.68327 16.5191 7.64049C16.4763 7.5977 16.4183 7.57367 16.3578 7.57367H14.4077C14.4056 7.57369 14.4036 7.57369 14.4016 7.57369H5.59843C5.5964 7.57369 5.59436 7.57369 5.59233 7.57367ZM6.66612 11.4861V16.3388H13.3338V11.4861H6.66612Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);
Print.displayName = "Print";
export default Print;
/* tslint:enable */
/* eslint-enable */
