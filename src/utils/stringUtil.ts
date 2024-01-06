export function toParams<P extends Object>(json?: P): string {
  let output = '';
  if (!json) {
    return output;
  }
  for (const key in json) {
    if (json[key] && json.hasOwnProperty(key)) {
      if (!output) {
        output += `?${key}=${json[key]}`;
      } else {
        output += `&${key}=${json[key]}`;
      }
    }
  }
  return output;
}

export const formattedNumber = (numberToFormat: number) =>{
  return numberToFormat.toLocaleString('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}