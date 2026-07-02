import { injectable } from "inversify";
import { IBookRepository } from "../interfaces/IBookRepository";
import { Book } from "../models/Book";

@injectable()
export class MockBookRepository implements IBookRepository {

    // テスト用のダミーデータ（モックデータ）を準備
    private readonly mockBooks: Book[] = [
        {

            title: "プログラミング C# 第8版",
            author: "Ian Griffiths",
            categoryId: {
                "categoryId": "18836923-5194-47f1-bf4c-e09eb5fa8fef",
                "name": "技術書"
            },
            stock: {
                "stock": 4
            }
        },
        {
            title: "はらぺこあおむし",
            author: "エリック・カール",
            categoryId: {
                "categoryId": "e269c98c-61b7-4ca7-9fae-ecd74234989e",
                "name": "児童書"
            },
            stock: {
                "stock": 10
            }
        },

        {
            title: "ONE PIECE 第1巻",
            author: "尾田栄一郎",
            categoryId: {
                "categoryId": "51e7f90e-5d61-4546-aa42-e85d98fbe542",
                "name": "漫画"
            },
            stock: {
                "stock": 7
            }
        }
    ];

    /**
     * 指定したキーワードで商品を検索して取得する
     * @param keyword 検索キーワード
     * @returns 検索にヒットした商品のリスト(非同期)
     */
    public async searchKeyword(keyword: string): Promise<Book[]> {
        // キーワードが空の場合は、全件を返す
        if (!keyword) {
            return this.mockBooks;
        }
        // キーワードが商品名(name)に含まれているものをフィルタリングする
        const filteredBooks = this.mockBooks.filter(book =>
            book.title.includes(keyword)
        );
        // asyncメソッドなので、自動的にPromiseでラップされて返却される
        return filteredBooks;
    }
}