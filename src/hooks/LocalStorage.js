export const getItemLS = (item) => localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : [];

export const addItemLS = async (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const addUser = (values, login) => {
    if (!values.remember && !login) values = { ...values, remember: false }
    console.log(values)
}