export interface Component {
  _id: string;
  name: string;
  description: string;
  price: string;
  vendor?: string;
  sold_out?: string;
  image_url: string;
  category: string;
  source?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ComponentResponse {
  success: boolean;
  message: string;
  components?: Component[];
}
