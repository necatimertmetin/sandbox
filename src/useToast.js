import { useState, useCallback, useEffect } from 'react';

const useToast = (defaultDuration) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((type, message, duration = defaultDuration) => {
    const id = Date.now();
    setToasts((prevToasts) => [
      ...prevToasts,
      { type, message, id, duration },
    ]);
  }, [defaultDuration]);

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter(toast => toast.id !== id));
  }, []);

  useEffect(() => {
    const timers = toasts.map((toast) => {
      if (toast.duration) {
        return setTimeout(() => removeToast(toast.id), toast.duration);
      }
      return null;
    });

    return () => timers.forEach(timer => timer && clearTimeout(timer));
  }, [toasts, removeToast]);

  const toastMethods = {
    success: (message, duration) => addToast('success', message, duration),
    error: (message, duration) => addToast('error', message, duration),
    warning: (message, duration) => addToast('warning', message, duration),
    info: (message, duration) => addToast('info', message, duration),
  };

  return { toasts, removeToast, toastMethods };
};

export default useToast;
