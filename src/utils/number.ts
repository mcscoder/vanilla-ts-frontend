// example: 12412 => 20000
export const roundToNearest = (number: number) => {
  const power = Math.pow(10, Math.floor(Math.log10(number)));
  return Math.ceil(number / power) * power;
};

export const creditCardFormat = (number: string) => {
  const formatNumber = `${number.slice(0, -4).replace(/\d/g, "*")}${number.slice(-4)}`;
  let result = "";
  let index = formatNumber.length;
  while (index > 0) {
    const [left, right] = [Math.max(index - 4, 0), index];
    result += formatNumber.slice(left, right);
    result += " ";
    index = left;
  }
  return result.split("").reverse().join("");
};

export const handleNumberInput = (e: Event) => {
  const regex = /\D/g;
  const target = e.target as HTMLInputElement;
  target.value = target.value.replace(regex, "");
};
