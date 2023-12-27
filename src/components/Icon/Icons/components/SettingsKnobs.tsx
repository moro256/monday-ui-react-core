/* eslint-disable */
/* tslint:disable */
import * as React from "react";
export interface SettingsKnobsProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}
const SettingsKnobs: React.FC<SettingsKnobsProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={size || "20"} height={size || "20"} {...props}>
    <path
      d="M3.52274 2.2153C3.81584 2.09389 4.12998 2.0314 4.44723 2.0314C4.76449 2.0314 5.07863 2.09389 5.37173 2.2153C5.66483 2.3367 5.93115 2.51465 6.15548 2.73898C6.37982 2.96331 6.55776 3.22963 6.67917 3.52274C6.70295 3.58014 6.72446 3.63834 6.74369 3.69722H17.2186C17.6328 3.69722 17.9686 4.03301 17.9686 4.44722C17.9686 4.86144 17.6328 5.19722 17.2186 5.19722H6.7437C6.72447 5.25611 6.70295 5.31433 6.67917 5.37173C6.55776 5.66483 6.37982 5.93115 6.15548 6.15548C5.93115 6.37981 5.66483 6.55776 5.37173 6.67917C5.07863 6.80058 4.76448 6.86306 4.44723 6.86306C4.12998 6.86306 3.81584 6.80058 3.52274 6.67917C3.22963 6.55776 2.96331 6.37981 2.73898 6.15548C2.51465 5.93115 2.3367 5.66483 2.2153 5.37173C2.09389 5.07863 2.0314 4.76449 2.0314 4.44723C2.0314 4.12998 2.09389 3.81584 2.2153 3.52274C2.3367 3.22963 2.51465 2.96331 2.73898 2.73898C2.96331 2.51465 3.22963 2.3367 3.52274 2.2153ZM4.44723 3.5314C4.32697 3.5314 4.20787 3.55509 4.09676 3.60112C3.98565 3.64714 3.88469 3.7146 3.79964 3.79964C3.7146 3.88469 3.64714 3.98565 3.60112 4.09676C3.55509 4.20787 3.5314 4.32697 3.5314 4.44723C3.5314 4.5675 3.55509 4.68659 3.60112 4.79771C3.64714 4.90882 3.7146 5.00978 3.79964 5.09482C3.88469 5.17987 3.98565 5.24733 4.09676 5.29335C4.20787 5.33938 4.32696 5.36306 4.44723 5.36306C4.5675 5.36306 4.68659 5.33938 4.79771 5.29335C4.90882 5.24733 5.00978 5.17987 5.09482 5.09482C5.17987 5.00978 5.24733 4.90882 5.29335 4.79771C5.33938 4.68659 5.36307 4.5675 5.36306 4.44723C5.36307 4.32697 5.33938 4.20787 5.29335 4.09676C5.24733 3.98565 5.17987 3.88469 5.09482 3.79964C5.00978 3.7146 4.90882 3.64714 4.79771 3.60112C4.68659 3.55509 4.5675 3.5314 4.44723 3.5314ZM10 7.58417C9.68275 7.58417 9.3686 7.64666 9.0755 7.76806C8.7824 7.88947 8.51608 8.06742 8.29175 8.29175C8.06742 8.51608 7.88947 8.7824 7.76806 9.0755C7.74428 9.13291 7.72277 9.19112 7.70354 9.25001H2.7814C2.36719 9.25001 2.0314 9.58579 2.0314 10C2.0314 10.4142 2.36719 10.75 2.7814 10.75H7.70354C7.72277 10.8089 7.74429 10.8671 7.76806 10.9245C7.88947 11.2176 8.06742 11.4839 8.29175 11.7083C8.51608 11.9326 8.7824 12.1105 9.0755 12.2319C9.3686 12.3533 9.68275 12.4158 10 12.4158C10.3173 12.4158 10.6314 12.3533 10.9245 12.2319C11.2176 12.1105 11.4839 11.9326 11.7083 11.7083C11.9326 11.4839 12.1105 11.2176 12.2319 10.9245C12.2557 10.8671 12.2772 10.8089 12.2965 10.75H17.2186C17.6328 10.75 17.9686 10.4142 17.9686 10C17.9686 9.58579 17.6328 9.25001 17.2186 9.25001H12.2965C12.2772 9.19112 12.2557 9.13291 12.2319 9.0755C12.1105 8.7824 11.9326 8.51608 11.7083 8.29175C11.4839 8.06742 11.2176 7.88947 10.9245 7.76806C10.6314 7.64666 10.3173 7.58417 10 7.58417ZM10.9158 9.99874C10.9157 9.8789 10.892 9.76025 10.8461 9.64953C10.8001 9.53841 10.7326 9.43745 10.6476 9.35241C10.5625 9.26737 10.4616 9.19991 10.3505 9.15388C10.2394 9.10786 10.1203 9.08417 10 9.08417C9.87973 9.08417 9.76064 9.10786 9.64953 9.15388C9.53841 9.19991 9.43745 9.26737 9.35241 9.35241C9.26737 9.43745 9.19991 9.53841 9.15388 9.64953C9.1081 9.76006 9.08442 9.87848 9.08417 9.99811L9.08417 10L9.08417 10.0019C9.08442 10.1215 9.1081 10.2399 9.15388 10.3505C9.19991 10.4616 9.26737 10.5625 9.35241 10.6476C9.43745 10.7326 9.53841 10.8001 9.64953 10.8461C9.76064 10.8921 9.87973 10.9158 10 10.9158C10.1203 10.9158 10.2394 10.8921 10.3505 10.8461C10.4616 10.8001 10.5625 10.7326 10.6476 10.6476C10.7326 10.5625 10.8001 10.4616 10.8461 10.3505C10.8921 10.2394 10.9158 10.1203 10.9158 10L10.9158 9.99874ZM13.8445 13.8445C14.2976 13.3915 14.9121 13.137 15.5528 13.137C16.1935 13.137 16.808 13.3915 17.261 13.8445C17.7141 14.2976 17.9686 14.9121 17.9686 15.5528C17.9686 16.1935 17.7141 16.808 17.261 17.261C16.808 17.7141 16.1935 17.9686 15.5528 17.9686C14.9121 17.9686 14.2976 17.7141 13.8445 17.261C13.5733 16.9898 13.3732 16.6607 13.2563 16.3028H2.7814C2.36719 16.3028 2.0314 15.967 2.0314 15.5528C2.0314 15.1386 2.36719 14.8028 2.7814 14.8028H13.2563C13.3732 14.4448 13.5733 14.1158 13.8445 13.8445ZM15.5528 14.637C15.3099 14.637 15.0769 14.7334 14.9052 14.9052C14.7334 15.0769 14.637 15.3099 14.637 15.5528C14.637 15.7957 14.7334 16.0286 14.9052 16.2004C15.0769 16.3721 15.3099 16.4686 15.5528 16.4686C15.7957 16.4686 16.0286 16.3721 16.2004 16.2004C16.3721 16.0286 16.4686 15.7957 16.4686 15.5528C16.4686 15.3099 16.3721 15.0769 16.2004 14.9052C16.0286 14.7334 15.7957 14.637 15.5528 14.637Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);
SettingsKnobs.displayName = "SettingsKnobs";
export default SettingsKnobs;
/* tslint:enable */
/* eslint-enable */
