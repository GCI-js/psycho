interface Properties {
  className: string;
}

export default function WelcomeIcon(properties: Properties) {
  console.log("<WelcomeIcon/>");
  return (
    <svg
      width="317"
      height="366"
      viewBox="0 0 317 366"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={properties.className}
    >
      <rect y="41" width="300" height="300" fill="url(#pattern0)" />
      <rect x="26" width="112" height="112" fill="url(#pattern1)" />
      <rect x="161" y="210" width="156" height="156" fill="url(#pattern2)" />
    </svg>
  );
}
