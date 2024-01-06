import { useState } from 'react'

export const useLoading = () => {
  const [isLoading, setLoading] = useState(false)

  return {
    isLoading,
    setLoading,
  };
};

export const useModal = () => {
  const [isVisible, setVisible] = useState(false)

  const showModal = () => (setVisible(true));

  const hideModal = () => (setVisible(false));

  return {
    isVisible,
    showModal,
    hideModal,
  };
};
