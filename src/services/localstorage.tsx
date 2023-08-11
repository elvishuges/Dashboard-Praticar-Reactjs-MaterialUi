const LocalStorageService = {
  prefix: 'my_project',

  getKeyPrefix(key: string): string {
    return `${this.prefix}_${key}`;
  },

  setItem(key: string, value: any) {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(this.getKeyPrefix(key), serializedValue);
  },

  getItem(key: string): any {
    const serializedValue = localStorage.getItem(this.getKeyPrefix(key));
    return serializedValue ? JSON.parse(serializedValue) : null;
  },

  removeItem(key: string) {
    localStorage.removeItem(this.getKeyPrefix(key));
  },
};

export default LocalStorageService;
