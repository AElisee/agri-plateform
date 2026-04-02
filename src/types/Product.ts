export interface Product {
  id: string;
  title: string;
  culture: string;
  hectare: number;
  location: string;
  harvest_date: string;  
  photo?: string;
  is_visible: boolean;
  user_id: string;
  created_at: string;  
}
