/* eslint-disable */
/* tslint:disable */
import * as React from "react";
export interface VersioningProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
}
const Versioning: React.FC<VersioningProps> = ({ size, ...props }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={size || "20"} height={size || "20"} {...props}>
    <path
      d="M12.5051 4.00447C9.47167 2.73636 6.02262 3.94066 4.40085 6.69696L5.98776 6.69306C6.40198 6.69205 6.73859 7.02701 6.7396 7.44122C6.74062 7.85543 6.40566 8.19204 5.99144 8.19306L2.75977 8.20099C2.34556 8.20201 2.00895 7.86704 2.00793 7.45283L2 4.22157C1.99899 3.80736 2.33395 3.47075 2.74816 3.46973C3.16237 3.46871 3.49898 3.80367 3.5 4.21789L3.50273 5.32956C5.62613 2.37086 9.58018 1.15592 13.0836 2.62053C17.1591 4.32428 19.0817 9.00891 17.3776 13.084C15.6736 17.1591 10.9885 19.0812 6.91306 17.3775C4.50207 16.3696 2.8448 14.3177 2.24608 11.9692C2.14376 11.5678 2.38618 11.1595 2.78756 11.0572C3.18893 10.9549 3.59726 11.1973 3.69959 11.5987C4.18694 13.5103 5.53354 15.175 7.49162 15.9936C10.8029 17.3778 14.6094 15.816 15.9938 12.5053C17.3781 9.1947 15.8163 5.38871 12.5051 4.00447ZM9.99511 6.74534C9.99511 6.33113 9.65932 5.99534 9.24511 5.99534C8.8309 5.99534 8.49511 6.33113 8.49511 6.74534V10.612C8.49511 11.0262 8.8309 11.362 9.24511 11.362H12.1451C12.5593 11.362 12.8951 11.0262 12.8951 10.612C12.8951 10.1978 12.5593 9.86201 12.1451 9.86201H9.99511V6.74534Z"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);
Versioning.displayName = "Versioning";
export default Versioning;
/* tslint:enable */
/* eslint-enable */
