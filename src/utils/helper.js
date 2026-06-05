export function trimString(string) {
  return string.trim();
}

export function capitalizedFirstCharacter(string) {
  return string
    .split("")
    .map((char, index) => {
      if (index === 0) {
        char = char.toUpperCase();
        return char;
      }
      return char;
    })
    .join("");
}
