var config = {"settings": {"add_css_file":false , "add_js_file":false , "custom_lang":false , "head_write_js":"" , "head_write_css":"" , "format":"table" , "messages":{"intro":"Salesforce 認定デベロッパー 練習問題"}} ,"questions":[
{"question": "【模擬問題】Q3-16.以下の処理を匿名ブロックで実行した場合、エラーなく実行できる処理はどれですか？（2つ選択）" ,"choice":["// Accountクラスのインスタンスであることを検証する<br>sObject unknown = new Account{name ='Acme’,<br>　description = 'Acme Account');<br>System.assertEquals(Schema.Account.getSObjectType(),<br>　unknown.getSobjectType());" ,"// Accountクラスのインスタンスであることを検証する<br>sObject unknown = new Account(name = 'Acme',<br>　description = 'Acme Account’)；<br>System.assertEquals(Schema. Account.describe(). <br>　getSObjectType(),unknown.getSobjectType());" ,"//顧客取引先のレコードタイプIDを取得する<br>Id I= Schema.sObjectType. <br>　 Account.getRecordTypelnfoByName() <br>　.get('顧客取引先').getRecordTypeld();" ,"//顧客取引先のレコドタイプIDを取得する<br>Id I = Account.getSObjectType. <br>　 getRecordTypelnfobyName() <br>　.get('顧客取引先').getRecordTypeld();"] ,"answer":["// Accountクラスのインスタンスであることを検証する<br>sObject unknown = new Account{name ='Acme’,<br>　description = 'Acme Account');<br>System.assertEquals(Schema.Account.getSObjectType(),<br>　unknown.getSobjectType());" ,"//顧客取引先のレコードタイプIDを取得する<br>Id I= Schema.sObjectType. <br>　 Account.getRecordTypelnfoByName() <br>　.get('顧客取引先').getRecordTypeld();"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q3-17. Accountオブジェクトの項目の一覧を取得するためにはどうすれば良いですか？（2つ選択）" ,"choice":["Schema.DescribeSObjectResult dr = Schema.describeSObjects('Account');<br>Map＜String,Schema.sObjectField＞ m = dr.fields.getMap();" ,"Map＜String,Schema.sObjectField＞ m = Schema.getGlobalDescribe().get('Account').getMap();" ,"List＜Schema.DescribeSObjectResult＞ dsorl = Schema.describeSObjects(new String[]{'Account});<br>Map＜String,Schema.SObjectField＞ m2 = dsorl[0].fields.getMap();" ,"Map＜String,Schema.sObjectField＞ m = Schema.getGlobalDescribe().get('Account').getDescribe().fields.getMap();"] ,"answer":["List＜Schema.DescribeSObjectResult＞ dsorl = Schema.describeSObjects(new String[]{'Account});<br>Map＜String,Schema.SObjectField＞ m2 = dsorl[0].fields.getMap();" ,"Map＜String,Schema.sObjectField＞ m = Schema.getGlobalDescribe().get('Account').getDescribe().fields.getMap();"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q4-1.Visualforceコントローラに関する正しい説明はどれですか？（3つ選択)" ,"choice":["カスタムコントローラとコントローラ拡張それぞれに同名のアクションメソッドがある場合、ページから使用時はコントローラ拡張のメソッドがコールされる" ,"標準のアクションメソッドを活用し、任意の処理も実装したい場合は、カスタムコントローラを使用する" ,"カスタムコントローラのコンストラクタでは、標準コントローラを受け取るコンストラクタが必要である" ,"コントローラ拡張を使用する場合は、extensions=[\"拡張コンートローラ名\"]で指定するが、パラメタとして指定できるのは1つの拡張コントローラのみである" ,"ページ制御を必要とするVisualforceページ作成時はStandardSetControllerを使用する" ,"標準の編集ボタンの遷移先を任意のVisualforceページにするためには、標準コントローラを使用する"] ,"answer":["カスタムコントローラとコントローラ拡張それぞれに同名のアクションメソッドがある場合、ページから使用時はコントローラ拡張のメソッドがコールされる" ,"ページ制御を必要とするVisualforceページ作成時はStandardSetControllerを使用する" ,"標準の編集ボタンの遷移先を任意のVisualforceページにするためには、標準コントローラを使用する"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q4-2.図のようなリレーションが設定されている時に、受験者レコードや表示する標準コントローラを使用するVisualforceページにて、取引先責任者や、参加したコースのレコードの項目を表示するためには、何を使用すれば良いですか？（1つ選択）<br><img src=\"img/Q4-2.jpg\" width=\"75%\" height=\"75%\">" ,"choice":["コントローラ拡張" ,"関連リスト" ,"式構文（差し込み項目）" ,"クロスオブジェクト数式"] ,"answer":["式構文（差し込み項目）"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q4-3.Visualforce内で使用する、スタイルに関して、正しい説明はどれですか？(2つ選択）" ,"choice":["Salesforce標準のスタイルは、必ず適用される" ,"Salesforce標準のスタイルを適用しない場合は、＜apex:page＞コンポーネントから、standardStylesheets属性をfalseに設定する" ,"独自のスタイルシートを＜apex:stylesheets＞タグで指定することができる" ,"HTMLタグを使用している場合は、インラインCSSコードを使用して、スタイルを定義することができる"] ,"answer":["Salesforce標準のスタイルを適用しない場合は、＜apex:page＞コンポーネントから、standardStylesheets属性をfalseに設定する" ,"HTMLタグを使用している場合は、インラインCSSコードを使用して、スタイルを定義することができる"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q4-4.Lightningコンポーネントの特徴として誤っているものはどれですか？（2つ選択）" ,"choice":["UIでのイベント発生時はJavascriptのコントローラを呼び出す" ,"クライアントサイドでレンダリングされる" ,"イベント駆動型のアーキテクチヤである" ,"モバイル向けの開発には向くが、デスクトップ向けのコンポーネント開発にはVisualforceを使用する方が良い" ,"クライアント側ではJavaScript、サーバ側ではApexが使用される" ,"外部JavaScriptライブラリを、読み込むには＜ltng:import＞タグを使用する"] ,"answer":["モバイル向けの開発には向くが、デスクトップ向けのコンポーネント開発にはVisualforceを使用する方が良い" ,"外部JavaScriptライブラリを、読み込むには＜ltng:import＞タグを使用する"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q5-1.Apexテストフレームワークに関して、正しい説明はどれですか？（2つ選択）" ,"choice":["すべてのApexトリガは、テストメソッドでカバーされる必要がある" ,"テスト実行時は、入力規則は無視される" ,"各Apexクラスごとに、75%以上のカバー率がない場合はリリースできない" ,"テストの100%をエラーなしで実行する必要があるため、Exceptionが発生するテストを実施する場合は、テストメソッド内でtry-catchを実装する" ,"Visualforceコントローラは、リリースに際してテスト不要である" ,"SeeAIIData=trueキーワードを使用しない限り、すべての実データにはアクセスできない"] ,"answer":["すべてのApexトリガは、テストメソッドでカバーされる必要がある" ,"テストの100%をエラーなしで実行する必要があるため、Exceptionが発生するテストを実施する場合は、テストメソッド内でtry-catchを実装する"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q5-2.テストデータの説明に関して、正しい説明はどれですか？（2つ選択)" ,"choice":["カスタムコントローラとコントローラ拡張それぞれに同名のアクションメソッドがある場合、ページから使用時はコントローラ拡張のメソッドがコールされる" ,"@testSetupアノテーションを付加した、テストデータファクトリメソッドを使用することにより、テストクラス内のすべてのメソッドから、テストデータにアクセスできる" ,"ガバナ制限を超えないことを確認するためには、Test.startTest()メソッドとTest.endTest()メソッドを使用する" ,"テスト対象となるクラス内のprivate メソッドは、テストメソッドからであれば直接コールすることができる"] ,"answer":["カスタムコントローラとコントローラ拡張それぞれに同名のアクションメソッドがある場合、ページから使用時はコントローラ拡張のメソッドがコールされる" ,"@testSetupアノテーションを付加した、テストデータファクトリメソッドを使用することにより、テストクラス内のすべてのメソッドから、テストデータにアクセスできる"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q5-3.以下のテストを実行すると、(1)(2)(3)ではそれぞれ何が出力されますか？(1つ選択）<br><img src=\"img/Q5-3.jpg\" width=\"75%\" height=\"75%\">" ,"choice":["(1)-1、 (2)-1、 （3)-0" ,"(1)-1、 (2)-1、 （3)-1" ,"(1)-1、 (2)-2、 （3)-2" ,"(1)-1、 (2)-2、 （3)-1"] ,"answer":["(1)-1、 (2)-2、 （3)-1"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q5-4.テスト実行に関する正しい説明はどれですか？（2つ選択）" ,"choice":["テストカバー率は、テストクラス保存時に計算される" ,"Tooling APIを使用すると、SOQLクエリを使用してコードカバー率の情報にアクセスすることができる" ,"カバー率が足りない場合、System.debug()メソッドを多数使用することにより、力バー率を高めることができる" ,"テストメソッド内で、ネガティブテストのみを網羅的に実行させることにより、あらゆるユースケースに対応することができる" ,"設定メニューからもテストの実行が可能である" ,"Test.runAs()メソッドを使用することにより、別のユーザとしてテストを実行することができる" ,"ロック競合が発生する場合があるため、並列テストは有効化すべきではない"] ,"answer":["Tooling APIを使用すると、SOQLクエリを使用してコードカバー率の情報にアクセスすることができる" ,"設定メニューからもテストの実行が可能である"] ,"feedback_tf":["" ,""]}
]}