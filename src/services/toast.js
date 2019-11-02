import { DURATION } from 'react-native-easy-toast';

let toast;

const setToast = toastRef => {
  toast = toastRef;
};

const show = (message, duration = DURATION.LENGTH_SHORT) =>
  toast.show(message, duration);

export default {
  setToast,
  show,
};
