export interface IBook {
  id?: string;
  userId?: string;
  title: string;
  authors: string;
  image: string;
  publisher: string;
  categoryId?: string;
  offer?: string;
  interests?: number;
}
