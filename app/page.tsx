import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function MenuPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">メニュー</h1>
        <p className="text-gray-500">利用する機能を選択してください</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* 図書検索 */}
        <Link href="/api/books/search" className="block">
          <Card className="hover:shadow-lg transition-shadow h-full">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-100">
                <img
                  src="/images/search.png"
                  alt="図書検索"
                  className="h-6 w-6"
                />
              </div>

              <div>
                <CardTitle>図書検索</CardTitle>
                <CardDescription>
                  書籍名のキーワードで書籍を検索します
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </Link>

        {/* 図書登録 */}
        <Link href="/api/books/register" className="block">
          <Card className="hover:shadow-lg transition-shadow h-full">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-100">
                <img
                  src="/images/register.png"
                  alt="図書登録"
                  className="h-6 w-6"
                />
              </div>

              <div>
                <CardTitle>図書登録</CardTitle>
                <CardDescription>
                  新しい図書を蔵書に登録します
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </Link>

        {/* 図書変更 */}
        <Link href="/api/books/update" className="block">
          <Card className="hover:shadow-lg transition-shadow h-full">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-100">
                <img
                  src="/images/update.png"
                  alt="図書変更"
                  className="h-6 w-6"
                />
              </div>

              <div>
                <CardTitle>図書変更</CardTitle>
                <CardDescription>
                  登録済みの図書情報を変更します
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </Link>

        {/* 図書削除 */}
        <Link href="/api/books/delete" className="block">
          <Card className="hover:shadow-lg transition-shadow h-full">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-red-100">
                <img
                  src="/images/delete.png"
                  alt="図書削除"
                  className="h-6 w-6"
                />
              </div>

              <div>
                <CardTitle>図書削除</CardTitle>
                <CardDescription>
                  登録済みの図書情報を削除します
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  );
}