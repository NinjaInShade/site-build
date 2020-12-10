export function min_length(string, min_length) {
  // Returns true if is the minimum length

  if (string.length >= min_length) {
    return true;
  }

  return false;
}

export function is_email(string) {
  // Returns true if is an email

  const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(string).toLowerCase());
}
