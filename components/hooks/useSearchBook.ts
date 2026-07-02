import { container } from "@/di/container";
import { TYPES } from "@/di/types";
import { ISearchBookService } from "@/interfaces/ISearchBookService";
import { Book } from "@/models/Book";
import { useState } from "react";
/**
 * 演習 6-3 Reactコンポーネントを実装してUIを確認する
 * 商品検索のState(状態)と操作を提供するカスタムフック
 */
export const useSearchBook = () => {
    // 状態(State)の定義
    // 検索結果の商品データを配列として保持するState
    const [books, setBooks] = useState<Book[]>([]);
    // 検索処理中(通信中)であるかを判定するためのフラグState
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // DIコンテナからユースケース(Service)を取得する
    const searchService = container.get<ISearchBookService>(TYPES.ISearchBookService);

    // UIから呼び出される実行関数
    const search = async (keyword: string) => {
        // 処理開始時にローディング状態をオンにする(UI側でボタンを無効化するなどの制御に使用)
        setIsLoading(true);
        try {
            // Serviceを呼び出してデータを取得する
            const result = await searchService.execute(keyword);
            // 取得したデータをStateに保存(これにより画面が再描画される)
            setBooks(result);
        } catch (error) {
            // 検索処理中に例外が発生した場合は、エラー内容をコンソールに出力する
            console.error("検索中にエラーが発生しました", error);
        } finally {
            // 処理の成功・失敗に関わらず、必ずローディング状態をオフに戻す
            setIsLoading(false);
        }
    };

    // UI層に対して、State(データ)と関数を公開する
    return {
        books,   // コンポーネント側で表示するための商品リスト
        isLoading,  // コンポーネント側でローディング表示を切り替えるための状態
        search      // コンポーネント側で検索処理を実行するための関数
    };
};