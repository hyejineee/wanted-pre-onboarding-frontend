interface ISaveParams {
  key: string;
  value: any;
}

export const save = ({ key, value }: ISaveParams) => {
  if (typeof value !== "string") {
    localStorage.setItem(key, JSON.stringify(value));
    return;
  }
  localStorage.setItem(key, JSON.stringify(value));
};

export const get = (key: string) => {
  const result = localStorage.getItem(key);
  return result ? JSON.parse(result) : null;
};
