export default function validate(values, login) {
  let errors = {};
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  }

  if (!login) {
    if (!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length < 2) {
      errors.name = "Name must be 2 or more characters";
    }
    if (!values.surname) {
      errors.surname = "Surname is required";
    } else if (values.surname.length < 2) {
      errors.surname = "Surname must be 2 or more characters";
    }
  }

  return errors;
}
