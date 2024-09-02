import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faCircleXmark,
  faCircleCheck,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import "./Toast.css";
import "./paradise-mud-toast-dark.css";
import "./paradise-mud-toast-light.css";

const iconMap = {
  success: faCircleCheck,
  error: faCircleXmark,
  warning: faCircleExclamation,
  info: faCircleInfo,
};

const Toast = ({ type, message, onClose, theme, duration }) => {
  const [progress, setProgress] = useState(100); // Başlangıçta çubuk tam dolu

  useEffect(() => {
    if (duration) {
      const interval = setInterval(() => {
        setProgress((prev) => prev - 100 / (duration / 100)); // Her 100 ms'de %1 azalma
      }, 100);

      const timeout = setTimeout(() => {
        clearInterval(interval);
        onClose();
      }, duration);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [duration, onClose]);

  return (
    <div className={`paradise-mud-toast ${type} ${theme}`}>
      <FontAwesomeIcon
        className={`paradise-mud-toast-icon ${theme} paradise-mud-toast-icon-${type}`}
        icon={iconMap[type]}
      />
      <div className={`paradise-mud-toast-content ${theme}`}>{message}</div>
      <button className={`paradise-mud-toast-close ${theme}`} onClick={onClose}>
        &times;
      </button>
      {duration !== undefined && (
        <div className={`paradise-mud-toast-progress paradise-mud-toast-progress-${type} ${theme}`}>
          <div
            className={`paradise-mud-toast-progress-bar paradise-mud-toast-progress-bar-${type} ${theme}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default Toast;
