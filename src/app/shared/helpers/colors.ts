export const textToRGB = (text: string = ""): string => {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }

  const r = (hash >> 16) & 0xff;
  const g = (hash >> 8) & 0xff;
  const b = hash & 0xff;

  return `rgb(${r}, ${g}, ${b})`;
};

export const stringToColor = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const color =
    "#" + ((1 << 24) + (hash & 0xffffff)).toString(16).slice(1).toUpperCase();

  return color;
};

export const getIconName = (name: string) => {
  const nameArray = name.split(" ");
  if (nameArray.length > 1) {
    const value = nameArray[0].charAt(0) + nameArray[1].charAt(0);
    return value.toUpperCase();
  }
  return nameArray[0].charAt(0).toUpperCase();
};
