/* eslint-disable */
/* tslint:disable */
import * as React from "react";
export interface LearnMoreProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}
const LearnMore: React.FC<LearnMoreProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={size || "16"} height={size || "16"} {...props}>
    <path
      d="M8.09266 5.0028C7.84548 4.98784 7.60183 5.03316 7.3902 5.12898 7.17876 5.22472 7.01513 5.36333 6.90725 5.51843 6.80027 5.67224 6.75004 5.83853 6.75 5.99983 6.74991 6.41404 6.41405 6.74975 5.99984 6.74966 5.58562 6.74957 5.24991 6.41371 5.25 5.9995 5.2501 5.51916 5.40159 5.0562 5.67585 4.66191 5.9492 4.26891 6.33168 3.96167 6.7715 3.76252 7.21114 3.56347 7.69887 3.47623 8.18324 3.50554 8.6676 3.53484 9.1403 3.68022 9.54953 3.93347 9.95917 4.18697 10.2951 4.54279 10.5075 4.97188 10.7206 5.40247 10.797 5.88326 10.7218 6.35797 10.6466 6.83184 10.4257 7.26655 10.0981 7.61789 9.77128 7.96833 9.3506 8.2234 8.88832 8.36641 8.82444 8.38618 8.78559 8.41788 8.76681 8.44112 8.75774 8.45235 8.75368 8.46101 8.75191 8.46591 8.75191 8.5 8.75 8.47488 8.75 8.47488V8.75C8.75 9.16421 8.41421 9.5 8 9.5 7.58579 9.5 7.25 9.16421 7.25 8.75V8.47578C7.24989 8.11427 7.37852 7.77272 7.59989 7.49863 7.81992 7.22621 8.11879 7.03434 8.44501 6.93342 8.67409 6.86255 8.86427 6.74157 9.00107 6.59487 9.13703 6.44908 9.21464 6.28472 9.24028 6.12305 9.26578 5.9622 9.24141 5.79544 9.16311 5.63724 9.08407 5.47753 8.94924 5.32598 8.76018 5.20898 8.57072 5.09174 8.33985 5.01775 8.09266 5.0028zM7.44443 10.753C7.60888 10.6431 7.80222 10.5845 8 10.5845 8.26522 10.5845 8.51957 10.6898 8.70711 10.8774 8.89464 11.0649 9 11.3193 9 11.5845 9 11.7823 8.94135 11.9756 8.83147 12.14 8.72159 12.3045 8.56541 12.4327 8.38268 12.5084 8.19996 12.584 7.99889 12.6038 7.80491 12.5653 7.61093 12.5267 7.43274 12.4314 7.29289 12.2916 7.15304 12.1517 7.0578 11.9735 7.01922 11.7796 6.98063 11.5856 7.00043 11.3845 7.07612 11.2018 7.15181 11.0191 7.27998 10.8629 7.44443 10.753z"
      fill="currentColor"
    />
    <path
      d="M2.36386 2.36386C3.85865 0.869064 5.88603 0.0292969 7.99999 0.0292969C10.1139 0.0292969 12.1413 0.869064 13.6361 2.36386C15.1309 3.85865 15.9707 5.88603 15.9707 7.99999C15.9707 10.1139 15.1309 12.1413 13.6361 13.6361C12.1413 15.1309 10.1139 15.9707 7.99999 15.9707C5.88603 15.9707 3.85865 15.1309 2.36386 13.6361C0.869064 12.1413 0.0292969 10.1139 0.0292969 7.99999C0.0292969 5.88603 0.869064 3.85865 2.36386 2.36386ZM7.99999 1.5293C6.28385 1.5293 4.63801 2.21103 3.42452 3.42452C2.21103 4.63801 1.5293 6.28385 1.5293 7.99999C1.5293 9.71612 2.21103 11.362 3.42452 12.5755C4.63801 13.7889 6.28385 14.4707 7.99999 14.4707C9.71612 14.4707 11.362 13.7889 12.5755 12.5755C13.7889 11.362 14.4707 9.71612 14.4707 7.99999C14.4707 6.28385 13.7889 4.63801 12.5755 3.42452C11.362 2.21103 9.71612 1.5293 7.99999 1.5293Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);
LearnMore.displayName = "LearnMore";
export default LearnMore;
/* tslint:enable */
/* eslint-enable */
