var config = {"settings": {"add_css_file":false , "add_js_file":false , "custom_lang":false , "head_write_js":"" , "head_write_css":"" , "format":"table" , "messages":{"intro":"Salesforce 認定デベロッパー 練習問題"}} ,"questions":[
 {"question": "リリース時のカバレッジ（2つ選択）" ,"choice":["トータルでカバー率100％" ,"トータルでカバー率75％" ,"Apexテスト75％成功" ,"Apexテスト100％成功"] ,"answer":[] ,"feedback_tf":["" ,""]}
, {"question": "単体テストで失敗するが、テストコードをコピーして開発者コンソールから匿名実行すると成功した。失敗する原因は何か？" ,"choice":["テストコードにtry/catchが入っている" ,"テストコードに@futureがある" ,"テストコードに構文エラーがある" ,"テストコードが既存のデータに依存している"] ,"answer":["テストコードが既存のデータに依存している"] ,"feedback_tf":["" ,""]}
, {"question": "下記のクエリ（where句とか項目はうろ覚え）で例外が発生する可能性は？（2つ選ぶ）<pre><br>SELECT Name, (SELECT FirstName,LastName FROM Contacts) FROM Account<br></pre>" ,"choice":["SQLの複雑度に関する例外" ,"CPUのなんとかかんとか" ,"Accountの取得行数に関する例外" ,"Contactの取得行数に関する例外"] ,"answer":["Accountの取得行数に関する例外" ,"Contactの取得行数に関する例外"] ,"feedback_tf":["" ,""]}
, {"question": "商談のステータスが更新されたら、取引先を更新した上で商談商品の内容を納品商品？にレコード追加したい（みたいな内容）何を使えば実現できるか？" ,"choice":["ワークフロー" ,"プロセスビルダー" ,"ワークフローとプロセスビルダー" ,"プロセスビルダーからフロー（うろ覚え）"] ,"answer":["プロセスビルダー"] ,"feedback_tf":["" ,""]}
, {"question": "夜間に大量データをアップロードし、そのデータをメアドを元にリードとかと付き合わせてごにょごにょする処理があるが、パフォーマンスを懸念している。何で実現するべきか？" ,"choice":["Apex" ,"プロセスビルダー" ,"ワークフロー" ,"項目自動更新"] ,"answer":["Apex"] ,"feedback_tf":["" ,""]}
, {"question": "拡張コントローラにsave()メソッドが定義されている。実行されるのはどれか？" ,"choice":["拡張コントローラのsave" ,"標準と拡張の両方" ,"標準のsave"] ,"answer":["拡張コントローラのsave"] ,"feedback_tf":["" ,""]}
, {"question": "簡単なテキストを返すLightningコンポーネントを作成した。これを他の複数のApexから使えるようにするにはどうしたら良いか？" ,"choice":["各クラスにgetMessageText()を実装する" ,"インターフェースを継承してgetMessageText()を実装する" ,"getMessageText()を実装したクラスを継承する"] ,"answer":["getMessageText()を実装したクラスを継承する"] ,"feedback_tf":["" ,""]}
, {"question": "子オブジェクトの数量を変更したら、その親オブジェクトで集計結果を簡単に見れるようにしたいみたいな問題。標準オブジェクトの主従か参照かを知っていて、どの方法使うかを選ばせるようなやつ（だと思う）。" ,"choice":["積み上げ集計項目" ,"数式" ,"ワークフロー"] ,"answer":["ワークフロー"] ,"feedback_tf":["" ,""]}
, {"question": "セットを追加する時の注意点は" ,"choice":["equals メソッドと hashCode メソッドの追加" ,"@InvocableVariableアノテーションを付ける"] ,"answer":["equals メソッドと hashCode メソッドの追加"] ,"feedback_tf":["" ,""]}
, {"question": "Apexが作成できる環境は" ,"choice":["Developer Edition" ,"Sandbox" ,"Professonal Edition" ,"Unlimited Edition"] ,"answer":["Developer Edition" ,"Sandbox"] ,"feedback_tf":["" ,""]}
]}
