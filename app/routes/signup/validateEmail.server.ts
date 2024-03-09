/**
 * This should be re-written.
 * @todo Please write the full function
 * This is a simple example for testing purposes.
 */
export function validate(email: string, password: string) {
  const errors: { email?: string; password?: string } = {};

  if (!email) {
    errors.email = "Email is required.";
  } else if (!email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }

  if (!password) {
    errors.password = "Password is required.";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  return Object.keys(errors).length ? errors : null;
}
