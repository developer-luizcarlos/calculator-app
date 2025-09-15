export const isEmptyString = (string: string): boolean => {
  return string.trim() === "";
};

export const isLastCharNumber = (expression: string): boolean => {
  if (isEmptyString(expression)) {
    return false;
  }

  const lastChar = expression.at(expression.length - 1) as string;
  return !Number.isNaN(Number(lastChar));
};
