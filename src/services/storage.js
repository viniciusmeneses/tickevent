import AsyncStorage from '@react-native-community/async-storage';

const setItem = async (key, value) => await AsyncStorage.setItem(key, value);
const getItem = async key => await AsyncStorage.getItem(key);
const removeItem = async key => await AsyncStorage.removeItem(key);

export default {
  setItem,
  getItem,
  removeItem,
};
