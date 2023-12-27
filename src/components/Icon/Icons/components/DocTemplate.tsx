/* eslint-disable */
/* tslint:disable */
import * as React from "react";
export interface DocTemplateProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}
const DocTemplate: React.FC<DocTemplateProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={size || "20"} height={size || "20"} {...props}>
    <path
      d="M16.4033 7.62725C16.4049 7.60733 16.4057 7.58719 16.4057 7.56686C16.4057 7.54653 16.4049 7.5264 16.4033 7.50648V7.483C16.4032 7.02626 16.2217 6.58807 15.8988 6.265L12.0884 2.45456C11.7653 2.1317 11.3271 1.95029 10.8704 1.9502H4.97333C4.51628 1.9502 4.07794 2.13176 3.75475 2.45495C3.43157 2.77814 3.25 3.21647 3.25 3.67353V16.3269C3.25 16.7839 3.43157 17.2223 3.75475 17.5454C4.07794 17.8686 4.51627 18.0502 4.97333 18.0502H10.6562C10.1983 17.6482 9.82007 17.1365 9.5529 16.5502H4.97333C4.9141 16.5502 4.8573 16.5267 4.81541 16.4848C4.77353 16.4429 4.75 16.3861 4.75 16.3269V3.67353C4.75 3.6143 4.77353 3.55749 4.81541 3.51561C4.8573 3.47372 4.9141 3.4502 4.97333 3.4502L10.0391 3.50488V6.59353C10.0391 7.05059 10.2206 7.48892 10.5438 7.81211C10.867 8.1353 11.3053 8.31686 11.7624 8.31686H14V8.31512H16.4033V7.62725ZM11.5391 4.02658L14.3293 6.81686H11.7624C11.7032 6.81686 11.6464 6.79333 11.6045 6.75145C11.5626 6.70956 11.5391 6.65276 11.5391 6.59353V4.02658ZM5.91895 10.6002C5.91895 10.1859 6.25473 9.85016 6.66895 9.85016H9.90625C10.3205 9.85016 10.6562 10.1859 10.6562 10.6002C10.6562 11.0144 10.3205 11.3502 9.90625 11.3502H6.66895C6.25473 11.3502 5.91895 11.0144 5.91895 10.6002ZM6.6691 13.0502C6.25489 13.0502 5.9191 13.3859 5.9191 13.8002C5.9191 14.2144 6.25489 14.5502 6.6691 14.5502H7.92565C8.33986 14.5502 8.67565 14.2144 8.67565 13.8002C8.67565 13.3859 8.33986 13.0502 7.92565 13.0502H6.6691ZM11.9536 9.03283C11.7622 8.92257 11.5274 9.07972 11.5563 9.29876L11.937 12.1794C11.9485 12.2664 11.9164 12.3534 11.8513 12.4122L9.6941 14.3588C9.53007 14.5069 9.60697 14.7787 9.82424 14.8189L12.6815 15.347C12.7678 15.363 12.8407 15.4204 12.8764 15.5005L14.0612 18.1536C14.1513 18.3554 14.4336 18.3662 14.5389 18.172L15.6202 16.1783L18.0983 19.6015C18.3412 19.9371 18.8101 20.0121 19.1457 19.7692C19.4812 19.5264 19.5563 19.0575 19.3134 18.7219L16.9066 15.3974L19.0197 15.1729C19.2395 15.1496 19.337 14.8844 19.1849 14.7242L17.1837 12.6175C17.1233 12.5539 17.0981 12.4646 17.1162 12.3788L17.7172 9.53597C17.7629 9.3198 17.5409 9.14506 17.3415 9.24027L14.7195 10.4924C14.6404 10.5303 14.5476 10.5267 14.4716 10.4829L11.9536 9.03283Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);
DocTemplate.displayName = "DocTemplate";
export default DocTemplate;
/* tslint:enable */
/* eslint-enable */
