このリポジトリはCode Chrysalisの生徒であるときに作成しました。
(This was created during my time as a student at Code Chrysalis）

【当初の目標】
Hot PepperのAPIからデータを取得し、コードクリサリス周辺のカフェ情報をCRUD操作する。
➡ 実際は、自分で作成したcafeの名前とオススメ商品が一覧となっている簡易的なデータベースをCRUD操作した。

【達成したこと】
・postgreSQLデータベースの作成
・expressサーバーの立ち上げ
・エンドポイントの作成
・Knexを用いた、データベースのCRUD操作
・CRUD操作したデータをHTMLに表示 (getメソッドのみ)

【作成したエンドポイント】
・get：cafe_listのデータを取得
・post：cafe_listにデータを追加
・put：idを指定して、cafe_listのデータを更新
・delete：idを指定して、cafe_listのデータを削除