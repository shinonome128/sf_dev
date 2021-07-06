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
{ "question":"A Visualforce page has a standard controller for an object that has a lookup relationship to aparent object.How can a developer display data from the parent record on the page?", "choice":["By adding a second standard controller to the page for the parent record.","By using a roll-up formula field on the child record to include data from the parent record.","By using SOQL on the Visualforce page to query for data from the parent record.","By using merge field syntax to retrieve data from the parent record."], "answer":["By using merge field syntax to retrieve data from the parent record."] , "feedback_tf":["", ""]}
,{ "question":"How can a developer retrieve all Opportunity record type labels to populate a listcollection?Choose 2 answers", "choice":["Obtain describe object results for the Opportunity objct.","Write a for loop that extracts values from the Opportunity.RecordType.Name field.","Use the global variable $RecordType and extract a list from the map.","Write a SOQL for loop that iterates on the RecordType object."], "answer":["Obtain describe object results for the Opportunity objct.","Write a SOQL for loop that iterates on the RecordType object."] , "feedback_tf":["", ""]}
,{ "question":"What is a capability of the ＜ltng:require＞ tag that is used for loading external Javascriptlibraries in Lightning Component? (Choose three.)", "choice":["Loading files from Documents.","One-time loading for duplicate scripts.","Specifying loading order.","Loading scripts in parallel."], "answer":["One-time loading for duplicate scripts.","Specifying loading order.","Loading scripts in parallel."] , "feedback_tf":["", ""]}
,{ "question":"Which three code lines are required to create a Lightning component on a Visualforce page?Choose 3 answers", "choice":["$Lightning.createComponent","＜apex:slds/＞","$Lightning.useComponent","$Lightning.use (Missed)","＜apex:includeLightning/＞"], "answer":["$Lightning.createComponent","$Lightning.use (Missed)","＜apex:includeLightning/＞"] , "feedback_tf":["", ""]}
,{ "question":"Universal Containers wants a list button to display a Visualforce page that allows users to editmultiple records. which Visualforce feature supports this requirement?", "choice":["＜apex:listButton＞ tag","Custom controller","RecordSetVar page attribute","Controller extension"], "answer":["RecordSetVar page attribute"] , "feedback_tf":["", ""]}
,{ "question":"A company has a custom object named Region. Each account in salesforce can only be relatedto one region at a time, but this relationship is optional. Which type of relantionship should adeveloper use to relate an account to a region?", "choice":["Parent-child","Master-detail","Hierarchical","Lookup"], "answer":["Master-detail"] , "feedback_tf":["", ""]}
,{ "question":"A developer in a Salesforce org with 100 Accounts executes the following code using theDeveloper console:Account myAccount = new Account(Name = 'MyAccount');Insert myAccount;For (Integer x = 0; x ＜250; x++){Account newAccount = new Account (Name='MyAccount' + x);try {Insert newAccount;}catch(Exception ex) {System.debug (ex) ;}}insert new Account (Name='myAccount'); How many accountsare in the org after this code is run?", "choice":["101","100","102","252"], "answer":["100"] , "feedback_tf":["", ""]}
,{ "question":"Which is a valid apex assignment?", "choice":["Integer x=5 * 1,0","Integer = 5,0","Double x = 5","Float x = 5.0"], "answer":["Double x = 5"] , "feedback_tf":["", ""]}
,{ "question":"A developer has a single custom controller class that works with a Visualforce Wizard tosupport creating and editing multiple sObjects. The wizard accepts data from user inputs acrossmultiple Visualforce pages and from a parameter on the initial URLWhich statement is unnecessaryinside the unit test for the custom controller?", "choice":["Public ExtendedController (ApexPages.StandardController cntrl) { }","ApexPages.currentPage().getParameters().put('input', 'TestValue')","Test.setCurrentPage(pageRef),","String nextPage = controller.save().getUrl();"], "answer":["Public ExtendedController (ApexPages.StandardController cntrl) { }","String nextPage = controller.save().getUrl();"] , "feedback_tf":["", ""]}
,{ "question":"Which three tools can deploy metadata to production? (Choose three.)", "choice":["Change Set from Developer Org","Force.com IDE","Data Loader","Change Set from Sandbox","Metadata API"], "answer":["Change Set from Developer Org","Change Set from Sandbox","Metadata API"] , "feedback_tf":["", ""]}
]}
