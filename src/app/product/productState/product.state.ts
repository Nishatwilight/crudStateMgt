export interface Item {
    id: string;
    name: string;
    description: string;
  }
  
  export interface Db  {
    items: Item[];
  
  }
  
  export const productInitialState: Db = {
    items: [],
  
     };
  
