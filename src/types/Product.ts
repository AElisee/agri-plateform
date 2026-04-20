export interface Product {
  id: string;
  title: string;
  culture: string;
  hectare: number;
  location: string;
  havert_date: string;
  photo?: string;
  is_visible: boolean;
  user_id: string;
  created_at: string;
}

export interface ProductWithUser extends Product {
  user?: {
    id: string;
    name: string;
    email: string;
    contact: string;
  };
  likesCount?: number;
}
