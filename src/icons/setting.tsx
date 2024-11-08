export default function SettingIcon({
  size,
  active = false,
}: {
  size?: number;
  active?: boolean;
}) {
  return (
    <svg
      //   width="21"
      //   height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size ?? 19.98 }}
    >
      <path
        d="M10.2971 13.1196C8.57355 13.1196 7.17471 11.7208 7.17471 9.99721C7.17471 8.27365 8.57355 6.87482 10.2971 6.87482C12.0207 6.87482 13.4195 8.27365 13.4195 9.99721C13.4195 11.7208 12.0207 13.1196 10.2971 13.1196ZM10.2971 8.12378C9.26464 8.12378 8.42367 8.96474 8.42367 9.99721C8.42367 11.0297 9.26464 11.8707 10.2971 11.8707C11.3296 11.8707 12.1705 11.0297 12.1705 9.99721C12.1705 8.96474 11.3296 8.12378 10.2971 8.12378Z"
        fill={active ? "#1FCB4F" : "#A9A9A9"}
      />
      <path
        d="M12.9699 18.4818C12.795 18.4818 12.6202 18.4568 12.4453 18.4152C11.9291 18.2736 11.4961 17.9489 11.2213 17.491L11.1214 17.3244C10.6301 16.4751 9.95571 16.4751 9.46445 17.3244L9.37286 17.4826C9.09809 17.9489 8.66512 18.282 8.14888 18.4152C7.62432 18.5567 7.0831 18.4818 6.62515 18.207L5.19301 17.3827C4.6851 17.0913 4.31874 16.6167 4.16054 16.0422C4.01067 15.4677 4.0856 14.8765 4.37703 14.3686C4.61849 13.9439 4.6851 13.5609 4.54356 13.3194C4.40201 13.078 4.04397 12.9364 3.55272 12.9364C2.33706 12.9364 1.34622 11.9456 1.34622 10.7299V9.26449C1.34622 8.04884 2.33706 7.058 3.55272 7.058C4.04397 7.058 4.40201 6.91645 4.54356 6.67498C4.6851 6.43352 4.62682 6.0505 4.37703 5.62586C4.0856 5.11795 4.01067 4.51845 4.16054 3.95225C4.31042 3.37773 4.67678 2.90313 5.19301 2.61171L6.63348 1.78739C7.57436 1.22953 8.81499 1.55425 9.38119 2.51179L9.4811 2.67832C9.97236 3.52761 10.6468 3.52761 11.1381 2.67832L11.2296 2.52012C11.7958 1.55425 13.0365 1.22953 13.9857 1.79572L15.4178 2.62003C15.9257 2.91146 16.2921 3.38606 16.4503 3.96058C16.6002 4.5351 16.5252 5.12628 16.2338 5.63419C15.9923 6.05883 15.9257 6.44184 16.0673 6.68331C16.2088 6.92478 16.5669 7.06632 17.0581 7.06632C18.2738 7.06632 19.2646 8.05716 19.2646 9.27282V10.7383C19.2646 11.9539 18.2738 12.9448 17.0581 12.9448C16.5669 12.9448 16.2088 13.0863 16.0673 13.3278C15.9257 13.5692 15.984 13.9522 16.2338 14.3769C16.5252 14.8848 16.6085 15.4843 16.4503 16.0505C16.3004 16.625 15.9341 17.0996 15.4178 17.391L13.9774 18.2154C13.661 18.3902 13.3196 18.4818 12.9699 18.4818ZM10.2971 15.401C11.0381 15.401 11.7292 15.8673 12.2038 16.6916L12.2954 16.8498C12.3953 17.0247 12.5619 17.1496 12.7617 17.1995C12.9615 17.2495 13.1614 17.2245 13.3279 17.1246L14.7684 16.292C14.9848 16.1671 15.1514 15.9589 15.218 15.7091C15.2846 15.4593 15.2513 15.2012 15.1264 14.9847C14.6518 14.1687 14.5935 13.3278 14.9599 12.6866C15.3262 12.0455 16.0839 11.6791 17.0331 11.6791C17.566 11.6791 17.9907 11.2545 17.9907 10.7216V9.25616C17.9907 8.7316 17.566 8.29863 17.0331 8.29863C16.0839 8.29863 15.3262 7.93227 14.9599 7.29114C14.5935 6.65 14.6518 5.80904 15.1264 4.99305C15.2513 4.77657 15.2846 4.51845 15.218 4.26866C15.1514 4.01887 14.9932 3.81903 14.7767 3.68581L13.3362 2.8615C12.9782 2.64501 12.5036 2.76991 12.2871 3.13627L12.1955 3.29447C11.7209 4.11878 11.0298 4.58506 10.2888 4.58506C9.54771 4.58506 8.85662 4.11878 8.38202 3.29447L8.29043 3.12794C8.08227 2.77823 7.61599 2.65334 7.25796 2.8615L5.81749 3.69414C5.60101 3.81903 5.43448 4.02719 5.36787 4.27698C5.30126 4.52678 5.33456 4.78489 5.45946 5.00138C5.93406 5.81737 5.99235 6.65833 5.62599 7.29946C5.25962 7.9406 4.50192 8.30696 3.55272 8.30696C3.01983 8.30696 2.59518 8.7316 2.59518 9.26449V10.7299C2.59518 11.2545 3.01983 11.6875 3.55272 11.6875C4.50192 11.6875 5.25962 12.0538 5.62599 12.695C5.99235 13.3361 5.93406 14.1771 5.45946 14.993C5.33456 15.2095 5.30126 15.4677 5.36787 15.7174C5.43448 15.9672 5.59268 16.1671 5.80917 16.3003L7.24963 17.1246C7.42449 17.2328 7.63265 17.2578 7.82415 17.2079C8.02399 17.1579 8.19051 17.0247 8.29876 16.8498L8.39035 16.6916C8.86495 15.8756 9.55604 15.401 10.2971 15.401Z"
        fill={active ? "#1FCB4F" : "#A9A9A9"}
      />
    </svg>
  );
}
