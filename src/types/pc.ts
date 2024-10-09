export interface PCComponent {
  id: string;
  name: string;
  price: number;
  category: string;
}

export interface PCBuild {
  id: string;
  name: string;
  userId: string;
  totalPrice: number;
  components: {
    [key: string]: PCComponent | null;
  };
}
