/* eslint-disable */
/* tslint:disable */
import * as React from "react";
export interface UserStatusProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}
const UserStatus: React.FC<UserStatusProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={size || "20"} height={size || "20"} {...props}>
    <path
      d="M7.09905 1.9502C6.19525 1.9502 5.32847 2.30923 4.68939 2.94831 4.0503 3.58739 3.69127 4.45417 3.69127 5.35797 3.69127 6.26177 4.0503 7.12855 4.68939 7.76763 4.97027 8.04852 5.29515 8.27531 5.64782 8.4413 5.46833 8.49444 5.29132 8.55761 5.11764 8.63072 4.19271 9.02006 3.4034 9.67392 2.84875 10.5102 2.2941 11.3466 1.99883 12.3281 2 13.3316 2.00049 13.7458 2.33667 14.0812 2.75088 14.0807 3.16509 14.0802 3.50049 13.7441 3.5 13.3299 3.49917 12.6218 3.7075 11.9293 4.09882 11.3393 4.49014 10.7492 5.04703 10.2879 5.69959 10.0132 6.35216 9.73853 7.07132 9.66271 7.76682 9.79527 8.46232 9.92783 9.10317 10.2629 9.60895 10.7583 9.90484 11.0482 10.3797 11.0433 10.6696 10.7474 10.9594 10.4515 10.9545 9.97669 10.6586 9.68682 10.0644 9.10473 9.33868 8.67886 8.54632 8.44316 8.90052 8.27701 9.22677 8.04957 9.50871 7.76763 10.1478 7.12855 10.5068 6.26177 10.5068 5.35797 10.5068 4.45417 10.1478 3.58739 9.50871 2.94831 8.86963 2.30923 8.00285 1.9502 7.09905 1.9502zM5.75005 4.00897C6.10782 3.65119 6.59307 3.4502 7.09905 3.4502 7.60502 3.4502 8.09027 3.65119 8.44805 4.00897 8.80583 4.36675 9.00683 4.852 9.00683 5.35797 9.00683 5.86395 8.80583 6.3492 8.44805 6.70697 8.09027 7.06475 7.60502 7.26575 7.09905 7.26575 6.59307 7.26575 6.10782 7.06475 5.75005 6.70697 5.39227 6.3492 5.19127 5.86395 5.19127 5.35797 5.19127 4.852 5.39227 4.36675 5.75005 4.00897zM8.22515 13.014C7.67193 13.5672 7.36113 14.3175 7.36113 15.0999 7.36113 15.8823 7.67193 16.6326 8.22515 17.1858 8.77838 17.7391 9.52871 18.0499 10.3111 18.0499 11.0935 18.0499 11.8438 17.7391 12.397 17.1858 12.9502 16.6326 13.261 15.8823 13.261 15.0999 13.261 14.5728 13.12 14.0603 12.8588 13.6128L14.2001 12.2714 15.2254 13.2967C15.5183 13.5896 15.9932 13.5896 16.2861 13.2967 16.5789 13.0038 16.579 12.5289 16.2861 12.236L15.2608 11.2107 15.7556 10.7159 16.7809 11.7412C17.0738 12.0341 17.5487 12.0341 17.8416 11.7412 18.1345 11.4483 18.1345 10.9734 17.8416 10.6805L16.286 9.1249C15.9931 8.832 15.5182 8.832 15.2253 9.1249L11.7981 12.5521C11.3506 12.291 10.8381 12.1499 10.3111 12.1499 9.52871 12.1499 8.77838 12.4607 8.22515 13.014zM8.86113 15.0999C8.86113 14.7153 9.01389 14.3465 9.28581 14.0746 9.55773 13.8027 9.92653 13.6499 10.3111 13.6499 10.6956 13.6499 11.0644 13.8027 11.3364 14.0746 11.6083 14.3465 11.761 14.7153 11.761 15.0999 11.761 15.4845 11.6083 15.8533 11.3364 16.1252 11.0644 16.3971 10.6956 16.5499 10.3111 16.5499 9.92653 16.5499 9.55773 16.3971 9.28581 16.1252 9.01389 15.8533 8.86113 15.4845 8.86113 15.0999z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);
UserStatus.displayName = "UserStatus";
export default UserStatus;
/* tslint:enable */
/* eslint-enable */
