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

export function formatCurrency(amount:number) {
  if (typeof amount !== 'number') {
      return "Invalid input";
  }

  const million = 1000000;
  const billion = 1000000000;
  const millionFormat = ' tr đ';
  const billionFormat = ' tỷ đ';

  if (amount < million) {
      return amount.toLocaleString() + ' đ';
  } else if (amount < billion) {
      const formatted = (amount / million).toFixed(2);
      return formatted.replace(/\.?0*$/, '') + millionFormat;
  } else {
      const formatted = (amount / billion).toFixed(2);
      return formatted.replace(/\.?0*$/, '') + billionFormat;
  }
}