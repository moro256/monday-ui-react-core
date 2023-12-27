/* eslint-disable */
/* tslint:disable */
import * as React from "react";
export interface MondayDocProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}
const MondayDoc: React.FC<MondayDocProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={size || "20"} height={size || "20"} {...props}>
    <path
      d="M16.5537 7.62725C16.5553 7.60733 16.5561 7.58719 16.5561 7.56686C16.5561 7.54653 16.5553 7.5264 16.5537 7.50648V7.483C16.5536 7.02626 16.372 6.58807 16.0492 6.265L12.2387 2.45456C11.9157 2.1317 11.4775 1.95029 11.0208 1.9502H5.12372C4.66667 1.9502 4.22833 2.13176 3.90514 2.45495C3.58196 2.77814 3.40039 3.21647 3.40039 3.67353V16.3269C3.40039 16.7839 3.58196 17.2223 3.90514 17.5454C4.22833 17.8686 4.66667 18.0502 5.12372 18.0502H14.8304C15.2874 18.0502 15.7258 17.8686 16.049 17.5454C16.3722 17.2223 16.5537 16.7839 16.5537 16.3269V7.62725ZM4.9658 3.51561C5.00769 3.47372 5.06449 3.4502 5.12372 3.4502L10.1895 3.50488V6.59353C10.1895 7.05059 10.371 7.48892 10.6942 7.81211C11.0174 8.1353 11.4557 8.31686 11.9128 8.31686H15.0537V16.3269C15.0537 16.3861 15.0302 16.4429 14.9883 16.4848C14.9464 16.5267 14.8896 16.5502 14.8304 16.5502H5.12372C5.06449 16.5502 5.00769 16.5267 4.9658 16.4848C4.92392 16.4429 4.90039 16.3861 4.90039 16.3269V3.67353C4.90039 3.6143 4.92392 3.55749 4.9658 3.51561ZM11.6895 4.02658L14.4797 6.81686H11.9128C11.8536 6.81686 11.7967 6.79333 11.7549 6.75145C11.713 6.70956 11.6895 6.65276 11.6895 6.59353V4.02658ZM6.34008 13.2473C6.49033 13.5118 6.77616 13.6761 7.0866 13.6764C7.38117 13.6768 7.65515 13.5293 7.81142 13.2862L9.34779 10.8966C9.51937 10.6447 9.53708 10.3221 9.39406 10.0538C9.25104 9.78562 8.96981 9.61406 8.65953 9.60578C8.34925 9.5975 8.05878 9.75379 7.90088 10.014L6.3636 12.4036C6.19884 12.6598 6.18984 12.9828 6.34008 13.2473ZM9.52758 13.6764C9.21765 13.6761 8.93229 13.5122 8.78229 13.2483C8.63229 12.9845 8.64128 12.6622 8.80577 12.4066L10.3401 10.0227C10.4955 9.7587 10.787 9.59866 11.0996 9.60569C11.4122 9.61272 11.6958 9.78568 11.8385 10.0564C11.9812 10.3271 11.9602 10.652 11.7837 10.9032L10.2494 13.2871C10.0937 13.5291 9.82103 13.6762 9.52758 13.6764ZM13.1537 12.7941C13.1537 13.2813 12.7588 13.6762 12.2717 13.6762C11.7845 13.6762 11.3896 13.2813 11.3896 12.7941C11.3896 12.307 11.7845 11.9121 12.2717 11.9121C12.7588 11.9121 13.1537 12.307 13.1537 12.7941Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);
MondayDoc.displayName = "MondayDoc";
export default MondayDoc;
/* tslint:enable */
/* eslint-enable */
