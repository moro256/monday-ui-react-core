/* eslint-disable */
/* tslint:disable */
import * as React from "react";
export interface UpgradeProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}
const Upgrade: React.FC<UpgradeProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={size || "20"} height={size || "20"} {...props}>
    <path
      d="M14.75 3.00264C14.7515 2.58847 14.4169 2.25153 14.0028 2.25001C13.5886 2.24848 13.2516 2.58297 13.25 2.99714L13.25 2.99736C13.2468 3.89486 13.0132 4.41296 12.6983 4.71722C12.3773 5.02736 11.8451 5.23834 10.9897 5.25007C10.5775 5.25572 10.2472 5.59294 10.25 6.00514C10.2528 6.41734 10.5878 6.75 11 6.75C11.9477 6.75 12.4599 6.99939 12.75 7.31314C13.0516 7.63937 13.2425 8.1737 13.25 9.00679C13.2537 9.41237 13.5791 9.74154 13.9847 9.74984C14.3902 9.75814 14.7288 9.44256 14.7491 9.03747C14.793 8.15819 15.0247 7.61169 15.3454 7.28482C15.6569 6.96728 16.161 6.74689 16.9972 6.74999C17.4092 6.75152 17.7452 6.4205 17.75 6.00858C17.7547 5.59665 17.4262 5.25803 17.0144 5.25014C16.0893 5.23242 15.5598 4.98898 15.2549 4.67192C14.9479 4.35267 14.7468 3.83248 14.75 3.00287L14.75 3.00264ZM13.7405 5.79598C13.8334 5.70628 13.9192 5.61151 13.9984 5.51191C14.0533 5.58062 14.1118 5.64726 14.1737 5.71168C14.2801 5.82227 14.3939 5.92323 14.5147 6.01495C14.4313 6.08314 14.3513 6.15623 14.2746 6.23438C14.1881 6.32253 14.1078 6.41524 14.0335 6.5122C13.9768 6.43739 13.9161 6.36488 13.8514 6.29486C13.7483 6.18335 13.6378 6.08136 13.5201 5.98862C13.5963 5.92848 13.6698 5.86432 13.7405 5.79598ZM7.75047 7.00301C7.75213 6.58885 7.41777 6.25174 7.00361 6.25001C6.58945 6.24827 6.25228 6.58258 6.25048 6.99674L6.25048 6.99699C6.24492 8.38252 5.84575 9.26312 5.20683 9.81857C4.54704 10.3921 3.50452 10.7312 1.99044 10.7505C1.57795 10.7557 1.24715 11.0931 1.25002 11.5056C1.25289 11.9182 1.58837 12.2509 2.00089 12.2504C3.68571 12.2484 4.70455 12.6519 5.31002 13.2418C5.91319 13.8295 6.23617 14.7292 6.25052 16.0084C6.25506 16.4129 6.57951 16.7409 6.98389 16.7498C7.38828 16.7588 7.72691 16.4454 7.74932 16.0416C7.82436 14.6893 8.22107 13.7753 8.8566 13.1921C9.49569 12.6056 10.4941 12.2453 11.9974 12.2504C12.4092 12.2518 12.7451 11.921 12.7499 11.5093C12.7548 11.0976 12.4269 10.7589 12.0152 10.7506C10.3711 10.7172 9.32959 10.3237 8.70101 9.73587C8.08527 9.16 7.74489 8.28329 7.75047 7.00326L7.75047 7.00301ZM6.19095 10.9506C6.5096 10.6736 6.77732 10.3573 6.99603 10.0046C7.18352 10.3048 7.40925 10.5815 7.67642 10.8314C7.95949 11.0961 8.27931 11.3215 8.63399 11.5094C8.34784 11.6736 8.08354 11.8656 7.84241 12.0869C7.52941 12.3741 7.26663 12.7003 7.05026 13.061C6.8629 12.7366 6.6335 12.4371 6.3568 12.1675C6.08292 11.9006 5.77269 11.6728 5.42693 11.4829C5.70155 11.3309 5.95689 11.1541 6.19095 10.9506Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);
Upgrade.displayName = "Upgrade";
export default Upgrade;
/* tslint:enable */
/* eslint-enable */
