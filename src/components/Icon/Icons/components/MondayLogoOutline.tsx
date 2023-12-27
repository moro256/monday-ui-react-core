/* eslint-disable */
/* tslint:disable */
import * as React from "react";
export interface MondayLogoOutlineProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}
const MondayLogoOutline: React.FC<MondayLogoOutlineProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={size || "20"} height={size || "20"} {...props}>
    <path
      d="M1.69442 10.4061L1.69451 10.4059L4.38975 5.93706C4.93453 4.99546 5.94717 4.40133 7.05929 4.433C8.17836 4.46486 9.16078 5.12339 9.65006 6.10219C9.70911 6.2203 9.76012 6.34127 9.80314 6.46429L10.1073 5.96014C10.6455 5.00998 11.6587 4.40587 12.7758 4.43265C13.9038 4.4597 14.8952 5.12409 15.3839 6.11294C15.8648 7.08574 15.8019 8.24831 15.2144 9.16232L15.1663 9.24201C15.3193 9.21735 15.4764 9.20453 15.6364 9.20453C17.2556 9.20453 18.5682 10.5171 18.5682 12.1363C18.5682 13.7555 17.2556 15.0682 15.6364 15.0682C14.3437 15.0682 13.2464 14.2315 12.8564 13.0702L12.5292 13.6125L12.5291 13.6127L12.529 13.6129C11.9929 14.5015 11.0349 15.0675 9.97625 15.0682L9.97526 13.5682L9.97381 15.0682C8.85527 15.0671 7.85551 14.4364 7.34084 13.4707C7.26674 13.3316 7.20399 13.1883 7.15258 13.0419L6.80991 13.6104L6.80979 13.6106C6.27255 14.502 5.31107 15.0695 4.24899 15.0682L3.15819 13.0774C3.43797 13.3862 3.83147 13.5678 4.25045 13.5682C4.76848 13.569 5.25031 13.2923 5.52512 12.8362L8.22697 8.35373C8.52871 7.8813 8.55987 7.27603 8.30836 6.77288C8.05684 6.26973 7.56226 5.94793 7.0166 5.93239C6.47094 5.91686 5.96013 6.21003 5.68245 6.69811L2.97899 11.1806C2.74999 11.5604 2.69208 12.0186 2.80831 12.4389L1.69442 10.4061ZM2.80871 12.4403L1.69442 10.4061C1.13159 11.3395 1.10193 12.5074 1.61366 13.4684C2.12837 14.4349 3.12846 15.0667 4.24811 15.0682L3.1569 13.076L3.15819 13.0774L2.80831 12.4389L2.80871 12.4403ZM2.80871 12.4403L3.1569 13.076C3.07266 12.9828 2.99876 12.8781 2.93763 12.7633C2.88247 12.6597 2.83951 12.5514 2.80871 12.4403ZM9.97526 13.5682C9.43022 13.5676 8.92838 13.2602 8.66459 12.7652C8.4008 12.2702 8.4166 11.6657 8.70588 11.1863L11.4041 6.71443C11.6774 6.21923 12.19 5.91904 12.7398 5.93222C13.2896 5.9454 13.7883 6.26985 14.0393 6.77762C14.2902 7.2854 14.2533 7.89502 13.9429 8.36611L11.2446 12.838C10.9709 13.2919 10.4913 13.5678 9.97526 13.5682ZM15.6364 13.5682C16.4271 13.5682 17.0682 12.9271 17.0682 12.1363C17.0682 11.3456 16.4271 10.7045 15.6364 10.7045C14.8456 10.7045 14.2045 11.3456 14.2045 12.1363C14.2045 12.9271 14.8456 13.5682 15.6364 13.5682Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);
MondayLogoOutline.displayName = "MondayLogoOutline";
export default MondayLogoOutline;
/* tslint:enable */
/* eslint-enable */
