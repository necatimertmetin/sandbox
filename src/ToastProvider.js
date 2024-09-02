import React, { createContext, useContext } from 'react';
import useToast from './useToast';
import Toast from './Toast';

const ToastContext = createContext();

export const ToastProvider = ({ children, theme = 'light', duration }) => {
  const { toasts, removeToast, toastMethods } = useToast(duration);

  return (
    <ToastContext.Provider value={toastMethods}>
      {children}
      <div className={`paradise-mud-toast-container ${theme}`}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            type={toast.type}
            message={toast.message}
            onClose={() => removeToast(toast.id)}
            theme={theme}
            duration={toast.duration}  // `duration` değerini Toast bileşenine geçirin
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToastContext = () => useContext(ToastContext);
