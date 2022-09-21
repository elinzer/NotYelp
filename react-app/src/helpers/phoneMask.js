export const returnDigitsOnly = (inputValue) => {
  return inputValue.replace(/[^0-9,.]/g, "");
};

export const maskPhoneNumber = (phoneNumber) => {
  const mask = "(___) ___-____";

  //strip all but integers 0-9 from input
  const digits = returnDigitsOnly(phoneNumber);
  //loop through the mask and replace the _ with the digits
  let i = 0;
  let lastReplacementIndex = 0;
  let formatted = mask.replace(/_/g, (_, j) => {
    //if phone number is shorter than mask, return '_' until mask is filled
    if (i >= digits.length) return "_";

    //update the index of the last replacement so we can return the rest of the string
    lastReplacementIndex = j;

    //return the digit at the current index and increment the index
    return digits[i++];
  });

  //return the formatted phone number
  return digits.length ? formatted.substring(0, lastReplacementIndex + 1) : "";
};
