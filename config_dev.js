var config = {"settings": {"add_css_file":false , "add_js_file":false , "custom_lang":false , "head_write_js":"" , "head_write_css":"" , "format":"table" , "messages":{"intro":"Salesforce 認定デベロッパー 練習問題"}} ,"questions":[
{"question": "テスト内でガバナ制限に引っかかってるから確認する方法1つ選ぶ" ,"choice":["Test.getDmlStatementsを使う" ,"Limit、startTest、stopTest使う"] ,"answer":["Limit、startTest、stopTest使う"] ,"feedback_tf":["" ,""]}
, {"question": "マルチテナントで未完成のパッケージをリリースする際に想定外のエラーに対して考慮するためにやっておいたほうがいいこと（みたいな質問、1つ選択）" ,"choice":["入力規則を全部設定してリリース（？）" ,"テストを75%"] ,"answer":["テストを75%"] ,"feedback_tf":["" ,""]}
, {"question": "映画と俳優と契約の3オブジェクト、契約が映画と俳優を1つずつ持つ時の関連付けはどれにすればよいか（1つ選択）" ,"choice":["2つとも主従" ,"2つとも参照" ,"片方が参照、片方が主従（がそれぞれ）"] ,"answer":["2つとも主従"] ,"feedback_tf":["" ,""]}
, {"question": "外部IDの意味（2つ）" ,"choice":["upsertで重複ふせぐ" ,"他の開発環境に移すときに同一のSalesforceIDを振る（？）" ,"sObjectとして認識するための値"] ,"answer":["upsertで重複ふせぐ"] ,"feedback_tf":["" ,""]}
, {"question": "SOQLのインジェクションを防ぐ方法2つ選択,,実際のコードの中から選択する" ,"choice":["" ,"like検索→文字結合" ,"like検索　文字結合（String.escapeSingleQuotes）" ,"バインド変数" ,"バインド変数（String.escapeSingleQuotes実施した変数）"] ,"answer":["like検索　文字結合（String.escapeSingleQuotes）" ,"バインド変数"] ,"feedback_tf":["" ,""]}
, {"question": "電話番号検索、複数オブジェクトをまたぐ方法（1つ選択）" ,"choice":["SOSLを実行" ,"ALL ROWS使ってSOQLクエリ" ,"ALL ROWS使ってSOSLクエリ"] ,"answer":["SOSLを実行"] ,"feedback_tf":["" ,""]}
, {"question": "Trigger.oldに入ってる値は？" ,"choice":["更新対象の前のバージョンの値"] ,"answer":["更新対象の前のバージョンの値"] ,"feedback_tf":["" ,""]}
, {"question": "色々なところから呼ばれるApexのヘルパーを作った、その中の一部のロジックのみ、トリガーでだけ実行したい（1つ選択）" ,"choice":["isExecuting使う" ,"Trigger.newMap != null で判定する"] ,"answer":["isExecuting使う"] ,"feedback_tf":["" ,""]}
, {"question": "with sharing で作ったメソッドを、営業所の部長とその配下にのみ、取引先が見えるようにしたい、やるべきこと（1つ選択）" ,"choice":["プロファイル1つ、権限セット1つ、ロール1つ" ,"プロファイル2つ、権限セット1つ、ロール1つ" ,"プロファイル1つ、権限セット2つ、ロール1つ" ,"プロファイル1つ、権限セット1つ、ロール2つ"] ,"answer":["プロファイル1つ、権限セット1つ、ロール2つ"] ,"feedback_tf":["" ,""]}
, {"question": "汎用的なオブジェクトを受け取るメソッドを作った、内部でどのオブジェクトか判定するには？（1つ選択）" ,"choice":["getSObjectTypeでオブジェクトのトークンを取得して判定" ,"getSObjectNameでオブジェクト名を取得して判定"] ,"answer":["getSObjectTypeでオブジェクトのトークンを取得して判定"] ,"feedback_tf":["" ,""]}
]}
