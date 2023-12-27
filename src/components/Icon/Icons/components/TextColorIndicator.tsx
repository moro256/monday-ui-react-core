/* eslint-disable */
/* tslint:disable */
import * as React from "react";
export interface TextColorIndicatorProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}
const TextColorIndicator: React.FC<TextColorIndicatorProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={size || "20"} height={size || "20"} {...props}>
    <path d="M9.99989 6.26241L14.1665 15.2527C14.3565 15.6627 14.8428 15.841 15.2528 15.651C15.6627 15.461 15.8411 14.9746 15.6511 14.5647L11.2438 5.055L11.2432 5.05381C11.1305 4.80948 10.9475 4.61133 10.7268 4.47639C10.5062 4.34153 10.2536 4.27279 9.99989 4.27279C9.74616 4.27279 9.49354 4.34153 9.27298 4.47639C9.05229 4.61133 8.8693 4.80948 8.75654 5.0538L8.75599 5.055L4.34871 14.5647C4.15871 14.9746 4.33703 15.461 4.74699 15.651C5.15695 15.841 5.64332 15.6627 5.83331 15.2527L9.99989 6.26241Z" />
    <path d="M9.13082 4.24377C9.39525 4.08208 9.69729 4.00012 10 4.00012C10.3027 4.00012 10.6047 4.08208 10.8692 4.24377C11.1337 4.40553 11.3545 4.64392 11.4909 4.9395M11.4909 4.9395L15.8986 14.45C16.1519 14.9967 15.9142 15.6451 15.3676 15.8985C14.821 16.1518 14.1725 15.914 13.9191 15.3674L10 6.91102L6.08086 15.3674C5.82753 15.914 5.17904 16.1518 4.63243 15.8985C4.08581 15.6451 3.84806 14.9967 4.10139 14.45L8.50839 4.94097L8.50903 4.93957C8.64546 4.64396 8.86624 4.40554 9.13082 4.24377M10 4.54555C9.79525 4.54555 9.59205 4.60106 9.41535 4.7091C9.23855 4.81721 9.09336 4.97508 9.00427 5.16813L9.00381 5.16913L4.59626 14.6794C4.46959 14.9527 4.58847 15.2769 4.86178 15.4036C5.13508 15.5303 5.45933 15.4114 5.58599 15.1381L9.75257 6.14778C9.79723 6.05141 9.89378 5.98974 10 5.98974C10.1062 5.98974 10.2028 6.05141 10.2474 6.14778L14.414 15.1381C14.5407 15.4114 14.8649 15.5303 15.1382 15.4036C15.4115 15.2769 15.5304 14.9527 15.4037 14.6794L10.9965 5.16972L10.9958 5.16821C10.9067 4.97516 10.7614 4.81721 10.5847 4.7091C10.4079 4.60106 10.2047 4.54555 10 4.54555ZM9.64284 5.49179C9.7795 5.42846 9.94162 5.4879 10.0049 5.62455L10.0057 5.62617C10.069 5.76282 10.0096 5.92494 9.87293 5.98828C9.73627 6.05161 9.57415 5.99216 9.51082 5.85551L9.51007 5.85389C9.44674 5.71724 9.50619 5.55512 9.64284 5.49179Z" />
    <path d="M5.9089 11.6362C5.9089 11.1843 6.2752 10.818 6.72705 10.818H13.2722C13.7241 10.818 14.0904 11.1843 14.0904 11.6362C14.0904 12.088 13.7241 12.4543 13.2722 12.4543H6.72705C6.2752 12.4543 5.9089 12.088 5.9089 11.6362Z" />
    <path d="M5.63623 11.6361C5.63623 11.0336 6.12463 10.5453 6.72709 10.5453H13.2723C13.8747 10.5453 14.3631 11.0336 14.3631 11.6361C14.3631 12.2386 13.8747 12.727 13.2723 12.727H6.72709C6.12463 12.727 5.63623 12.2386 5.63623 11.6361ZM6.72709 11.0907C6.42586 11.0907 6.18166 11.3349 6.18166 11.6361C6.18166 11.9373 6.42586 12.1815 6.72709 12.1815H13.2723C13.5735 12.1815 13.8177 11.9373 13.8177 11.6361C13.8177 11.3349 13.5735 11.0907 13.2723 11.0907H6.72709Z" />
  </svg>
);
TextColorIndicator.displayName = "TextColorIndicator";
export default TextColorIndicator;
/* tslint:enable */
/* eslint-enable */
