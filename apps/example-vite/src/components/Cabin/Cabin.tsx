import styles from './cabin.module.css';

const Cabin = () => (
  <div className={styles.root}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4em"
      height="3em"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0}
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1200 900"
      preserveAspectRatio="none"
    >
      <g clipPath="url(#a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-13 160.3 92 72.9l316 448.5-46.5 49.5L-13 644.4V997h1225V644.4L835.5 571l-55-49.5L1084 72.9l128 132V-23.4H-13v183.8Zm238-87.4h728L749 508.1H448L225 72.9Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path
            fill="#fff"
            d="M0 0h1200v900H0z"
          />
        </clipPath>
      </defs>
    </svg>
  </div>
);

export default Cabin;
