/* eslint-disable */
/* tslint:disable */
import * as React from "react";
export interface MobileProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}
const Mobile: React.FC<MobileProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={size || "20"} height={size || "20"} {...props}>
    <path
      d="M6.13327 4.12101C6.40332 3.89417 6.79359 3.75 7.22222 3.75H12.7778C13.2064 3.75 13.5967 3.89417 13.8667 4.12101C14.1329 4.34459 14.25 4.6169 14.25 4.86667V5.79627V15.1333C14.25 15.3831 14.1329 15.6554 13.8667 15.879C13.5967 16.1058 13.2064 16.25 12.7778 16.25H7.22222C6.79359 16.25 6.40332 16.1058 6.13327 15.879C5.8671 15.6554 5.75 15.3831 5.75 15.1333V4.86667C5.75 4.6169 5.8671 4.3446 6.13327 4.12101ZM7.22222 2.25C6.47212 2.25 5.73192 2.49917 5.16848 2.97246C4.60115 3.44901 4.25 4.12629 4.25 4.86667V15.1333C4.25 15.8737 4.60115 16.551 5.16848 17.0275C5.73192 17.5008 6.47212 17.75 7.22222 17.75H12.7778C13.5279 17.75 14.2681 17.5008 14.8315 17.0275C15.3988 16.551 15.75 15.8737 15.75 15.1333V5.79627V4.86667C15.75 4.12629 15.3988 3.44901 14.8315 2.97246C14.2681 2.49917 13.5279 2.25 12.7778 2.25H7.22222ZM9 13.25C8.58579 13.25 8.25 13.5858 8.25 14C8.25 14.4142 8.58579 14.75 9 14.75H11C11.4142 14.75 11.75 14.4142 11.75 14C11.75 13.5858 11.4142 13.25 11 13.25H9Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);
Mobile.displayName = "Mobile";
export default Mobile;
/* tslint:enable */
/* eslint-enable */
