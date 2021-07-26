var config = {
"settings": {
	"add_css_file":false,
	"add_js_file":false,
	"custom_lang":false,
	"head_write_js":"",
	"head_write_css":"",
	"format":"table",
	"messages":{
		"intro":"Salesforce 認定デベロッパー 練習問題"
	}
},
"questions":[
{ "question":"The sales team at universal container would like to see a visual indicator appear on bothaccount and opportunity page layout to alert salespeople when an account is late making paymentsor has entered the collections process. What can a developer implement to achieve this requirementwithout having to write custom code?", "choice":["Workflow rule","Formula field","Roll-up summary field","Quick action"], "answer":["Formula field"] , "feedback_tf":["", ""]}
,{ "question":"How can a developer warn users of SOQL governor limit violations in a trigger?", "choice":["Use ApexMessage.Message() to display an error message after the number of SOQL queriesexceeds the limit.","Use PageReference.setRedirect() to redirect the user to a custom Visualforce page before thenumber of SOQL queries exceeds the limit.","Use Messaging.SendEmail() to continue the transaction and send an alert to the user after thenumber of SOQL queries exceeds the limit.","Use Limits.getQueries() and display an error message before the number of SOQL queries exceedsthe limit."], "answer":["Use Limits.getQueries() and display an error message before the number of SOQL queries exceedsthe limit."] , "feedback_tf":["", ""]}
,{ "question":"Which option would a developer use to display the Accounts created in the current weekand the number of related Contacts using a debug statement in Apex?", "choice":["For(Account acc: [SELECT Id, Name,(SELECT Id, Name FROM Contacts) FROM Account WHERECreatedDate = THIS_WEEK]) { List cons = acc.Contacts; System.debug(acc.Name + ' has ' + cons.size()+ 'Contacts'; }","For(Account acc: [SELECT Id, Name, (SELECT Id, Name FROM Contacts) FROM Account WHERECreatedDate = CURRENT_WEEK]){ List cons = acc.Contacts; System.debug(acc.Name + ' has ' +cons.size() + 'Contacts'); }","For(Account acc:[SELECT Id, Name, Account.Contacts FROM Account WHERE CreatedDate =CURRENT_WEEK]) { List cons = acc.Account.Contacts; System.debug(acc.Name + ' has ' + cons.size() +'Contacts'); }","For(Account acc: [SELECT Id, Name, Account.Contacts FROM Account WHERE CreatedDate =THIS_WEEK]){ List cons = acc.Account.Contacts; System.debug(acc.Name + ' has ' + cons.size() +'Contacts' }"], "answer":["For(Account acc: [SELECT Id, Name,(SELECT Id, Name FROM Contacts) FROM Account WHERECreatedDate = THIS_WEEK]) { List cons = acc.Contacts; System.debug(acc.Name + ' has ' + cons.size()+ 'Contacts'; }"] , "feedback_tf":["", ""]}
,{ "question":"A developer must create a CreditcardPayment class that provides an implementation of anexisting Payment class. Public virtual class Payment { public virtual void makePayment(Decimalamount) { /*implementation*/} } Which is the correct implementation?", "choice":["Public class CreditcardPayment extends Payment {public override void makePayment(Decimal amount) { /*implementation*/ }}","Public class CreditCardPayment implements Payment {public virtual void makePayment(Decimal amount) { /*implementation*/ }}","Public class CreditCardPayment extends Payment {public virtual void makePayment(Decimal amount) { /*implementation*/ }}","Public class CreditCardPayment implements Payment {public override void makePayment(Decimal amount) { /*Implementation*/ }}"], "answer":["Public class CreditcardPayment extends Payment {public override void makePayment(Decimal amount) { /*implementation*/ }}"] , "feedback_tf":["", ""]}
,{ "question":"Which two queries can a developer use in a Visualforce controller to protect against SOQLinjection vulnerabilities? Choose 2 answers", "choice":["String qryName = % + String.enforceSecurityChecks(name)+ % ;String qryString = SELECT Id FROM Contact WHERE Name LIKE :qryNAme ;List queryResults = Database.query(qryString);","String qryName = % + name % ;String qryString = SELECT Id FROM Contact WHERE Name LIKE :qryNAme ;List queryResults = Database.query(qryString);","String qryName = % + String.escapeSingleQuotes(name)+ % ;String qryString = SELECT Id FROM Contact WHERE Name LIKE :qryNAme ;List queryResults = Database.query(qryString);","String qryString = SELECT Id FROM Contact WHERE Name LIKE :qryNAme ; List queryResults =Database.query(qryString);"], "answer":["String qryName = % + name % ;String qryString = SELECT Id FROM Contact WHERE Name LIKE :qryNAme ;List queryResults = Database.query(qryString);","String qryName = % + String.escapeSingleQuotes(name)+ % ;String qryString = SELECT Id FROM Contact WHERE Name LIKE :qryNAme ;List queryResults = Database.query(qryString);"] , "feedback_tf":["", ""]}
,{ "question":"A developer writes a trigger on the Account object on the before update event thatincrements a count field. A workflow rule also increments the count field every time that an Accountis created or update. The field update in the workflow rule is configured to not re-evaluate workflowrules. What is the value of the count field if an Account is inserted with an initial value of zero,assuming no other automation logic is implemented on the Account?", "choice":["3","2","1","4"], "answer":["3"] , "feedback_tf":["", ""]}
,{ "question":"For which example task should a developer use a trigger rather than a workflow rule?", "choice":["To set the primary Contact on an Account record when it is saved","To send an email to hiring manager when a candidate accepts a job offer.","To set the Name field of an expense report record to Expense and the Date when it is saved.","To notify an external system that a record has been modified."], "answer":["To set the primary Contact on an Account record when it is saved"] , "feedback_tf":["", ""]}
,{ "question":"In Lightning component framework, which resource can be used to fire events? Choose 2answers.", "choice":["Third-party Javascript code","Javascript controller actions","Visualforce controller actions","Third-party web service code"], "answer":["Third-party Javascript code","Javascript controller actions"] , "feedback_tf":["", ""]}
,{ "question":"A developer wants multiple test classes to use the same set of test data. How should thedeveloper create the test data?", "choice":["Define a variable for test records in each test classes","Create a test setup method for each test class","Use the seealldata=true annotation in each test class","Reference a test utility class in each test class"], "answer":["Use the seealldata=true annotation in each test class"] , "feedback_tf":["", ""]}
,{ "question":"custom picklist field, Food_Preference__c, exist on a custom object. The picklist contains thefollowing options: 'Vegan','Kosher','No Preference'. The developer must ensure a value is populatedevery time a record is created or updated. What is the most efficient way to ensure a value isselected every time a record is saved?", "choice":["Set  Use the first value in the list as the default value  as True.","Set a validation rule to enforce a value is selected.","Mark the field as Required on the field definition.","Mark the field as Required on the object's page layout."], "answer":["Mark the field as Required on the field definition."] , "feedback_tf":["", ""]}
]}
