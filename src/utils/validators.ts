export type Validator<T> = (x: T) => string | null;

// the username must contain only letters and numbers
export const validateUsername = (username: string): string | null => {
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  if (!usernameRegex.test(username)) {
    return "Username must contain only letters and numbers!";
  }
  return null;
};

// validate that the password is at least 8 characters long
// and that it contains at least one number and special character
export const validatePassword = (password: string): string | null => {
  if (password.length < 8) {
    return "Password must be at least 8 characters long!";
  }
  const passwordRegex = /(?=.*[0-9])(?=.*[!@#$%^&*])/;
  if (!passwordRegex.test(password)) {
    return "Password must contain at least one number and special character!";
  }
  return null;
};
