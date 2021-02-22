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
, {"question": "【模擬問題】Q6-1.以下の説明で正しいものはどれですか？（2つ選択）" ,"choice":["Developer Editionでは、Apexクラスは作成できるが、Apexトリガは作成できない" ,"軽微な修正であれば、本番環境からApexを直接修正することにより、テストを省略できる" ,"トライアル組織では、Apexクラスを作成することができる" ,"Enterprise Edition運用組織では、Apexコードを直接変更することはできない"] ,"answer":["トライアル組織では、Apexクラスを作成することができる" ,"Enterprise Edition運用組織では、Apexコードを直接変更することはできない"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q6-2.以下の要件で結合テストを行う必要があります<br>・本番環境のデータを使用する必要はない<br>・テストは毎月の第2木曜に実施する<br>・テストデータは6GBを想定<br>どの環境を使用することができますか？（1つ選択）" ,"choice":["Full Sandbox" ,"Partial Copy Sandbox" ,"Developer Edition" ,"Developer Sandbox" ,"Developer Pro Sandbox"] ,"answer":["Full Sandbox"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q6-3.デバッグに関して正しい説明はどれですか？（2つ選択）" ,"choice":["詳細なログを取得するために、追跡対象となるオブジェクトにトリガを実装し監視することが推奨される" ,"ワークベンチを使用すると、SOQLおよびSOSLの処理結果を確認できる" ,"実行した処理で使用したガバナ制限情報の詳細を確認するためには、ログインスペクタを使用する" ,"特定のユーザの処理に関するログを取得するには、ワークベンチを使用する"] ,"answer":["ワークベンチを使用すると、SOQLおよびSOSLの処理結果を確認できる" ,"実行した処理で使用したガバナ制限情報の詳細を確認するためには、ログインスペクタを使用する"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q6-4.リリースに関する正しい説明はどれですか？（2つ選択）" ,"choice":["関連組織間でのメタデータのリリースには、管理パッケージを使用する" ,"変更セットを使用して、データをリリースすることができる" ,"メタデータのリリースは、データローダを使用する" ,"Force.com IDEから、任意の組織に対してメタデータのリリースが可能である" ,"変更セットを使用することにより、関連組織間でメタデータのリリースが可能である" ,"未管理パッケージを使用して、Developer Editionのデータを、Sandbox組織にリリース可能である"] ,"answer":["Force.com IDEから、任意の組織に対してメタデータのリリースが可能である" ,"変更セットを使用することにより、関連組織間でメタデータのリリースが可能である"] ,"feedback_tf":["" ,""]}
, {"question": "【追加練習問題】Q1.Salesforceプラットフォームの説明として正しい説明はどれですか？（2つ選択）" ,"choice":["非管理パッケージのApexコードはインストール後修正可能である" ,"Apexのプログラムは本番環境でのみ開発できる" ,"ApexのプログラムはForce.comプラットフォーム上でのみ実行できる" ,"作成したApexコードはForce.comプラットフォームのバージョンアップに合わせてAPIバージョンを上げて単体テストを行う"] ,"answer":["非管理パッケージのApexコードはインストール後修正可能である" ,"ApexのプログラムはForce.comプラットフォーム上でのみ実行できる"] ,"feedback_tf":["" ,""]}
, {"question": "【追加練習問題】Q2.SalesforceプラットフォームのMVCに関する説明のうち、正しいものはどれですか？（2つ選択）" ,"choice":["メニュー項目の表示に使用しているJavascriptはコントローラである" ,"ページレイアウトはビューである" ,"Visualforceページコントローラはビューである" ,"メタデータAPIはモデルである"] ,"answer":["ページレイアウトはビューである" ,"メタデータAPIはモデルである"] ,"feedback_tf":["" ,""]}
, {"question": "【追加練習問題】Q3.以下のどの積み上げ集計を作成可能ですか？（3つ選択）" ,"choice":["取引先オブジェクトに、取引先責任者数を計算する積み上げ集計項目" ,"取引先オブジェクトに、商談数を計算する積み上げ集計項目" ,"商談オブジェクトに、商談商品数を計算する積み上げ集計項目" ,"商談オブジェクトに、活動予定数を計算する積み上げ集計項目" ,"キャンペーンオブジェクトに、キャンペーンメンバ数を計算する積み上げ集計項目" ,"キャペーンオブジェクトに、商談数を計算する積み上げ集計項目"] ,"answer":["取引先オブジェクトに、商談数を計算する積み上げ集計項目" ,"商談オブジェクトに、商談商品数を計算する積み上げ集計項目" ,"キャンペーンオブジェクトに、キャンペーンメンバ数を計算する積み上げ集計項目"] ,"feedback_tf":["" ,""]}
, {"question": "【追加練習問題】Q4.クロスオブジェクト数式項目が作成できるのはどのオブジェクトですか？（2つ選択）" ,"choice":["主従関係の主オブジェクト" ,"主従関係の従オブジェクト" ,"参照関係の親オブジェクト" ,"参照関係の子オブジェクト"] ,"answer":["主従関係の従オブジェクト" ,"参照関係の子オブジェクト"] ,"feedback_tf":["" ,""]}
, {"question": "【追加練習問題】Q5.以下のクラスが定義されている<br><img src=\"img/QB5-1.jpg\" width=\"75%\" height=\"75%\"><br>匿名ブロックで以下をExecuteしたときの結果はどれですか？（1つ選択)<br><img src=\"img/QB5-2.jpg\" width=\"75%\" height=\"75%\">" ,"choice":["aの初期値である10がデバッグログ上に表示される" ,"10に100を加算した110がデバッグログ上に表示される" ,"「A4」行はA.aと指定する必要があり、コンパイルエラー" ,"「B2」行はaobj.aと指定する必要があり、コンパイルエラー"] ,"answer":["10に100を加算した110がデバッグログ上に表示される"] ,"feedback_tf":["" ,""]}
, {"question": "【追加練習問題】Q6.以下のコードの実行結果として出力されるのは以下のどれですか？（1つ選択)<br><img src=\"img/QB6.jpg\" width=\"75%\" height=\"75%\">" ,"choice":["1" ,"3" ,"8" ,"null"] ,"answer":["8"] ,"feedback_tf":["" ,""]}
, {"question": "【追加練習問題】Q7.ガバナ制限を超えないようにするための、最適な説明はどれですか？（2つ選択)" ,"choice":["ヒープ領域を節約するため、一度に1レコードずつDMLを実行する" ,"クエリで選択する項目数とレコード数を最小限にする" ,"ループの内側でSOQLを実行する" ,"多めのレコードを使用したテストメソッドを作成する"] ,"answer":["クエリで選択する項目数とレコード数を最小限にする" ,"多めのレコードを使用したテストメソッドを作成する"] ,"feedback_tf":["" ,""]}
, {"question": "【追加練習問題】Q8.Accountオブジェクトには現在10レコードあり、以下のコードを実行します<br><img src=\"img/QB8.jpg\" width=\"75%\" height=\"75%\"><br>実行後、Accountオブジェクトには何レコードありますか（1つ選択)" ,"choice":["10レコード" ,"110レコード" ,"160レコード" ,"210レコード"] ,"answer":["10レコード"] ,"feedback_tf":["" ,""]}
, {"question": "【追加練習問題】Q9.開発初期に作成していたカスタム項目が不要になった。そこで、コードからカスタム項目の利用部分をすべて削除した後、カスタム項目を削除しようとした。この時の動作として最適な説明はどれですか？（1つ選択）" ,"choice":["特にエラーなくカスタム項目を削除できる" ,"自動的に該当カスタム項目を使用しているVisualforceページも削除される" ,"該当カスタム項目を使用しているVisualforceページも合わせて削除するかを確認する画面が表示される" ,"該当カスタム項目を使用しているVisualforceページをすべて事前に削除していたとしても、エラーとなる"] ,"answer":["特にエラーなくカスタム項目を削除できる"] ,"feedback_tf":["" ,""]}
, {"question": "【追加練習問題】Q10.以下の説明のうち、正しいものはどれですか？（2つ選択)" ,"choice":["レコードが誰に共有されているのかを確認するには、標準オブジェクトObjectShareをSOQLで検索する" ,"実行ユーザのオブジェクト権限を確認するためには、DescribeSObjectResultのメソッドを使用する" ,"内部クラスに「with sharing」キーワードを使用しない場合、外側のクラスの共有設定に従う" ,"カスタムSalesfoprcelモバイルアプリケーションの作成において、VisualforceページではなくLightningコンポーネントを使用すると、パフォーマンスが向上する"] ,"answer":["実行ユーザのオブジェクト権限を確認するためには、DescribeSObjectResultのメソッドを使用する" ,"カスタムSalesfoprcelモバイルアプリケーションの作成において、VisualforceページではなくLightningコンポーネントを使用すると、パフォーマンスが向上する"] ,"feedback_tf":["" ,""]}
, {"question": "【追加練習問題】Q11.Accountオブジェクトのレコードタイプ情報とIndustry(選択リスト型)情報を取得したい。以下の①、②に入るコードはどれですか？(1つ選択)<br><img src=\"img/QB11.jpg\" width=\"75%\" height=\"75%\">" ,"choice":["①getRecordTypes()、②getPicklists()" ,"①getRecordTypes()、②getPicklistValues()" ,"①getRecordTypeInfos()、②getPicklists()" ,"①getRecordTypeInfos()、②getPicklistValues()"] ,"answer":["①getRecordTypeInfos()、②getPicklistValues()"] ,"feedback_tf":["" ,""]}
, {"question": "【追加練習問題】Q12.Position__c、Job_Application__c、Review__cにリレーションが貼られている。Posision__cレコードを表示するVisualforceページにてReview__cレコードの項目を表示したい場合、どの方法が適切でしようか？（1つ選択）" ,"choice":["標準コントローラ+式構文（差し込み項目）" ,"標準コントローラ+クロスオブジェクト数式" ,"標準コントローラ+コントローラ拡張" ,"標準コントローラ+関連リスト"] ,"answer":["標準コントローラ+コントローラ拡張"] ,"feedback_tf":["" ,""]}
, {"question": "【追加練習問題】Q13.以下のクラスの説明として正しいものはどれですか？（1つ選択)<br><img src=\"img/QB13.jpg\" width=\"75%\" height=\"75%\">" ,"choice":["このクラスは標準コントローラとして使用可能" ,"このクラスは標準リストコントローラとして使用可能" ,"このクラスはカスタムコントローラとして使用可能" ,"このクラスは標準コントローラに基づくコントローラ拡張として使用可能" ,"このクラスはカスタムコントローラに基づくコントローラ拡張として使用可能"] ,"answer":["このクラスは標準コントローラに基づくコントローラ拡張として使用可能"] ,"feedback_tf":["" ,""]}
, {"question": "【追加練習問題】Q14.Lightningコンポーネントのコンポーネントバンドルに組み込まれているリソースはどれですか？（2つ選択）" ,"choice":["ドキュメント" ,"ダッシュボード" ,"Apexクラス" ,"ヘルパー"] ,"answer":["ドキュメント" ,"ヘルパー"] ,"feedback_tf":["" ,""]}
, {"question": "【追加練習問題】Q15.テストメソッドを作成する上で推奨すべき方法はどれですか？（2つ選択）" ,"choice":["SeeAIIData=trueを指定して規定データを用いたテストを行う" ,"正常データでの動作と異常データでの動作を1つの単体テストメソッドで確認する" ,"assertを用いて実行結果が正しいか確認する" ,"startTestとstopTestを利用して、ガバナ制限をテストする"] ,"answer":["assertを用いて実行結果が正しいか確認する" ,"startTestとstopTestを利用して、ガバナ制限をテストする"] ,"feedback_tf":["" ,""]}
, {"question": "【追加練習問題】Q16.開発者コンソールのチェックポイント機能を使用するときに表示される内容はどれですか？（2つ選択）" ,"choice":["Event" ,"Line" ,"Class" ,"Details"] ,"answer":["Line" ,"Class"] ,"feedback_tf":["" ,""]}
]}
