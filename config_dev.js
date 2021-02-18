var config = {"settings": {"add_css_file":false , "add_js_file":false , "custom_lang":false , "head_write_js":"" , "head_write_css":"" , "format":"table" , "messages":{"intro":"Salesforce 認定デベロッパー 練習問題"}} ,"questions":[
{"question": "【サンプル】Q1.Partial Copy Sandbox または Full Sandbox を必要とするユースケースはどれですか？答えを 2 つ選んでください。" ,"choice":["拡張性テスト" ,"開発テスト" ,"品質保証テスト" ,"バッチデータテスト"] ,"answer":["拡張性テスト" ,"バッチデータテスト"] ,"feedback_tf":["" ,""]}
, {"question": "【サンプル】Q2. Lightning コンポーネントフレームワークで、何にクライアント側コントローラロジックが含まれますか？" ,"choice":["Apex" ,"Visualforce" ,"HTML" ,"JavaScript"] ,"answer":["JavaScript"] ,"feedback_tf":["" ,""]}
, {"question": "【サンプル】Q3. 開発者は Apex クラスのメソッドを作成して、エラーを適切に処理する必要があります。 開発者は何を使用しますか？答えを 3 つ選んでください。" ,"choice":["ApexPages.addErrorMessage()" ,"カスタム例外" ,".addError()" ,"Database.handleException()" ,"try/catch ブロック"] ,"answer":["カスタム例外" ,".addError()" ,"try/catch ブロック"] ,"feedback_tf":["" ,""]}
, {"question": "【サンプル】Q4. SOQL クエリの where 句の中で有効なものはどれですか？答えを 2 つ選んでください。" ,"choice":["位置情報項目" ,"暗号化項目" ,"集計関数" ,"別名表記"] ,"answer":["位置情報項目" ,"別名表記"] ,"feedback_tf":["" ,""]}
, {"question": "【サンプル】Q5. Salesforce プラットフォームに MVC (モデルビューコントローラ) アーキテクチャを実装する方法を正しく説明しているのはどれですか？" ,"choice":["モデル: 標準オブジェクトとカスタムオブジェクト、ビュー: Visualforce ページ、 コントローラ: Sコントロール" ,"モデル: スキーマビルダ、ビュー: リストビュー、コントローラ: 設定コンソール" ,"モデル: 標準オブジェクトとカスタムオブジェクト、ビュー: Visualforce ページ、 コントローラ: Apex コード" ,"モデル: Apex コード、ビュー: リストビュー、コントローラ: 設定コンソール"] ,"answer":["モデル: 標準オブジェクトとカスタムオブジェクト、ビュー: Visualforce ページ、 コントローラ: Apex コード"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q1-1.Salesforceプラットフォームの説明として正しいものはどれですか？（2つ選択）" ,"choice":["ガバナ制限は、同ーインスタンス上の他テナントのパフォーマンスに悪影響を与えないようにするために存在する" ,"他のテナントのデータにアタセスすることはできない" ,"年3回のリリースに合わせ、作成したApexコードとVisualforceページのバージョンも自動的にあがる" ,"AppExchangeよりインストールした管理パッケージのApexクラスは、独自に修正して機能アップが可能である"] ,"answer":["ガバナ制限は、同ーインスタンス上の他テナントのパフォーマンスに悪影響を与えないようにするために存在する" ,"他のテナントのデータにアタセスすることはできない"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q1-2.SalesforceにおけるMVCアーキテクチャの例として正しいものはどれですか？（2つ選択）" ,"choice":["ワークフロールールは、モデル(Model)である" ,"Visualforceコントローラは、コントローラ（Controller)である" ,"Certification__cカスタムオブジェクトの、Visibility__c項目は、モデル(Model)である" ,"標準オブジェクトおよびカスタムオブジェクトはモデル(Model)であり、標準項自およびカスタム項自は、ビュー(View)である"] ,"answer":["Visualforceコントローラは、コントローラ（Controller)である" ,"Certification__cカスタムオブジェクトの、Visibility__c項目は、モデル(Model)である"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q1-3.キャンペーンメンバーに関して、正しいものはどれですか？（1つ選択）" ,"choice":["CampaignMember__cオブジェクトで管理される" ,"キャンペーンに関連付けられたリードが取引開始された場合、保存されているリードIDは、取引先責任者のIDに置換される" ,"リードの取引開始時に商談を作成しなかった場合、キャンペーンメンバーの情報は失われる" ,"リードが関連するキャンペーンのレコードは、リードの詳細ページの「キャンペーン履歴」関連リストに表示される"] ,"answer":["リードが関連するキャンペーンのレコードは、リードの詳細ページの「キャンペーン履歴」関連リストに表示される"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q1-4.マーケティング部門では、8,000件の取引先責任者に定期的に一括メール送信をしようとしています。推奨すべきソリューションはどれですか？（1つ選択）" ,"choice":["AppExchangeで提供されているパッケージから、メールを一括送信できるパッケージをインストールする" ,"ApexとVisualforceを使用して、メール送信処理を構築する" ,"開発は不要のため、標準の一括メール送信機能を使用する" ,"Developer Editionにデータを移行し、Developer Editionから送信する"] ,"answer":["AppExchangeで提供されているパッケージから、メールを一括送信できるパッケージをインストールする"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q2-1.オブジェクトのデータ型とApexのデータ型の対応として正しいものはどれですか？(1つ選択）" ,"choice":["数値型はInteger型に相当する" ,"自動採番型はInteger型に相当する" ,"チェックボックス型はBoolean型に相当する" ,"日付/時間型はDate型に相当する"] ,"answer":["チェックボックス型はBoolean型に相当する"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q2-2.Operating SystemsおよびProgramming Language項目は複数選択項目です。以下の2つが選択されている時、Apex上はどのように格納されていますか？（1つ選択）<br><img src=\"img/Q2-2.jpg\" width=\"75%\" height=\"75%\">" ,"choice":["Windows; Unixという形式の文字列" ,"Windows,Unixという形式の文字列" ,"Windows,Unixという文字列が格納されたList" ,"Windows,Unixという文字列が格納されたSet"] ,"answer":["Windows; Unixという形式の文字列"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q2-3.リレーションを主従関係で構築すべき要件はどれですか？（3つ選択）" ,"choice":["子レコードの登録時に、親レコードを必須にしたい" ,"親レコードと子レコードで所有者を別にしたい" ,"親レコードと子レコードでアクセス権を連動させたい" ,"親レコードへのリレーションをレコード作成後に付け替えられないようにしたい" ,"積み上げ集計を作成したい" ,"子レコードが存在する時、親レコードの削除を禁止したい" ,"子レコードを削除する時、親レコードも同時に削除したい"] ,"answer":["親レコードと子レコードでアクセス権を連動させたい" ,"親レコードへのリレーションをレコード作成後に付け替えられないようにしたい" ,"積み上げ集計を作成したい"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q2-4.データ型の変更に関して正しい説明はどれですか？（2つ選択)" ,"choice":["主従関係から参照関係への変更は可能だが、参照関係から主従関係への変更はできない" ,"参照関係から主従関係への変更は可能だが、主従関係から参照関係への変更はできない" ,"主従関係から参照関係へ変更した場合、既存の積み上げ集計項目はエラーになる" ,"参照項目に全て値が設定されていれば、参照関係から主従関係に変更できる" ,"積み上げ集計項目を使用していない場合のみ、主従関係から参照関係へ変更できる"] ,"answer":["参照項目に全て値が設定されていれば、参照関係から主従関係に変更できる" ,"積み上げ集計項目を使用していない場合のみ、主従関係から参照関係へ変更できる"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q2-5.API名の変更に関して正しい説明はどれですか？（1つ選択）" ,"choice":["ページレイアウトに設定されているカスタム項目のAPI名は変更できない" ,"Visualforceで使用されているカスタム項目のAPI名は変更できるが、入力規則で使用されている場合は変更できない" ,"項目自動更新で使用されているカスタム項目のAPI名は変更できない" ,"Apexクラスで使用されているカスタム項目のAPI名を変更すると、Apex実行時にクラッシュする"] ,"answer":["項目自動更新で使用されているカスタム項目のAPI名は変更できない"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q2-6.外部IDに関して正しい説明はどれですか？（1つ選択）" ,"choice":["外部システムのデータをインポートする際に、SalesforcelDとマッチングをする項目を特定するために使用する" ,"外部IDは、カスタム項目の属性として各オブジェクトに1つ指定することができる" ,"データローダを使用して、データのインポートをする場合は、Insert、Upsert時のみ使用することができる" ,"外部システムのデータと同期する際に、既存データとの重複を回避する"] ,"answer":["外部システムのデータと同期する際に、既存データとの重複を回避する"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q3-1.関数を使用した数式項目について、誤っているものはどれですか？（2つ選択)" ,"choice":["ISNEW関数を使用し、作成時だけ特定の文字列を表示する数式項目を作成する" ,"ISPICKVAL関数を使用して、選択リスト項目の値によって任意の記号をする" ,"IF関数を使用して、条件に応じた画像を表示する" ,"ISCHANGED関数を使用し、更新された時だけ特定の文字列を表示する数式項目を作成する" ,"VLOOKUP関数を使用して、別のオブジェクトの項目値を表示する"] ,"answer":["ISNEW関数を使用し、作成時だけ特定の文字列を表示する数式項目を作成する" ,"ISCHANGED関数を使用し、更新された時だけ特定の文字列を表示する数式項目を作成する"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q3-2.プロセスビルダーを使用して実現できることはどれですか？（2つ選択）" ,"choice":["レコードが作成された時、関連のないレコードを更新する" ,"プロセスビルダーから、Visualforce Workflowで作成したウィザードを呼び出す" ,"商談の割引率が0以外に設定された時に、自動的に承認申請を開始する" ,"商談が成立した時、Chatterに投稿する"] ,"answer":["商談の割引率が0以外に設定された時に、自動的に承認申請を開始する" ,"商談が成立した時、Chatterに投稿する"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q3-3.静的メソッドについて正しい説明はどれですか？（3つ選択)" ,"choice":["外部クラスでのみ許可される" ,"Visualforceページのビューステートから除外される" ,"内部クラスで使用可能である" ,"特定のインスタンスに関連付けられる" ,"クラスが読み込まれた時のみ初期化される"] ,"answer":["外部クラスでのみ許可される" ,"Visualforceページのビューステートから除外される" ,"クラスが読み込まれた時のみ初期化される"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q3-4.次のコードを匿名ブロックから実行した時の正しい説明はどれですか？（1つ選択)<br><img src=\"img/Q3-4.jpg\" width=\"75%\" height=\"75%\">" ,"choice":["エラーが発生する" ,"i: 99/j: 6/k:1がsystem.debugステートメントに出力される" ,"i: 0/j: 6/k:0がsystem .debugステートメントに出力される" ,"i: 0/j: 6/k:1がsystem.debugステートメントに出力される"] ,"answer":["i: 0/j: 6/k:0がsystem .debugステートメントに出力される"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q3-5.次のコードについて正しい説明はどれですか？（1つ選択)<br><img src=\"img/Q3-5.jpg\" width=\"75%\" height=\"75%\">" ,"choice":["4行目の初期化が正しくないため、エラーが発生する" ,"5行目のforループの構文が正しくないため、エラーが発生する" ,"このコードは、エラーなく実行される" ,"3行めのSOQLの実行結果が0行だった場合、alistlはnullで初期化される"] ,"answer":["4行目の初期化が正しくないため、エラーが発生する"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q3-6.\[ A \]に記述するとエラーになるコードを選択してください（2つ選択)<br><img src=\"img/Q3-6.jpg\" width=\"75%\" height=\"75%\">" ,"choice":["for(String val : m.values()) { System.debug('val: '+val);}" ,"for(Integer val : m.keySet()) { System.debug('val: '+val);}" ,"for(String val : s ){ System.debug('val: '+val);}" ,"for(String val : m.keySet()){ System.debug('va|: '+val);}" ,"for(lnteger val: m.size()){System.debug('val: '+val);}"] ,"answer":["for(String val : m.keySet()){ System.debug('va|: '+val);}" ,"for(lnteger val: m.size()){System.debug('val: '+val);}"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q3-7.継承について正しい説明はどれですか？（2つ選択）" ,"choice":["Apexクラスとメソッドは、デフォルトで継承可能である" ,"Apexクラスはデフォルトfinalだが、メソッドはデフォルトで継承可能である" ,"メソッドをオーバーライドする場合は、継承元のメソッドがvirtualキーワード付きで宣言されている必要がある" ,"メソッドをオーバーライドする場合は、オーバーライドするメソッドにoverrideキーワードが必要である" ,"インターフェースを使用した継承はサポートされない"] ,"answer":["メソッドをオーバーライドする場合は、継承元のメソッドがvirtualキーワード付きで宣言されている必要がある" ,"メソッドをオーバーライドする場合は、オーバーライドするメソッドにoverrideキーワードが必要である"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q3-8.カスタム例外クラスの作成について正しい説明はどれですか？（2つ選択）" ,"choice":["クラス名は任意の文字列を使用することができる" ,"extends Exceptionキーワードを使用して、クラスを宣言する必要がある" ,"クラス名は、「Exception」で終わる必要がある" ,"implements Exceptionキーワードを使用して、別のExceptionを引数として受け取るコンストラクタのみを定義する"] ,"answer":["extends Exceptionキーワードを使用して、クラスを宣言する必要がある" ,"クラス名は、「Exception」で終わる必要がある"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q3-9.以下のクエリ処理のうち、正常に実行できるものはどれですか？（1つ選択)" ,"choice":["String str = 'King\\'s brunch';<br>String qry = 'SELECT id, name FROM Account WHERE name LIKE \\'%' + str + '¥';<br>List＜Account＞ ret2 = Database.query(qry);" ,"Integer i=[SELECT COUNT() FROM Account WHERE isDeleted = true ALL ROWS];" ,"List＜List＜SObject＞＞ ret = [FIND 'SFDC' IN ALL ROWS RETURNING<br>Account(Name),Contact(FirstName/LastName)];" ,"List＜String＞ ret = [FIND 'SFDC' IN ALL ROWS RETURNING<br>Account(Name),Contact(FirstName,LastName)];" ,"List〈AggregateResult＞ ar = [SELECT name,shippingstate,MAX(lastmodifieddate) from Account GROUP BY name];"] ,"answer":["Integer i=[SELECT COUNT() FROM Account WHERE isDeleted = true ALL ROWS];"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q3-10.以下のコードでは、3行目にaddした要素に必須項目Nameに値が入っていないためinsertに失敗一します。\[ A \]に記載する処理として、以下のうち、どの実行方法であれば、2行目と4行目の要素はinsertされますか？（1つ選択）<br><img src=\"img/Q3-10.jpg\" width=\"75%\" height=\"75%\">" ,"choice":["Database.insert(aList,false);" ,"Database.insert(aList);" ,"Database. insert(aList,true);" ,"Insert aList;"] ,"answer":["Database.insert(aList,false);"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q3-11.以下のコードを実行すると、デバッグに出力されるのはどれですか？（1つ選択)<br><img src=\"img/Q3-11.jpg\" width=\"75%\" height=\"75%\">" ,"choice":["1:100:5:50000:3:150:20:10000" ,"1:100:5:50000:3:150:16:10000" ,"1:150:5:50000:3:300:16:10000" ,"1:150:5:50000:3:300:16:10000"] ,"answer":["1:100:5:50000:3:150:16:10000"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q3-12.ガバナ制限について、誤っている説明はどれですか？（3つ選択)" ,"choice":["ビューステートに含める必要がない変数は、transientで宣言する" ,"ヒープサイズを小さくするため、コレクション使用後にnullをセットすると良い" ,"サブクエリを使用したSOQLクエリを使用し、主問い合わせが2件、副問い合わせからそれぞれ2件ずつレコードが帰ってきた場合、SOQLクエリ2件、QueryRowsは6件としてカウントされる" ,"CPUリソースに関しては、クラウド環境全体で管理されるため、テナントごとに制限はない" ,"SOQL forループは、ヒープ使用量の節約に効果がある" ,"ガバナ制限が発生した場合に対処するため、LimitExceptionをcatchする例外ハンドラを用意する"] ,"answer":["サブクエリを使用したSOQLクエリを使用し、主問い合わせが2件、副問い合わせからそれぞれ2件ずつレコードが帰ってきた場合、SOQLクエリ2件、QueryRowsは6件としてカウントされる" ,"CPUリソースに関しては、クラウド環境全体で管理されるため、テナントごとに制限はない" ,"ガバナ制限が発生した場合に対処するため、LimitExceptionをcatchする例外ハンドラを用意する"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q3-13.あるオブジェクトで、レコード更新時にエラーが発生したり、予期しない結果が得られるという現象が発生し、調査の結果、1つのトリガが複数回実行されていることがわかりました。どのように対処すべきでしようか？（1つ選択）" ,"choice":["トリガではなくワークフロールールを使用するように変更する" ,"オブジェクトごとに2つ以上のトリガを実装しないように変更する" ,"static変数を使用し、初回実行かどうかを判定するロジックを追加する" ,"トリガハンドラクラスを使用するように変更する"] ,"answer":["static変数を使用し、初回実行かどうかを判定するロジックを追加する"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q3-14.トリガに関する説明として、正しいものはどれですか？（3つ選択)" ,"choice":["Trigger.newMapは、before insertトリガでは使用できない" ,"Trigger.isExecutingは、トリガコンテキストで実行している場合trueを返す" ,"Trigger.newの値に対してDMLは禁止されているが、Trigger.oldの値に対してのDMLは許容される" ,"Trigger.oldは、updateトリガでは使用できない" ,"新しく作成されたレコードへの参照を持つ項目値を設定する場合は、before insertトリガを使用する" ,"トリガに対するDMLイベントは7種類、存在する"] ,"answer":["Trigger.newMapは、before insertトリガでは使用できない" ,"Trigger.isExecutingは、トリガコンテキストで実行している場合trueを返す" ,"トリガに対するDMLイベントは7種類、存在する"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q3-15.with sharingとwithout sharingの指定していないクラスを定義した場合、<br>1.トリガから呼ばれた時<br>2.匿名ブロックから呼ばれた時<br>の動作はそれぞれどのようになりますか？（1つ選択）" ,"choice":["1:without sharing, 2: with sharing" ,"1:with sharing, 2:with sharing" ,"1:with sharing, 2:without sharing" ,"1:without sharing, 2:without sharing"] ,"answer":["1:without sharing, 2: with sharing"] ,"feedback_tf":["" ,""]}
, {"question": "【模擬問題】Q3-16.以下の処理を匿名ブロックで実行した場合、エラーなく実行できる処理はどれですか？（2つ選択）" ,"choice":["// Accountクラスのインスタンスであることを検証する<br>sObject unknown = new Account{name ='Acme’,<br>　description = 'Acme Account');<br>System.assertEquals(Schema.Account.getSObjectType(),<br>　unknown.getSobjectType());" ,"// Accountクラスのインスタンスであることを検証する<br>sObject unknown = new Account(name = 'Acme',<br>　description = 'Acme Account’)；<br>System.assertEquals(Schema. Account.describe(). <br>　getSObjectType(),unknown.getSobjectType());" ,"//顧客取引先のレコードタイプIDを取得する<br>Id I= Schema.sObjectType. <br>　 Account.getRecordTypelnfoByName() <br>　.get('顧客取引先').getRecordTypeld();" ,"//顧客取引先のレコドタイプIDを取得する<br>Id I = Account.getSObjectType. <br>　 getRecordTypelnfobyName() <br>　.get('顧客取引先').getRecordTypeld();"] ,"answer":["// Accountクラスのインスタンスであることを検証する<br>sObject unknown = new Account{name ='Acme’,<br>　description = 'Acme Account');<br>System.assertEquals(Schema.Account.getSObjectType(),<br>　unknown.getSobjectType());" ,"//顧客取引先のレコードタイプIDを取得する<br>Id I= Schema.sObjectType. <br>　 Account.getRecordTypelnfoByName() <br>　.get('顧客取引先').getRecordTypeld();"] ,"feedback_tf":["" ,""]}
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
]}
