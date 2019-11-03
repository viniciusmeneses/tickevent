let toast;

const setToast = toastRef => {
  toast = toastRef;
};

const show = (message, duration = 1200) => toast.show(message, duration);

export default {
  setToast,
  show,
};
