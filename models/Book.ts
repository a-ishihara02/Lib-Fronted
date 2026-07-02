import { BookCategory } from "./BookCategory";
import { BookStock } from "./BookStock";

export interface Book {
    title: string;           // 書籍タイトル
    author: string;          // 著者
    categoryId: BookCategory;  // 分類
    stock: BookStock;        // 蔵書数
}