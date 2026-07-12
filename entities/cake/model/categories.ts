export interface CakeCategory {
    id: string;
    name: string;
  }
  
  export const categories: CakeCategory[] = [
    {
      id: "birthday",
      name: "Святкові",
    },
    {
      id: "wedding",
      name: "Весільні",
    },
    {
      id: "kids",
      name: "Дитячі",
    },
  ];