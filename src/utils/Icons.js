import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const Star = <FontAwesomeIcon icon={faStar} />;
export const Reply = <FontAwesomeIcon icon={faReply} />;
export const Ellipsis = <FontAwesomeIcon icon={faEllipsis} />;
export const Xmark = <FontAwesomeIcon icon={faXmark} />;
export const Messages = (
  <svg
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.375 6.875C11.375 7.36719 11.1836 7.77734 10.8555 8.10547C10.5 8.46094 10.0898 8.625 9.625 8.625H4.42969L2.16016 10.3203C2.07812 10.4023 1.99609 10.4023 1.88672 10.3477C1.77734 10.293 1.75 10.2109 1.75 10.1016V8.625C1.25781 8.625 0.847656 8.46094 0.519531 8.10547C0.164062 7.77734 0 7.36719 0 6.875V2.5C0 2.03516 0.164062 1.625 0.519531 1.26953C0.847656 0.941406 1.25781 0.75 1.75 0.75H9.625C10.0898 0.75 10.5 0.941406 10.8555 1.26953C11.1836 1.625 11.375 2.03516 11.375 2.5V6.875ZM14 5.125C14.4648 5.125 14.875 5.31641 15.2305 5.64453C15.5586 6 15.75 6.41016 15.75 6.875V11.25C15.75 11.7422 15.5586 12.1523 15.2305 12.4805C14.875 12.8359 14.4648 13 14 13H13.125V14.4766C13.125 14.5859 13.0703 14.668 12.9609 14.7227C12.8516 14.7773 12.7695 14.7773 12.7148 14.6953L10.4453 13H7C6.50781 13 6.09766 12.8359 5.76953 12.4805C5.41406 12.1523 5.25 11.7422 5.25 11.25V9.5H9.625C10.3359 9.5 10.9648 9.25391 11.4844 8.73438C11.9766 8.24219 12.25 7.61328 12.25 6.875V5.125H14Z"
      fill="#0057B3"
    />
  </svg>
);
