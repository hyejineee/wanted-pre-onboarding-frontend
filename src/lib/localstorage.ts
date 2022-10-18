interface ISaveParams {
  key: string;
  value: any;
}

export const saveToLocal = ({ key, value }: ISaveParams) => {
  if (!value) return;
  if (typeof value !== "string") {
    localStorage.setItem(key, JSON.stringify(value));
    return;
  }
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocal = (key: string) => {
  const result = localStorage.getItem(key);
  return result ? JSON.parse(result) : null;
};
