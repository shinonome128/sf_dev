/*jslint browser: true, devel: true, nomen: true, plusplus: true, regexp: true, unparam: true, todo: true, indent: 4 */

var default_config = {
settings: {
shuffle_questions: true,
shuffle_choices: true,
passing_score: 80,
id_prefix: 'q',
id_digits: 3,
time_limit: 0,
time_limit_mode: 'total',
show_correct_answer: true,
show_instant_result: true,
show_seigo_count: true,
hide_result_summary: false,
hide_result_detail: false,
hide_mark_button: true,
title: 'Quiz',
ignore_case: true,
ignore_whitespace_count: true,
ignore_whitespace: false,
ignore_zenhan: true,
trim: true,
width: false,
height: false,
bgcolor: false,
player_bgcolor: false,
finish_at_result_page: true,


movable: false,
mode: 'master',
master_count: 2,
restartable: true,
scorm: 'auto',
scale: 1,
student_response_align: 'center',
flexible_resultpage: false,
version: '5.3.15',
remove_powered_by: false,
sound: false,
math: true,
certificate: false,
pass: false,
score_weighting: false,
suspendable: false,
partial_score: false,
autoplay: false,
use_number_type_for_input: true,
messages: {
passed: '攻略完了',
failed: '攻略中',
correct: '正解！',
incorrect: '不正解',
neutral: '未解答',
not_selected: '解答を選択してください',
not_filled: '解答を入力してください',
intro: '開始ボタンをクリックするとクイズが始まります',
answer_true: '攻略完了',
answer_false: '攻略中',
not_sorted: '並び替えをおこなってください',
confirm_midstream_mark: '未解答の設問があります。途中終了して採点処理を行いますがよろしいですか？',
confirm_mark: '終了して採点処理を行います。よろしいですか？',
passed_title: false,
passed_body: false,
failed_title: false,
failed_body: false,
}
},
questions: [












{question: "<b>What are in the picture?</b> <br>[[images/dice.png]]", choice: ['dice', 'maze', 'pen'], answer: 'dice', type: 'button', section:0},
{question: "<b>What are in the picture?</b> <br>[[images/dice.png]]", choice: ['dice', 'maze', 'pen'], answer: 'dice', type: 'button', section:0},
{question: "<b>What are in the picture?</b> <br>[[images/dice.png]]", choice: ['dice', 'maze', 'pen'], answer: 'dice', type: 'button', section:0},






]
};
var scorm12 = {correct: 'correct', incorrect: 'wrong'},
scorm2004 = {correct: 'correct', incorrect: 'incorrect'},
single_choice_template,
multi_choice_template,
button_template,
input_template,
input_math_template,
textarea_template,
fill_in_multi_template,
true_false_template,
sort_template,
match_template,
wordbank_template,
result_detail_template1,
result_detail_template2,
position = 0,
cq,
origProgress,
suspend_data_version = '0010',
suspend_data_body,
suspend_data_body_unknown,
pushed_state,
state = 'loading',
last_button_value,
dragging = false,
pc_flg = false,
change_sort_flg = false,
change_list_scale_height = 0,
change_page_scale_height = 0,
isIPhone = /iPhone/.test(navigator.userAgent),
isIPad = /iPad/.test(navigator.userAgent),
isAndroid = /Android/.test(navigator.userAgent),
finished = false,
_cfg,
suspended = false,
autoStartRunner;

$(function () {

init_quiz();
});

function init_quiz() {

var elem, i;
cstate('intro');
save_templates();
load_config();
if (_cfg.settings.suspendable) {
$("#suspend_button").show();
}else{
$("#suspend_button").hide();
}
fit_to_frame();
init_scorm();
if (!_cfg.settings.remove_powered_by) {
$("#intro_wrapper").before('<div class="col-12" style="margin-top:-20px;"><kbd style="font-size:11px;" class="float-right">Powered by <a href="https://quizgenerator.net" target="_blank" style="color:white;">QuizGenerator'
+ _cfg.settings.version + '</a></kbd></div>')
}

for (elem in _cfg.settings.messages) {
if (_cfg.settings.messages.hasOwnProperty(elem)) {
if (_cfg.settings.messages[elem]){
$('#' + elem).html(convert_image_tags(_cfg.settings.messages[elem]));
}
}
}
if (!_cfg.settings.show_instant_result) {
$('#result_table1 .result').hide();
}
if (!_cfg.settings.movable) {
$('th.button,td.button').hide();
}
if (!_cfg.settings.restartable) {
$('#restart_button').hide();
}
document.title = _cfg.settings.title;
$('#start_quiz_button_not_answerd').hide();
$('#start_quiz_button_review').hide();
$('#start_quiz_button_weak').hide();
$('#start_quiz_button').hide();
$('#completion_rate_wrapper').hide();
if (_cfg.settings.hasOwnProperty('question_count_array')) {

_cfg.settings.mode = 'normal';
}
switch (_cfg.settings.mode) {
case 'master':
$('#completion_rate').html(get_completion_rate());
origProgress = get_completion_rate();
if (count_not_correctly_answered_questions(_cfg.settings.master_count - 1) === 0) {
$('#start_quiz_button_not_answerd').attr('disabled', 'disabled');
}
$('#start_quiz_button_not_answerd').show();
$('#start_quiz_button_review').show();
$('#start_quiz_button_weak').show();
$('#completion_rate_wrapper').show();
break;
default:
$('#start_quiz_button').show();
}

if (_cfg.settings.hasOwnProperty('question_count_array')) {
_cfg.settings.question_count = 0;
for (i = 0; i < _cfg.settings.question_count_array.length; i++){
_cfg.settings.question_count += _cfg.settings.question_count_array[i];
}
} else if (!_cfg.settings.hasOwnProperty('question_count')) {
_cfg.settings.question_count = _cfg.questions.length;
}
_cfg.settings.question_count = Math.min(_cfg.questions.length, _cfg.settings.question_count);
prepare_questions();
updateLinkTarget();
if(_cfg.settings.skip_intro_page){
autoStartRunner = setInterval(waitAndAutostart, 5);
}else{
show('#page_intro');
}
}
function waitAndAutostart(){
if (typeof MathJax !== 'undefined') {
clearInterval(autoStartRunner);
if(_cfg.settings.mode == 'master'){
start_quiz('review');
}else{
start_quiz();
}
}
}
function save_templates() {

single_choice_template = $('#choice').html();
multi_choice_template = $('#multi_choice').html();
button_template = $('#button').html();
input_template = $('#input').html();
input_math_template = $('#input_math').html();
fill_in_multi_template = $('#fill_in_multi').html();
textarea_template = $('#textarea').html();
true_false_template = $('#true_false').html();
sort_template = $('#sort').html();
wordbank_template = $('#wordbank').html();
match_template = $('#match').html();
result_detail_template1 = $('#result_table1 .result_detail');
result_detail_template2 = $('#result_table2 .result_detail');
}
window.onresize = function(event) {
fit_to_frame();
};
function fit_to_frame() {
$("body").css("margin-top", "0");
$("body").css("margin-left", "0");
$("body").css("margin-right", "0");
$("body").css("margin-bottom", "0");
$("body").css("padding", "0");
$("html").css("width", $(window).width() - 2);
$("html").css("height", $(window).height() - 2);
$("html").css("width", "100%");
$("html").css("height", "100%");
$("body").css("width", "100%");
$("body").css("height", "100%");
}
function load_config() {
var i;
if ( typeof config !== "undefined"){
delete default_config.questions;
_cfg = merge(config, default_config);
} else {
_cfg = default_config;
}
for (i = 0; i < _cfg.questions.length; i++) {
_cfg.questions[i].iid = i;
}
}
function prepare_questions() {

var i,
feedback,
q,
j,
shuffle_flg;
for (i = 0; i < _cfg.questions.length; i++) {
feedback = false;
q = _cfg.questions[i];
if (q.hasOwnProperty('type') && (q.type === 'fill-in' || q.type === 'textarea' || q.type === 'sort' || q.type === 'match' || q.type === 'wordbank' || q.type === 'fill-in-plus' || q.type === 'fill-in-multi' || q.type === 'pulldown')) {
q.type = String(q.type);//Nothing to do
} else if ((q.hasOwnProperty('type') && q.type === 'ma') || (!q.hasOwnProperty('type') && typeof q.answer === 'object')) {
q.type = 'ma';
} else if ((q.hasOwnProperty('type') && (q.type === 'sa' || q.type === 'button' || q.type === 'true-false')) || (!q.hasOwnProperty('type') && typeof q.answer === 'string')) {
if (!q.hasOwnProperty('type') && typeof q.answer === 'string') {
q.type = 'sa';
}
if (q.type === 'true-false') {
q.choice = ['true', 'false'];
}
if (typeof q.answer === 'string') {
q.answer = [q.answer];
}
q.feedback_map = {};
for (j = 0; j < q.choice.length; j++) {
if (q.hasOwnProperty('feedback')) {
if (typeof q.feedback === 'string') {
feedback = q.feedback;
} else if (j < q.feedback.length) {
feedback = q.feedback[j];
}
}
q.feedback_map[q.choice[j]] = feedback;
}
} else {
alert("the setting file is broken");
}
delete q.feedback;
if (_cfg.settings.shuffle_choices) {	//shuffle choice order
if (q.type === 'sa' || q.type === 'ma' || q.type === 'button') {
q.choice.shuffle();
}
}
if (q.type === 'pulldown') {
for (j = 0; j < q.choice.length; j++) {
q.choice[j].shuffle();
}
}
if (q.type === 'sort' || q.type === 'wordbank') {
if (q.choice.length > 1) {
shuffle_flg = false;
while (!shuffle_flg) {
q.choice.shuffle();
shuffle_flg = is_shuffle(q.choice, q.answer);
}
}
}
if (q.type === 'match') {
if (q.choice.length > 1) {
shuffle_flg = false;
while (!shuffle_flg) {
q.choice.shuffle();
shuffle_flg = is_shuffled_match(q.choice, q.answer, q.match_key);
}
}
}
if (!q.hasOwnProperty('quiz_id')) {//generate ids
_cfg.questions[i].id = String(i + 1);
while (_cfg.questions[i].id.length < _cfg.settings.id_digits) {
_cfg.questions[i].id = '0' + _cfg.questions[i].id;
}
_cfg.questions[i].id = _cfg.settings.id_prefix + _cfg.questions[i].id;
}
}
}
function load_suspend_data_body(){
for (i = 0; i < suspend_data_body.length; i += 4) {
if(_cfg.questions[i / 4]){
_cfg.questions[i / 4].correct_count = parseInt(suspend_data_body.substring(i, i + 2), 10);
_cfg.questions[i / 4].incorrect_count = parseInt(suspend_data_body.substring(i + 2, i + 4), 10);
try{
_cfg.questions[i / 4].unknown_flag = parseInt(suspend_data_body_unknown.substring(i / 4, i / 4 + 1), 10);//unknown
}catch(e){
_cfg.questions[i / 4].unknown_flag = 0;
}
}
}
}
var suspend_data_array;
function load_suspend_data() {

var i,
suspend_data = getValue('cmi.suspend_data');
if (suspend_data && suspend_data.substring(0, 3) === '000') { // version < 5_2_0 : collect counts and incorrect counts are encoded in string
suspend_data_body = suspend_data.substring(4);
load_suspend_data_body();
} else if (suspend_data && suspend_data.substring(0, 1) === '{'){ // version >= 5_2_0 : collect counts and incorrect counts and player status are encoded in json
suspend_data_array = JSON.parse(suspend_data);
suspend_data_body = suspend_data_array['counts'];
suspend_data_body_unknown = suspend_data_array['counts_unknown'];
load_suspend_data_body();
if(suspend_data_array && suspend_data_array.hasOwnProperty("position")){
$("#start_quiz_button").css("visibility", "hidden");
$("#resume_quiz_button").show();
$("#restart_quiz_button").show();
}else{
$("#resume_quiz_button").hide();
$("#restart_quiz_button").hide();
}
} else {
suspend_data_body = '';
for (i = 0; i < _cfg.questions.length; i++) {
suspend_data_body += '0000';
}
}
for (i = 0; i < _cfg.questions.length; i++) {
if (!_cfg.questions[i].hasOwnProperty('correct_count')) {
_cfg.questions[i].correct_count = 0;
_cfg.questions[i].incorrect_count = 0;
}
}
}
function save_suspend_data() {

var i,
cc,
ic,
uc,
counts = '',
counts_unknown = '',
suspend_data;
cc = [];
ic = [];
uc = [];
for (i = 0; i < suspend_data_body.length; i += 4) {
cc[i / 4] = suspend_data_body.substring(i, i + 2);
ic[i / 4] = suspend_data_body.substring(i + 2, i + 4);
try{
uc[i / 4] = suspend_data_body_unknown.substring(i / 4, i / 4 + 1);
}catch(e){
uc[i / 4] = 0;
}
}
for (i = 0; i < _cfg.questions.length; i++) {
cc[_cfg.questions[i].iid] = format99(_cfg.questions[i].correct_count);
ic[_cfg.questions[i].iid] = format99(_cfg.questions[i].incorrect_count);
uc[_cfg.questions[i].iid] = _cfg.questions[i].unknown_flag ? '1' : '0';
}
for (i = 0; i < cc.length; i++) {
counts += cc[i] + ic[i];
counts_unknown += uc[i];
}
suspend_data = {version:suspend_data_version, counts:counts, counts_unknown:counts_unknown};
if(_cfg.settings.mode == 'normal' && _cfg.settings.suspendable == true && (state === 'quiz' || state === 'list' || state === 'suspended')){
suspend_data.state = state;
suspend_data.questions = _cfg.questions;
suspend_data.position = position;
suspend_data.state = state;
}
var str = JSON.stringify(suspend_data);
setValue('cmi.suspend_data', str);
}
function format99(num) {

if (num < 10) {
return '0' + num;
}
if (num < 100) {
return String(num);
}
return '99';
}

function order_by_section() {
'user strict'
var i, j, k = 0;
for (i = 0; i < _cfg.questions.length; i++) {
_cfg.questions[i].sort = 9999;
}
for (j = 0; j < _cfg.settings.question_count_array.length; j++){
var count = 0;

for(i = 0; i < _cfg.questions.length; i++){
if(_cfg.questions[i].section == j){
count++;
}
}
_cfg.settings.question_count_array[j] = Math.min(_cfg.settings.question_count_array[j], count);
while(_cfg.settings.question_count_array[j] > 0){
k = Math.floor(Math.random() * _cfg.questions.length);
if(_cfg.questions[k].sort == 9999){ //未だ選ばれていなければ
if(_cfg.questions[k].section == j){ //当該セクションの問題ならば
_cfg.questions[k].sort = j;
if(_cfg.settings.shuffle_questions){
_cfg.questions[k].sort += Math.random();
}
if(_cfg.settings.hasOwnProperty('section_name_array')){
_cfg.questions[k].section_name = _cfg.settings.section_name_array[j]
}
_cfg.settings.question_count_array[j]--;
}
}
}
}
if(_cfg.settings.shuffle_questions){
_cfg.questions.sort(function (a, b) {return a.sort - b.sort;});
}
}

function order_by_correct_answer_minus_incorrect_answer() {

_cfg.questions.sort(function (a, b) {return (a.correct_count - a.incorrect_count) - (b.correct_count - b.incorrect_count); });
}
function order_by_question_id() {

_cfg.questions.sort(function (a, b) {return a.iid - b.iid;});
}
function filter_by_correct_answer_count(limit) {

var i;
if (i === undefined) {
i = 0;
}
for (i = 0; i < _cfg.questions.length; i++) {
if (_cfg.questions[i].correct_count > limit) {
_cfg.questions.splice(i, 1);
i--;
}
}
}
function filter_by_status(limit){

var i, is_weak;
for (i = 0; i < _cfg.questions.length; i++) {
is_weak = true;
if(_cfg.questions[i].correct_count > limit){is_weak = false;console.log("correct enough");}
if(_cfg.questions[i].incorrect_count + _cfg.questions[i].correct_count == 0){is_weak = false;console.log("no attempt");}
if (is_weak === false) {
_cfg.questions.splice(i, 1);
i--;
}
}
}
function count_not_correctly_answered_questions(limit) {

var count = 0,
i;
for (i = 0; i < _cfg.questions.length; i++) {
if (!_cfg.questions[i].hasOwnProperty('correct_count')){
count += 1;
} else if (_cfg.questions[i].correct_count <= limit) {
count++;
}
}
return count;
}
function count_not_correctly_answered_questions_float(limit) {

var count = 0,
i;
for (i = 0; i < _cfg.questions.length; i++) {
if (!_cfg.questions[i].hasOwnProperty('correct_count')){
count += 1;
} else if (_cfg.questions[i].correct_count <= limit) {
count += 1 - (_cfg.questions[i].correct_count / limit);
}
}
return count;
}
function get_completion_rate() {

return String(Math.round((1 - (count_not_correctly_answered_questions_float(_cfg.settings.master_count) / _cfg.questions.length)) * 100));
}

function start_quiz(mode) {

startTime = new Date().getTime();
if (mode !== undefined) {
if (mode === 'not_answerd') {
filter_by_correct_answer_count(_cfg.settings.master_count - 1);
} else if (mode === 'review') {
order_by_correct_answer_minus_incorrect_answer();
_cfg.questions = _cfg.questions.slice(0, _cfg.settings.question_count);
} else if (mode === 'resume') {
position = suspend_data_array.position;
setTimeout(function(){
var new_state = suspend_data_array.state;
if (new_state == 'suspended'){
new_state = 'quiz';
}
cstate(new_state);
},50);
_cfg.questions = suspend_data_array.questions;
} else if (mode == 'weak'){
filter_by_status(_cfg.settings.master_count - 1)
}
}
_cfg.settings.question_count = Math.min(_cfg.questions.length, _cfg.settings.question_count);
$('#question_count').html(_cfg.settings.question_count);
if(mode !== 'resume'){
if (_cfg.settings.hasOwnProperty('question_count_array')) {
order_by_section();
}else if (_cfg.settings.shuffle_questions) {
_cfg.questions.shuffle();
}
}
cstate('quiz');
display_quiz();
init_timer();
show('#page_quiz');
}
function init_timer() {

if (_cfg.settings.time_limit) {
if (_cfg.settings.time_limit_mode == 'question') {
$(".list").remove();
$(".timer_wrapper").css("right", "5px");
}
$('.timer').countdown('destroy');
$('.timer:first'	  ).countdown({until: new Date(new Date().getTime() + _cfg.settings.time_limit * 1000	  ), format: 'HMS', onTick: checkTimeLimit, tickInterval: 1, compact: true});
$('.timer:not(:first)').countdown({until: new Date(new Date().getTime() + _cfg.settings.time_limit * 1000 + 100), format: 'HMS'						, tickInterval: 1, compact: true});
} else {
$('.timer').remove();
$('.timer_wrapper').remove();
$('.progress').remove();
}
}
function checkTimeLimit(t) {

var i;
if (finished) {
return;
}

var timeLeft = t[6] + t[5] * 60 + t[4] * 3600;
var width = timeLeft / _cfg.settings.time_limit * 100;
$(".progress-bar.bg-success").css("width", width.toPrecision(4) + "%");
var div = 30;
for(i = 0; i < div; i++){
var timeLeft = t[6] + t[5] * 60 + t[4] * 3600 - i / div;
var width = timeLeft / _cfg.settings.time_limit * 100;
setTimeout('$(".progress-bar.bg-success").css("width", '+width.toPrecision(4)+' + "%")', i / div * 1000);
}
for (i = 0; i < 7; i++) {
if (t[i] !== 0) {
return;
}
}
if (_cfg.settings.time_limit_mode == 'total'){
$('.ui-draggable-dragging').remove(); // Timelimit for all questions
check_answer("force");
show_result();
} else if (_cfg.settings.time_limit_mode == 'question'){ // Timelimit for each question.
check_answer("force");
}
}

var answerMathField;
function display_quiz() {
var i,
cq_question,
input_html,
choice_value,
choice_html,
scale,
match_list_width,
drag_list,
dropDownFunc;
setTimeout(function(){window.scrollTo(0,0); if(isIPhone && !API.hasOwnProperty('dummy')){parent.scrollTo(0, 0);}}, 50);
cq = _cfg.questions[position];
$('#position').html(position + 1);
$('#instant_feedback_msg').html('');
if(cq.hasOwnProperty('section_name')){
$('#section_name').html(cq.section_name);
$('#section_name').removeClass();
$('#section_name').addClass('section_name_' + (cq.section % 6));
if(cq.section_name == undefined){
$('#section_name').hide();
}else{
$('#section_name').show();
}
setTimeout(update_seigo_marks, 10);// wait until section name width is updated
}else{
update_seigo_marks();
}
$('#choices').empty();
$('#instant_response_disp').hide();
$('#instant_response_disp_none').hide();
$('#instant_result_wrapper').hide();
$('#instant_answer_wrapper').hide();
$('#instant_feedback_wrapper').hide();
$('#instant_response_container').hide();
$('#instant_response_background').hide();
$('#answer_mark_correct').hide();
$('#answer_mark_incorrect').hide();
if (has_next_quiz() && _cfg.settings.movable) {
$('#display_next_quiz').css('display', 'block');
} else {
$('#display_next_quiz').css('display', 'none');
}
if (has_prev_quiz() && _cfg.settings.movable) {
$('#display_prev_quiz').css('display', 'block');
} else {
$('#display_prev_quiz').css('display', 'none');
}
if (_cfg.settings.show_instant_result) {
$('#not_disp_answer_next_button').hide();
$('#not_disp_answer_mark_button').hide();
if (cq.type !== 'button' && cq.type !== 'true-false') {
$('#check_answer_button').show();
} else {
$('#check_answer_button').hide();
}
$('#check_answer_next_button').hide().attr('disabled', 'disabled');
} else {
$('#check_answer_button').hide();
if (!_cfg.settings.movable) {
$('#display_next_quiz').css('display', 'none');
$('#display_prev_quiz').css('display', 'none');
$('#not_disp_answer_mark_button').css('margin-left', '5px');
if (has_next_quiz()) {
if (cq.type == 'button' || cq.type == 'true-false') {
$('#not_disp_answer_next_button').hide();
} else {
$('#not_disp_answer_next_button').show();
}
} else {
$('#not_disp_answer_next_button').hide();
}
} else {
$('#not_disp_answer_next_button').hide();
}
if(_cfg.settings.hide_mark_button && has_next_quiz()){
$('#not_disp_answer_mark_button').hide();
}else{
if (cq.type == 'button' || cq.type == 'true-false') {
$('#not_disp_answer_mark_button').hide();
}else{
$('#not_disp_answer_mark_button').show();
}
}
}
if ($(':focus').attr('id') === 'check_answer_next_button') {
$('#check_answer_next_button').blur();
}
cq_question = cq.question;
if (cq.type === 'wordbank') {
cq_question = convert_drop_list(cq_question);
}
if (cq.type === 'pulldown') {
cq_question = convert_pulldown(cq_question);
}
cq_question = convert_image_tags(cq_question);
$('#question').html(cq_question);
if (cq.type === 'fill-in' || cq.type === 'fill-in-plus') {
input_html = '<div class="choice">' + input_template + '</div>';
if(_cfg.settings.use_number_type_for_input){
var numberOnly = true;
for(var i = 0; i < cq.answer.length; i++){
if(cq.answer[i].match(/^\d+$/) == null){
numberOnly = false;
}
}
if(numberOnly)input_html = input_html.replace("text", "number");
}
$('#choices').append(input_html);
$('#choices .input').attr("value", cq.student_response);
setTimeout(function () {
if($('#choices input').get(0).getBoundingClientRect().bottom < window.innerHeight - 20){
$('#choices input')[0].focus();
}
}, 100);
} else if (cq.type === 'fill-in-multi'){
input_html = '<div class="choice">' + fill_in_multi_template + '</div>';
if(_cfg.settings.use_number_type_for_input){
var numberOnly = true;
for(var i = 0; i < cq.answer.length; i++){
if(cq.answer[i].match(/^\d+$/) == null){
numberOnly = false;
}
}
if(numberOnly)input_html = input_html.replace(/text/g, "number");
}
$('#choices').append(input_html);
$('#choices .input').hide();
for(var i = 0; i < cq.answer.length ; i++){
$('#choices .pos' + i).show();
if(cq.label && cq.label[i]){
$('#choices div.pos'+i).html(cq.label[i]);
}
}
if(cq.student_response){
for(var i = 0; i < cq.answer.length ; i++){
$('#choices input.input.pos'+i).val(cq.student_response[i]);
}
}
setTimeout(function () {
if($('#choices input').get(0).getBoundingClientRect().bottom < window.innerHeight - 20){
$('#choices input')[0].focus();
}
}, 100);
} else if (cq.type === 'textarea'){
input_html = '<div class="choice">' + textarea_template + '</div>';
$('#choices').append(input_html);
$('#choices textarea').html(cq.student_response);
setTimeout(function () {
if($('#choices textarea').get(0).getBoundingClientRect().bottom < window.innerHeight - 20){
$('#choices textarea')[0].focus();
}
}, 100);
} else if (cq.type === 'button') {
for (i = 0; i < cq.choice.length; i++) {
choice_value = convert_image_tags(cq.choice[i]);
choice_html = button_template;
choice_html = choice_html.replace(/\[\[choice\]\]/g, choice_value);
choice_html = choice_html.replace(/\[\[choice_key\]\]/g, htmlencode(cq.choice[i]));
choice_html = choice_html.replace(/\[\[choice_key_js_escaped\]\]/g, htmlencode(jsencode(cq.choice[i])));
choice_html = choice_html.replace(/\[\[choice_id\]\]/g, 'choice_' + position + '_' + i);
choice_html = '<div class="choice">' + choice_html + '</div>';
$('#choices').append(choice_html);
}
if(_cfg.settings.pass){
choice_value = '分からない';
choice_html = button_template;
choice_html = choice_html.replace(/\[\[choice\]\]/g, choice_value);
choice_html = choice_html.replace(/\[\[choice_key\]\]/g, '-- pass --');
choice_html = choice_html.replace(/\[\[choice_key_js_escaped\]\]/g, htmlencode(jsencode('-- pass --')));
choice_html = choice_html.replace(/\[\[choice_id\]\]/g, 'choice_' + position + '_' + i);
choice_html = '<div class="choice">' + choice_html + '</div>';
$('#choices').append(choice_html);
}
} else if (cq.type === 'true-false') {
$('#choices').append(true_false_template);
} else if (cq.type === 'sort') {
setDragDropList();
setDragDropEvent();
setTimeout(function () {setDivHeight(); }, 10);
} else if (cq.type === 'match') {
setDragDropList();
setDragDropEvent();
setTimeout(function () {setDivHeight(); }, 10);
if (pc_flg) {
scale = _cfg.settings.scale;
match_list_width = $(".drag-choice").css("width").replace("px", "") * scale;
$(".drag-choice,.drop-choice-key").css("width", match_list_width);
}
} else if (cq.type === 'pulldown') {
if (cq.student_response) {
for (i = 0; i < cq.student_response.length; i++){
$($("select")[i]).val(cq.student_response[i]);
}
}
} else if (cq.type === 'wordbank') {
for (i = 0; i < cq.choice.length; i++) {
choice_value = cq.choice[i];
choice_html = wordbank_template;
choice_html = choice_html.replace(/\[\[choice\]\]/g, convert_image_tags(choice_value));
choice_html = choice_html.replace(/\[\[choice_key\]\]/g, htmlencode(cq.choice[i]));
choice_html = choice_html.replace(/\[\[choice_idx\]\]/g, i);
$('#choices').append(choice_html);
}
setDragDropEvent();
if (cq.student_response) {
dropDownFunc = function () {
if ($(this).find('.drag-value').attr('value') === cq.student_response[i]) {
drag_list = $(this).children('.drag-choice-wordbank');
drag_list.parent("#choices .drop-choice-list").css("display", "none");
$('#question .drop-choice-wordbank').eq(i).append(drag_list);
drag_list.prevAll('.wordbank-key').css("display", "none");
}
};
for (i = 0; i < cq.student_response.length; i++) {
if (cq.student_response[i] !== '未選択') {
$('.drop-choice-list').each(dropDownFunc);
}
}
}
} else {
for (i = 0; i < cq.choice.length; i++) {
choice_value = convert_image_tags(cq.choice[i]);
choice_html = '';
if (cq.type === 'ma') {
choice_html = multi_choice_template;
} else if (cq.type === 'sa') {
choice_html = single_choice_template;
}
choice_html = choice_html.replace(/\[\[choice\]\]/g, choice_value);
choice_html = choice_html.replace(/\[\[choice_key\]\]/g, htmlencode(cq.choice[i]));
choice_html = choice_html.replace(/\[\[choice_id\]\]/g, 'choice_' + position + '_' + i);
choice_html = '<div class="choice">' + choice_html + '</div>';
$('#choices').append(choice_html);
}
if(_cfg.settings.pass){
choice_value = '分からない';
choice_html = '';
if (cq.type === 'ma') {
choice_html = multi_choice_template;
} else if (cq.type === 'sa') {
choice_html = single_choice_template;
}
choice_html = choice_html.replace(/\[\[choice\]\]/g, choice_value);
choice_html = choice_html.replace(/\[\[choice_key\]\]/g, '-- pass --');
choice_html = choice_html.replace(/\[\[choice_id\]\]/g, 'choice_' + position + '_' + i);
choice_html = '<div class="choice">' + choice_html + '</div>';
$('#choices').append(choice_html);
}
$('.choice_checkbox').each(
function () {
if (cq.student_response && array_contain([$(this).attr('value')], cq.student_response)) {
$(this).attr('checked', 'checked');
}
}
);
$('.choice_radio').each(
function () {
if (cq.student_response && array_contain([$(this).attr('value')], cq.student_response)) {
$(this).attr('checked', 'checked');
}
}
);
setTimeout(function () {
if($('#choices input').get(0).getBoundingClientRect().bottom < window.innerHeight - 20){
$('#choices input')[0].focus();
}
}, 100);
}
if (cq.result) {
check_answer();
}
applyMathJax();
if(_cfg.settings.autoplay){
if($("audio.autoplay:first").length > 0){
$("audio.autoplay:first")[0].play()
}
}
cq.time = getCurrentTimeForSCORM12();
if(state === 'quiz_review' && _cfg.settings.show_instant_result === false){
$("#show_result").show();
$("#not_disp_answer_next_button").hide();
$("#not_disp_answer_mark_button").hide();
}
}
function updateLinkTarget(){
$("a").prop("target", "_blank")
}
function update_seigo_marks(){
if(_cfg.settings.show_seigo_count){
if($('#section_name').width() == 0){
$('#seigo_count').css("left", $('#question_count_wrapper').width() + 25);
} else {
$('#seigo_count').css("left", $('#question_count_wrapper').width() + $('#section_name').width() + 45);
}
$("#seigo_count").empty();
var seigoStr = "";
for(i = 0; i < Math.min(cq.correct_count, 3); i++){
seigoStr += "<i class='fa fa-circle-o fa-2x text-success' aria-hidden='true'></i> ";
}
if(_cfg.settings.mode == 'master'){
for(i = cq.correct_count; i < _cfg.settings.master_count; i++){
seigoStr += "<i class='fa fa-square-o fa-2x text-muted' aria-hidden='true'></i> ";
}
}
for(i = 0; i < Math.min(cq.incorrect_count, 3); i++){
seigoStr += "<i class='fa fa-close fa-2x text-danger' aria-hidden='true'></i> ";
}
$("#seigo_count").html(seigoStr);
}
}

var applyMathJaxStopper = false;
var imgSize = {};
function applyMathJax(){

if(applyMathJaxStopper)return;
applyMathJaxStopper = true;
setTimeout(function(){applyMathJaxStopper = false;}, 50);
updateLinkTarget();
$("img").on("load", function(){
var img = new Image();
img.src = $(this).attr('src');
var width = img.width;
var height = img.height;
imgSize[$(this).data("qgsrc")] = width + "x" + height;
initPhotoSwipeFromDOM('.my-gallery');
});
if(_cfg.settings.math){
MathJax.Callback.Queue(["Typeset",MathJax.Hub,"preview"],[function(){setDivWidth()}]);
}
}
function display_prev_quiz() {

if (has_prev_quiz()) {
store_answer(false);
position--;
display_quiz();
}
}
function display_next_quiz() {

if (has_next_quiz()) {
store_answer(false);
position++;
display_quiz();
}
if (_cfg.settings.time_limit_mode == 'question'){
init_timer();
}
}
function has_prev_quiz() {

return position > 0;
}
function has_next_quiz() {

return position < _cfg.settings.question_count - 1;
}
var isOneTimeAudioPlaying = false;
function convert_image_tags(str) {

if(_cfg.settings.autoplay){
str = str.replace(/\[\[\[(.*?[.]mp3)\]\]\]/g, '<span>'+
'<audio class="audio_with_controls autoplay" src="$1" preload style="vertical-align: middle;margin-left:5px;" onended="isOneTimeAudioPlaying = false"/>' +
'</span>');
}else{
str = str.replace(/\[\[\[(.*?[.]mp3)\]\]\]/g, '<span>'+
'<audio class="audio_with_controls		 " src="$1" preload style="vertical-align: middle;margin-left:5px;" onended="isOneTimeAudioPlaying = false" />' +
'<input type="button" value="音声再生" onclick="if(isOneTimeAudioPlaying == false){$(this).parent().children()[0].play();this.disabled = true;isOneTimeAudioPlaying = true;}">' +
'</span>');
}
if(isIPhone){
str = str.replace(/\[\[(.*?[.]mp3)\]\]/g,
'<audio class="audio_with_controls autoplay" src="$1" preload controls controlslist="nodownload" style="vertical-align: middle;margin-left:5px;width:160px; margin-left:40px;"/>');
}else{
str = str.replace(/\[\[(.*?[.]mp3)\]\]/g,
'<audio class="audio_with_controls autoplay" src="$1" preload controls controlslist="nodownload" style="vertical-align: middle;margin-left:5px;width:210px; margin-left:40px;" onclick="this.play()"/>');
}
str = str.replace(/\{\{([^\}]*?)\}\}/g, '<img src="$1" class="thumnaildefault" style="margin: 0px;"/>');
str = str.replace(/\[\[([^\]]*?)\]\]/g, '<div class="my-gallery">' +
'<figure>' +
'<a href="$1" data-size="800x600" class="imglink">' +
'<img src="$1" data-original-src="$1" alt="$1" data-qgsrc="$1">' +
'</a>' +
'</figure>' +
'</div>');
return str;
}
function convert_drop_list(str) {

return str.replace(/\{([^\}]{1,2})\}/g, '<span class = "drop-choice-wordbank"><span class="wordbank-key">（$1）</span></span>');
}
function convert_pulldown(str) {

return str.replace(/\{([^\}]{1,2})\}/g, function(i,j){
var list = cq['choice'][j - 1],
ret = "",
k;
ret += "<select class='mdb-select'>";
ret += "<option value=''>   </option>";
for (k = 0; k < list.length ; k++){
ret += "<option>" + list[k] + "</option>"
}
ret += "</select>";
return ret
});
}
function button_click(value) {//Question type:button

last_button_value = value;
check_answer();
}
function store_answer(no_alert) {

var checked_answer,
student_response,
selected;
if (state !== 'quiz') {
return;
}
if (cq.hasOwnProperty('result')) {
return;
}
if (cq.type === 'sa' || cq.type === 'ma') {
checked_answer = $('.choice_radio:checked');
student_response = [];
if (checked_answer.length === 0) {
checked_answer = $('.choice_checkbox:checked');
}
if (checked_answer.length === 0) {
if (no_alert === undefined) {
qalert(_cfg.settings.messages.not_selected);
return;
}
} else {
checked_answer.each(
function () {
student_response.push($(this).attr('value'));
}
);
}
} else if (cq.type === 'fill-in' || cq.type === 'fill-in-plus' || cq.type === 'textarea') {
student_response = $('.input').val();
if (student_response.length === 0) {
if (no_alert === undefined) {
qalert(_cfg.settings.messages.not_filled);
return;
}
}
} else if (cq.type === 'fill-in-multi') {
student_response = [];
$('.input').each(function () {
if(student_response.length < cq.answer.length){
student_response.push($(this).val());
}
});
} else if (cq.type === 'button' || cq.type === 'true-false') {
student_response = last_button_value;
last_button_value = false;
} else if (cq.type === 'sort' || cq.type === 'match') {
student_response = [];
$(".drag-choice").each(function () {
student_response.push($(this).find('.drag-value').attr('value'));
});
if (!change_sort_flg && !is_shuffle(cq.choice, student_response)) {
student_response = [];
if (no_alert === undefined) {
qalert(_cfg.settings.messages.not_sorted);
return;
}
}
} else if (cq.type === 'wordbank') {
student_response = [];
selected = true;
$(".drop-choice-wordbank").each(function () {
if ($(this).children(".drag-choice-wordbank").length === 0) {
selected = false;
if (no_alert === undefined) {
qalert(_cfg.settings.messages.not_selected);
return false;
}
student_response.push('未選択');
return true;
}
student_response.push($(this).find('.drag-value').attr('value'));
});
if (!selected && no_alert === undefined) {
return;
}
} else if (cq.type === 'pulldown') {
student_response = [];
selected = true;
$("select").each(function (i, j) {
if(!$(j).val()){
selected = false;
if (no_alert === undefined) {
qalert(_cfg.settings.messages.not_selected);
return false;
}
student_response.push('未選択');
return true;
}
student_response.push($(j).val());
});
if (!selected && no_alert === undefined) {
return;
}
}
cq.student_response = student_response;
}
function check_answer(no_alert, no_store) {

var is_correct,
i,
student_response,
j,
answerArray,
hasCorrectAnswer,
correct_cnt = 0,
incorrect_cnt = 0,
ct;
if (no_store === undefined) {
store_answer(no_alert);
}
if (!cq.hasOwnProperty('student_response')) {
if (cq.type === 'sa' || cq.type === 'ma' || cq.type === 'sort' || cq.type === 'match' || cq.type === 'wordbank' || cq.type == 'fill-in-multi' || cq.type == 'pulldown') {
cq.student_response = [];
} else if (cq.type === 'fill-in' || cq.type === 'fill-in-plus' || cq.type === 'textarea') {
cq.student_response = '';
}
}
student_response = cq.student_response;
if (cq.type === 'wordbank' && $.inArray("未選択", student_response) !== -1) {
cq.student_response = [];
student_response = [];
}
if ((student_response && student_response.length) || no_alert !== undefined) {
if (cq.type === 'sa' || cq.type === 'ma') {
is_correct = array_equal(student_response, cq.answer);
if(is_correct){
correct_cnt++;
}else{
incorrect_cnt++
}
cq.unknown_flag = student_response == '-- pass --';
} else if (cq.type === 'button' || cq.type === 'true-false') {
is_correct = student_response === cq.answer[0];
if(is_correct){
correct_cnt++;
}else{
incorrect_cnt++
}
cq.unknown_flag = student_response == '-- pass --';
} else if (cq.type === 'fill-in' || cq.type === 'textarea') {
if (student_response.length === 0) {
if (no_alert === undefined) {
qalert(_cfg.settings.messages.not_filled);
return;
}
}
is_correct = array_contain([student_response], cq.answer);
if(is_correct){
correct_cnt++;
}else{
incorrect_cnt++
}
} else if (cq.type === 'fill-in-multi') {
if (student_response === false || student_response.length === 0) {
is_correct = false;
incorrect_cnt++;
} else {
is_correct = true;
cq.resultArray = [];
for (i = 0; i < cq.answer.length; i++) {
hasCorrectAnswer = false;
answerArray = cq.answer[i].split("::");
for (j = 0; j < answerArray.length; j++){
if (is_equal(student_response[i], answerArray[j])) {
hasCorrectAnswer = true;
}
}
cq.resultArray[i] = hasCorrectAnswer;
if(hasCorrectAnswer == false){
$(".fill_in_multi").eq(i).css("color", "red");
is_correct = false;
incorrect_cnt++;
}else{
$(".fill_in_multi").eq(i).css("color", "green");
correct_cnt++;
}
}
}
} else if (cq.type === 'fill-in-plus') {
if (student_response.length === 0) {
if (no_alert === undefined) {
qalert(_cfg.settings.messages.not_filled);
return;
}
}
is_correct = array_contain_fillin_plus([student_response], cq.answer);
if(is_correct){
correct_cnt++;
}else{
incorrect_cnt++
}
} else if (cq.type === 'sort') {
if (student_response.length === 0) {
is_correct = false;
incorrect_cnt++;
} else {
is_correct = true;
for (i = 0; i < student_response.length; i++) {
if (student_response[i] !== cq.answer[i]) {
is_correct = false;
break;
}
}
disableDragDrop($(".drag-choice"), $(".drop-choice"));
if(is_correct){
correct_cnt++;
}else{
incorrect_cnt++
}
}
} else if (cq.type === 'match') {
if (student_response.length === 0) {
is_correct = false;
} else {
is_correct = true;
for (i = 0; i < student_response.length; i++) {
if (_cfg.settings.show_instant_result && _cfg.settings.show_correct_answer) {
if (cq.match_key[cq.answer.findIndex(function(j){return j == student_response[i];})] == cq.match_key[i]){
$("#choice_" + i).find("li").css("color", "green");
correct_cnt++;
} else if(student_response[i] == cq.answer[i]) {
$("#choice_" + i).find("li").css("color", "green");
correct_cnt++;
} else {
if ($("#choice_" + i).find(".disp_correct").length === 0) {
$("#choice_" + i).find("li").css("color", "red");
$("#choice_" + i).find("li").append("<span class='disp_correct' style='color:green'>（" + cq.answer[i] + "）</span>");
}
is_correct = false;
incorrect_cnt++;
}
} else {
if (cq.match_key[student_response.findIndex(function(j){return j == cq.answer[i];})] == cq.match_key[i]){
correct_cnt++;
} else {
is_correct = false;
incorrect_cnt++;
}
}
}
disableDragDrop($(".drag-choice"), $(".drop-choice"));
}
} else if (cq.type === 'wordbank') {
if (student_response.length === 0) {
is_correct = false;
} else {
is_correct = true;
for (i = 0; i < student_response.length; i++) {
if (_cfg.settings.show_instant_result && _cfg.settings.show_correct_answer) {
if (student_response[i] === cq.answer[i]) {
$("#question .drag-choice-wordbank").eq(i).css("color", "green");
correct_cnt++;
} else {
if ($("#question .drag-choice-wordbank").eq(i).children(".disp_correct").length === 0) {
$("#question .drag-choice-wordbank").eq(i).css("color", "red");
$("#question .drag-choice-wordbank").eq(i).append("<span class='disp_correct' style='color:green'>（" + convert_image_tags(cq.answer[i]) + "）</span>");
}
is_correct = false;
incorrect_cnt++;
}
} else {
if (student_response[i] === cq.answer[i]) {
correct_cnt++;
}else{
is_correct = false
incorrect_cnt++;;
}
}
}
disableDragDrop($(".drag-choice-wordbank"), $(".drop-choice-wordbank"));
}
} else if (cq.type == 'pulldown'){
if (student_response.length === 0) {
is_correct = false;
} else {
is_correct = true;
for (i = 0; i < student_response.length; i++) {
if (_cfg.settings.show_instant_result && _cfg.settings.show_correct_answer) {
if (student_response[i] !== cq.answer[i]) {
is_correct = false;
$($("select")[i]).css("color", "red");
$($("select")[i]).append("hoge");
$($("select")[i]).after('<span style="color:green">' + cq.answer[i] + '</div>')
incorrect_cnt++;
}else{
$($("select")[i]).css("color", "green");
correct_cnt++;
}
} else {
if (student_response[i] !== cq.answer[i]) {
is_correct = false
incorrect_cnt++;;
}else{
correct_cnt++;
}
}
}
}
$("option:not(:selected)").attr("disabled", true);
}
if (_cfg.settings.time_limit_mode == 'question') {
$('.timer').countdown("pause");
}
$('.input').attr('disabled', 'disabled');
$('.choice_radio').attr('disabled', 'disabled');
$('.choice_checkbox').attr('disabled', 'disabled');
set_result(is_correct, no_alert);
if (_cfg.settings.partial_score){
cq.correctness = correct_cnt / (correct_cnt + incorrect_cnt);
}else{
cq.correctness = is_correct ? 1 : 0;
}
if (_cfg.settings.show_instant_result) {
show_feedback();
if($('#instant_feedback_msg').html()){
var height =  window.parent.screen.height;
if($("body").height() < height){
height = $("body").height();
}
$("#instant_response_disp").css("top", height * 0.6 - 40);


}else{
$("#instant_response_disp").css("top", 150 - 40);


}

if(no_alert === undefined){
applyMathJax();
}
$('#instant_response_container').show(1);
$('#instant_response_background').show();
$("#instant_response_container").scrollTop(0);
if (count_incorrect_answers() + count_correct_answers() < _cfg.settings.question_count) {
if (has_next_quiz()) {
$('#check_answer_next_button').show();
$('#check_answer_next_button').removeAttr('disabled');
}
setTimeout(function () {$('#check_answer_next_button').focus(); }, 100);
} else {
$('#show_result').show();
$('#abort_quiz').hide();
setTimeout(function () {$('#show_result').focus(); }, 100);
}
$('#check_answer_button').hide();
}
}
update_seigo_marks();
if (_cfg.settings.show_instant_result == false) {
if (!_cfg.settings.movable) {
if(cq.type == 'button' || cq.type == 'true-false'){
if(has_next_quiz()){
display_next_quiz();
}else{
mark_quiz();
}
}
}
}
}
function check_all_answers() {

var i;
store_answer(false);
for (i = 0; i < _cfg.settings.question_count; i++) {
cq = _cfg.questions[i];
check_answer("no_alert", "no_store");
}
}
function array_equal(a1, a2) {

return array_contain(a1, a2) && array_contain(a2, a1);
}
function array_contain(a1, a2) {

var i,
j;
for (i = 0; i < a1.length; i++) {
for (j = 0; j < a2.length; j++) {
if (is_equal(a1[i], a2[j])) {
break;
}
}
if (j === a2.length) {
return false;
}
}
return true;
}
function array_contain_fillin_plus(a1, a2) {

var j,
k,
subcorrect,
answers;
var answers = clone(a2);
for (j = 0; j < answers.length; j++){
answers[j] = answers[j].split(",");
}
var responseArray = a1[0].split(/[ 　,、，	]+/);
for (j = 0; j < responseArray.length; j++){
subcorrect = false;
for (k = 0; k < answers.length; k++){
if(array_contain([responseArray[j]], answers[k])){
answers.splice(k, 1);
subcorrect = true;
break;
}
}
if(subcorrect == false)return false;
}
return answers.length == 0;
}
function is_equal(a1, a2) {

if (cq.type === 'sa' || cq.type === 'ma') {
return a1 === a2;
}
if (_cfg.settings.ignore_case) {
a1 = a1.toLowerCase();
a2 = a2.toLowerCase();
}
if (_cfg.settings.ignore_whitespace) {
a1 = a1.replace(/[\s　]+/g, '');
a2 = a2.replace(/[\s　]+/g, '');
}
if (_cfg.settings.ignore_whitespace_count) {
a1 = a1.replace(/[\s　]+/g, ' ');
a2 = a2.replace(/[\s　]+/g, ' ');
}
if (_cfg.settings.ignore_zenhan){
a1 = hankana2zenkana(zen2han(a1));
a2 = hankana2zenkana(zen2han(a2));
}
if (_cfg.settings.trim) {
a1 = a1.replace(/^[\s　]+|[\s　]+$/g, '');
a2 = a2.replace(/^[\s　]+|[\s　]+$/g, '');
}
a1 = a1.replace(/&#0*58;/g, ':');
a2 = a2.replace(/&#0*58;/g, ':');
return a1 === a2;
}
function zen2han(str, tilde, mark, hankana, space, alpha, num) {
if (alpha !== false) {
str = str.replace(/[Ａ-Ｚａ-ｚ]/g, function (s) {
return String.fromCharCode(s.charCodeAt(0) - 65248);
});
}
if (num !== false) {
str = str.replace(/[０-９]/g, function (s) {
return String.fromCharCode(s.charCodeAt(0) - 65248);
});
}
if (mark !== false) {
var reg = /[！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝]/g;
str = str.replace(reg, function (s) {
return String.fromCharCode(s.charCodeAt(0) - 65248);
}).replace(/[‐－―]/g, '-');
}
if (tilde !== false) {
str = str.replace(/[～〜]/g, '~');
}
if (space !== false) {
str = str.replace(/　/g, ' ');
}
if (hankana === true) {
var map = {'。': '｡', '、': '､', '「': '｢', '」': '｣', '・': '･'};
var reg = new RegExp('(' + Object.keys(map).join('|') + ')', 'g');
str = str.replace(reg, function (match) {
return map[match];
});
}
return str;
}
var hankana2zenkana = function (str) {
var kanaMap = {
'ｶﾞ': 'ガ', 'ｷﾞ': 'ギ', 'ｸﾞ': 'グ', 'ｹﾞ': 'ゲ', 'ｺﾞ': 'ゴ',
'ｻﾞ': 'ザ', 'ｼﾞ': 'ジ', 'ｽﾞ': 'ズ', 'ｾﾞ': 'ゼ', 'ｿﾞ': 'ゾ',
'ﾀﾞ': 'ダ', 'ﾁﾞ': 'ヂ', 'ﾂﾞ': 'ヅ', 'ﾃﾞ': 'デ', 'ﾄﾞ': 'ド',
'ﾊﾞ': 'バ', 'ﾋﾞ': 'ビ', 'ﾌﾞ': 'ブ', 'ﾍﾞ': 'ベ', 'ﾎﾞ': 'ボ',
'ﾊﾟ': 'パ', 'ﾋﾟ': 'ピ', 'ﾌﾟ': 'プ', 'ﾍﾟ': 'ペ', 'ﾎﾟ': 'ポ',
'ｳﾞ': 'ヴ', 'ﾜﾞ': 'ヷ', 'ｦﾞ': 'ヺ',
'ｱ': 'ア', 'ｲ': 'イ', 'ｳ': 'ウ', 'ｴ': 'エ', 'ｵ': 'オ',
'ｶ': 'カ', 'ｷ': 'キ', 'ｸ': 'ク', 'ｹ': 'ケ', 'ｺ': 'コ',
'ｻ': 'サ', 'ｼ': 'シ', 'ｽ': 'ス', 'ｾ': 'セ', 'ｿ': 'ソ',
'ﾀ': 'タ', 'ﾁ': 'チ', 'ﾂ': 'ツ', 'ﾃ': 'テ', 'ﾄ': 'ト',
'ﾅ': 'ナ', 'ﾆ': 'ニ', 'ﾇ': 'ヌ', 'ﾈ': 'ネ', 'ﾉ': 'ノ',
'ﾊ': 'ハ', 'ﾋ': 'ヒ', 'ﾌ': 'フ', 'ﾍ': 'ヘ', 'ﾎ': 'ホ',
'ﾏ': 'マ', 'ﾐ': 'ミ', 'ﾑ': 'ム', 'ﾒ': 'メ', 'ﾓ': 'モ',
'ﾔ': 'ヤ', 'ﾕ': 'ユ', 'ﾖ': 'ヨ',
'ﾗ': 'ラ', 'ﾘ': 'リ', 'ﾙ': 'ル', 'ﾚ': 'レ', 'ﾛ': 'ロ',
'ﾜ': 'ワ', 'ｦ': 'ヲ', 'ﾝ': 'ン',
'ｧ': 'ァ', 'ｨ': 'ィ', 'ｩ': 'ゥ', 'ｪ': 'ェ', 'ｫ': 'ォ',
'ｯ': 'ッ', 'ｬ': 'ャ', 'ｭ': 'ュ', 'ｮ': 'ョ',
'｡': '。', '､': '、', 'ｰ': 'ー', '｢': '「', '｣': '」', '･': '・'
};

var reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
return str
.replace(reg, function (match) {
return kanaMap[match];
})
.replace(/ﾞ/g, '゛')
.replace(/ﾟ/g, '゜');
};
function show_feedback(){
show_ox_fb();
show_sa_fb();
}
function show_sa_fb() {

if ((cq.type === 'sa' || cq.type === 'button' || cq.type === 'true-false') && cq.feedback_map[cq.student_response]) {
$('#instant_feedback_msg').html(convert_image_tags(cq.feedback_map[cq.student_response]));
$('#instant_feedback_wrapper').show();
}
}
function show_ox_fb() {

if (cq.result === 'correct') {
if (cq.hasOwnProperty('feedback_tf') && cq.feedback_tf[0]) {
$('#instant_feedback_msg').html(convert_image_tags(cq.feedback_tf[0]));
$('#instant_feedback_wrapper').show();
}
} else {
if (cq.hasOwnProperty('feedback_tf') && cq.feedback_tf[1]) {
$('#instant_feedback_msg').html(convert_image_tags(cq.feedback_tf[1]));
$('#instant_feedback_wrapper').show();
}
}
}
function play_correct_sound() {

if (_cfg.settings.sound){
document.getElementById("correct_sound").load();
document.getElementById("correct_sound").play();
}
}
function play_incorrect_sound() {

if (_cfg.settings.sound){
document.getElementById("incorrect_sound").load();
document.getElementById("incorrect_sound").play();
}
}
function play_dragged_sound() {

if (_cfg.settings.sound){
document.getElementById("dragged_sound").load();
document.getElementById("dragged_sound").play();
}
}
function set_result(is_correct, no_alert) {

if (is_correct) {
if (_cfg.settings.show_instant_result) {
response_disp(true);
$('#instant_result_msg').html(_cfg.settings.messages.correct);
$('#instant_result_wrapper').show();
$('#answer_mark_correct').show();
if (!cq.hasOwnProperty('result')) {
play_correct_sound();
}
}
if (!cq.hasOwnProperty('result')) {
cq.result = 'correct';
cq.correct_count++;
}
} else {
if (_cfg.settings.show_instant_result) {
response_disp(true);
$('#instant_result_msg').html(_cfg.settings.messages.incorrect);
$('#instant_result_wrapper').show();
$('#answer_mark_incorrect').show();
if (!cq.hasOwnProperty('result')) {
play_incorrect_sound();
}
if (_cfg.settings.show_correct_answer) {
$('#instant_answer_msg').html(formatter(cq, 'answer'));
$('#instant_answer_wrapper').show();
}
}
if (!cq.hasOwnProperty('result')) {
if (cq.student_response && cq.student_response.length > 0) {
cq.result = 'incorrect';
cq.incorrect_count++;
} else {
cq.result = 'incorrect';
}
}
}
}
function response_disp(disp_flg) {

if (disp_flg) {
$('#instant_response_background').css("opacity", "1");
$('#instant_result_wrapper').css("opacity", "1");
$('#instant_answer_wrapper').css("opacity", "1");
$('#instant_feedback_wrapper').css("opacity", "1");
$('#instant_response_disp').hide();
$('#instant_response_disp_none').show();
$('#instant_response_container').css("overflow-y", "auto");
$('#answer_mark').show();
} else {
$('#instant_response_background').css("opacity", "0.01");
$('#instant_result_wrapper').css("opacity", "0.01");
$('#instant_answer_wrapper').css("opacity", "0.01");
$('#instant_feedback_wrapper').css("opacity", "0.01");
$('#instant_response_disp').show();
$('#instant_response_disp_none').hide();
$('#instant_response_container').css("overflow-y", "visible");
$('#answer_mark').hide();
}
}
function check_choiced_next_quiz() {

if (has_next_quiz()) {
store_answer();
if (!cq.hasOwnProperty('student_response')) {
return;
}
if (!cq.student_response || !cq.student_response.length || (cq.type === 'wordbank' && $.inArray("未選択", cq.student_response) !== -1)) {
return;
}
position++;
display_quiz();
}
}
function mark_quiz() {

var is_all_question_answered,
i,
q;
if (!_cfg.settings.show_instant_result) {
if (!_cfg.settings.movable && position + 1 === _cfg.settings.question_count) {
store_answer();
if (!cq.hasOwnProperty('student_response')) {
return;
}
if (!cq.student_response || !cq.student_response.length || (cq.type === 'wordbank' && $.inArray("未選択", cq.student_response) !== -1)) {
return;
}
} else {
store_answer(false);
}
is_all_question_answered = true;
for (i = 0; i < _cfg.settings.question_count; i++) {
q = _cfg.questions[i];
if (!q.hasOwnProperty('student_response')) {
is_all_question_answered = false;
} else if (!q.student_response ||
!q.student_response.length ||
(q.type === 'wordbank' && $.inArray("未選択", q.student_response) !== -1)) {
is_all_question_answered = false;
}
}
if (!is_all_question_answered) {
if (!confirm(_cfg.settings.messages.confirm_midstream_mark)) {
return;
}
} else if (_cfg.settings.movable) {
if (!confirm(_cfg.settings.messages.confirm_mark)) {
return;
}
}
show_result();
}
}
/*******************
* Show List
*******************/
function show_list() {

pushed_state = state;
store_answer(false);
cstate('list');
$('#result_table tbody').empty();
make_result_table('#result_table1');
show('#page_list');
if (isIPhone || isIPad || isAndroid) {
return;
}
$('#page_list div.scrollbartable').remove();
applyMathJax();
}
function get_hide_list_n(i) {

return function () {hide_list(i); };
}

function make_result_table(sel) {

var result_detail_record,
q,
i,
qOrig,
elem;
$('.result_detail').remove();
for (i = 0; i < _cfg.settings.question_count; i++) {//設問毎に実行
if (sel === '#result_table1') {
result_detail_record = result_detail_template1.clone();
} else {
result_detail_record = result_detail_template2.clone();
}
q = clone(_cfg.questions[i]);
qOrig = _cfg.questions[i];
$('.list_to_quiz', result_detail_record).click(get_hide_list_n(i));
$('.no', result_detail_record).html(i + 1);
if (!qOrig.hasOwnProperty("student_response") || q.student_response === '' || q.student_response === false) {
q.student_response = '';
}
if (!qOrig.hasOwnProperty("result") || q.result === '' || (sel === '#result_table1' && !_cfg.settings.show_instant_result)) {
q.result = '';
}
var p = _cfg.settings.score_weighting ? q.weight : 100 / _cfg.settings.question_count;
if (qOrig.hasOwnProperty("correctness")) {
qOrig.scoreStr = q.scoreStr = (p * q.correctness) + "/" + p;
} else {
qOrig.scoreStr = q.scoreStr = "?/" + p;
}
qOrig.backToQuestion = q.backToQuestion = "<input type=button value=表示 class='btn btn-primary btn-sm' onclick=backToQuestion(" + i + ") style=''>";
for (elem in q) {
if (qOrig.hasOwnProperty(elem)) {
$('.' + elem, result_detail_record).html(wrap_div(formatter(q, elem)));
}
}
delete q.scoreStr;
delete q.backToQuestion;
$('.result', result_detail_record).html(_cfg.settings.messages[q.result]);
$(sel + ' tbody').append(result_detail_record);
}
if (_cfg.settings.score_weighting === false && _cfg.settings.partial_score === false) {
$(".scoreStr").remove();
}






applyMathJax();
}
function formatter(q, elem) {

var dispAnswerArray,
i,
answers,
j,
k,
ansArray;
if (elem == 'student_response'){
if (q[elem] == '-- pass --'){
return "分からない";
}
}
if (q.type === 'true-false') {
if (q[elem] === undefined) {
return '-';
}
if (q[elem][0] === 'true' || q[elem] === 'true') {
return "正しい";
}
if (q[elem][0] === 'false' || q[elem] === 'false') {
return "間違い";
}
return convert_image_tags(String(q[elem]));
}
if (q.type === 'fill-in-multi') {
if(elem == 'answer'){
dispAnswerArray = [];
k = 0;
for (i = 0; i < q[elem].length; i++) {
answers = q[elem][i].split('::');
if(!q.resultArray || q.resultArray[i] == false){
for (j = 0; j < answers.length; j++) {
if (j === 0) {
dispAnswerArray[k] = answers[j];
} else {
dispAnswerArray[k] = dispAnswerArray[i] + '(' + answers[j] + ')';
}
}
if(q.label && q.label[i]){
dispAnswerArray[k] = q.label[i] + "." +  dispAnswerArray[k];
}
k++;
}
}
return convert_image_tags(dispAnswerArray.join(', '));
}
}
if (typeof q[elem] === 'object') {
if (q.type === 'fill-in-plus' && elem === 'answer') {
answers = q[elem];
dispAnswerArray = new Array(answers.length);
for (i = 0; i < answers.length; i++) {
ansArray = answers[i].split(',');
for (j = 0; j < ansArray.length; j++) {
if (j === 0) {
dispAnswerArray[i] = ansArray[j];
} else {
dispAnswerArray[i] = dispAnswerArray[i] + '(' + ansArray[j] + ')';
}
}
}
return convert_image_tags(dispAnswerArray.join(', '));
}
if (q[elem].hasOwnProperty('length')) {
return convert_image_tags(q[elem].join(', '));
}
} else {
if (q[elem] === undefined) {
return '-';
}
return convert_image_tags(String(q[elem]));
}
}
function hide_list(num) {

if (num !== undefined) {
position = num;
}
cstate(pushed_state);
if (state === 'quiz' || state === 'feedback') {
display_quiz();
show('#page_quiz');
} else if (state === 'result') {
show('#page_result');
}
}
function show_result() {
var diff;
var score;
var result;
finished = true;
$('.timer_wrapper').remove();
if (state === 'result') {
return;
}
if (state === 'quiz_review'){
cstate('result');
show('#page_result');
return;
}
cstate('result');
check_all_answers();
$('#choices').empty();
$('#question').empty();
check_all_answers();
try{save_suspend_data();}catch(e){console.log("IE and Edge do not support localStorage with local file.");}
score = get_score();
if (_cfg.settings.score_weighting) {
$('.score').html(get_normal_score() + '点');
} else {
$('.score').html(get_normal_score() + '点(' + count_correct_answers() + '/' + _cfg.settings.question_count + ')');
}

result = get_result();
$('td.result').html(_cfg.settings.messages[result]);
if (_cfg.settings.finish_at_result_page) {
finalize_scorm();
}
if(_cfg.settings.mode == 'normal'){
$('.passing_score').html(_cfg.settings.passing_score + '点');
$("#summary_table_normal").show();
$("#summary_table_master").hide();
}else{
$('.passing_score').html(_cfg.settings.passing_score + '%');
$("#summary_table_normal").hide();
$("#summary_table_master").show();
$(".progressBody").html(origProgress + "%→" + score + '%');
}
make_result_table('#result_table2');
if(_cfg.settings.hide_result_summary){
$("#summary_table_normal").hide();
$("#summary_table_master").hide();
}
if(_cfg.settings.hide_result_detail){
$("#result_table2").hide()
}
if(result == 'passed'){
if(_cfg.settings.messages.passed_title || _cfg.settings.messages.passed_body){
$("#message_passed_head").show();
$("#messages_passed_title").html(_cfg.settings.messages.passed_title);
$("#messages_passed_body"). html(_cfg.settings.messages.passed_body);
}else{
$("#messages_passed_head").hide();
}
if(_cfg.settings.certificate){
$("#goto_certificate_button").show();
$("#restart_button").hide();
}else{
$("#goto_certificate_button").hide();
}
}else{
if(_cfg.settings.messages.failed_title || _cfg.settings.messages.failed_body){
$("#message_passed_head").show();
$("#messages_passed_title").html(_cfg.settings.messages.failed_title);
$("#messages_passed_body"). html(_cfg.settings.messages.failed_body);
}else{
$("#message_passed_head").hide();
}
$("#goto_certificate_button").hide();
}
show('#page_result');
}
function count_correct_answers() {

var count = 0,
i;
for (i = 0; i < _cfg.settings.question_count; i++) {
if (_cfg.questions[i].result === "correct") {
count++;
}
}
return count;
}
function count_incorrect_answers() {

var count = 0,
i;
for (i = 0; i < _cfg.settings.question_count; i++) {
if (_cfg.questions[i].result === "incorrect") {
count++;
}
}
return count;
}
function get_normal_score() {

if (_cfg.settings.score_weighting === true){
return get_weighted_score();
}else{
return get_unweighted_score();
}
}
function get_weighted_score(){

var score = 0,
i;
for (i = 0; i < _cfg.settings.question_count; i++) {
score += _cfg.questions[i].weight * _cfg.questions[i].correctness;
}
return score;
}
function get_unweighted_score(){

var score = 0,
i;
for (i = 0; i < _cfg.settings.question_count; i++) {
score += _cfg.questions[i].correctness;
}
return Math.round(score / _cfg.settings.question_count * 100);
}
function get_score() {

try{
if(_cfg.settings.mode == 'normal'){
return get_normal_score();
}else if(_cfg.settings.mode == 'master'){
var i,
suspend_data = API.GetValue('cmi.suspend_data'),
suspend_data_body,
correct_count = 0,
question_count = 0,
suspend_data_array = JSON.parse(suspend_data);
suspend_data_body = suspend_data_array['counts'];
for (i = 0; i < suspend_data_body.length; i += 4) {
correct_count += Math.min(_cfg.settings.master_count, parseInt(suspend_data_body.substring(i, i + 2), 10));
question_count += _cfg.settings.master_count;
}
return Math.round(correct_count / question_count * 100);
}
alert("invalid mode:" + _cfg.settings.mode);
}catch(e){
console.log('get score failed');
return 0;
}
}
function get_scaled_score() {

return get_score() / 100;
}
function get_result() {

if(_cfg.settings.mode == 'master'){
return get_score() >= _cfg.settings.passing_score ? 'passed' : 'incomplete';
}else{
return get_score() >= _cfg.settings.passing_score ? 'passed' : 'failed';
}
}
function restart() {

location.href = location.href;
}


var API, startTime;
function DummyAPI() {

var seed = '8a275ada52ce405060eec4b3518ce912c71abfa7';
this.dummy		  = true;
this.Initialize	 = function () {console_log("Initialize"); };
this.Terminate	  = function () {console_log("Terminate"); };
this.Commit		 = function () {console_log("Commit"); };
this.SetValue	   = function (key, value) {
console_log("SetValue(" + key + ", " + value + ")");
if (key === 'cmi.suspend_data') {
localStorage.setItem(key + seed, value);
}
};
this.GetValue = function (key) {
console_log("GetValue(" + key + ")");
if (key === 'cmi.suspend_data') {
return localStorage.getItem(key + seed);
}
};
}
function WrapperAPI_12to2004(api12) {

this.Initialize = function (str) {
return api12.LMSInitialize(str);
};
this.Terminate = function (str) {
return api12.LMSFinish(str);
};
this.Commit = function (str) {
return api12.LMSCommit(str);
};
this.SetValue = function (key, value) {
return api12.LMSSetValue(key, value);
};
this.GetValue = function (key) {
return api12.LMSGetValue(key);
};
this.GetLastError = function () {
return api12.LMSGetLastError("");
};
}
function init_scorm() {

var win1,
win2;
try {
win1 = window;
try{
while (win1.API  == null && win1.parent != null && win1.parent != win1) {
win1 = win1.parent;
}
}catch(e){
console.log("e12");
}
win2 = window;
try{
while (win2.API_1484_11 == null && win2.parent != null && win2.parent != win2) {
win2 = win2.parent;
}
}catch(e){
console.log("e2004");
}
if ((_cfg.settings.scorm === 'auto' || _cfg.settings.scorm === '1.2') && win1.API !== undefined) {
API = new WrapperAPI_12to2004(win1.API);
_cfg.settings.scorm = '1.2';
console_log("SCORM 1.2 API found");
} else if ((_cfg.settings.scorm === 'auto' || _cfg.settings.scorm === '2004') && win2.API_1484_11 !== undefined) {
API = win2.API_1484_11;
_cfg.settings.scorm = '2004';
console_log("SCORM 2004 API found");
} else {
throw "No API Found";
}
} catch (e) {//No API Found or Cross Domain Exception(Firefox and Opera)
API = new DummyAPI();
_cfg.settings.scorm = 'dummy';
console_log("SCORM API not found. DummyAPI loaded.");
}
API.Initialize("");
if (_cfg.settings.scorm === '1.2') {
setValue('cmi.core.lesson_status', 'browsed');
commit();
}
if (_cfg.settings.scorm === '2004') {
setValue('cmi.completion_status', 'incomplete');
commit();
}
$(window).unload(function () {
if(state == 'quiz' || state == 'list'){
if (_cfg.settings.suspendable){ // store answer for suspendable mode
store_answer(false);
state = 'suspended';
}else{ // do not check answer if the quiz is suspendable
check_all_answers();
}
save_suspend_data()
finalize_scorm();
}
});
try{
load_suspend_data();
}catch(e){
console_log(e);
console_log("Failed to load suspend data");
}
}
function sendCommonInteractions(q, i) {

setValue('cmi.interactions.' + i + '.id', q.id);
if (q.type === 'sa' || q.type === 'ma' || q.type === 'button') {
setValue('cmi.interactions.' + i + '.type', 'choice');
} else if (q.type === 'true-false') {
setValue('cmi.interactions.' + i + '.type', 'true-false');
} else if (q.type === 'fill-in') {
setValue('cmi.interactions.' + i + '.type', 'fill-in');
} else if (q.type === 'textarea') {
setValue('cmi.interactions.' + i + '.type', 'fill-in');
} else if (q.type === 'fill-in-plus') {
setValue('cmi.interactions.' + i + '.type', 'fill-in');
} else if (q.type === 'fill-in-multi') {
setValue('cmi.interactions.' + i + '.type', 'fill-in');
} else if (q.type === 'sort') {
setValue('cmi.interactions.' + i + '.type', 'sequencing');
} else if (q.type === 'match') {
setValue('cmi.interactions.' + i + '.type', 'matching');
} else if (q.type === 'wordbank') {
setValue('cmi.interactions.' + i + '.type', 'matching');
} else if (q.type === 'pulldown') {
setValue('cmi.interactions.' + i + '.type', 'matching');
}
if(_cfg.settings.score_weighting){
setValue('cmi.interactions.' + i + '.weighting', q.weighting);
} else {
setValue('cmi.interactions.' + i + '.weighting', '1');
}
if (_cfg.settings.scorm === '1.2') {
if (q.hasOwnProperty('latency')) {
setValue('cmi.interactions.' + i + '.latency', formatTimeIntervalForSCORM12(q.latency * 100));
} else {
setValue('cmi.interactions.' + i + '.latency', formatTimeIntervalForSCORM12(0));
}
} else {
if (q.hasOwnProperty('latency')) {
setValue('cmi.interactions.' + i + '.latency', formatTimeIntervalForSCORM2004(q.latency * 100));
} else {
setValue('cmi.interactions.' + i + '.latency', formatTimeIntervalForSCORM2004(0));
}
}
setValue('cmi.interactions.' + i + '.correct_responses.0.pattern', q.answer);
}
function finalize_scorm() {

var q,
i = 0;
if (API === null) {
return;
}
if (_cfg.settings.scorm === '1.2') {
for (i = 0; i < _cfg.settings.question_count; i++) {
q = _cfg.questions[i];
sendCommonInteractions(q, i);
setValue('cmi.interactions.' + i + '.student_response', q.student_response);
if (!q.hasOwnProperty('time')) {
q.time = getCurrentTimeForSCORM12();
}
setValue('cmi.interactions.' + i + '.time', q.time);
setValue('cmi.interactions.' + i + '.result', scorm12[q.result]);
}
setValue('cmi.comments', JSON.stringify({ mode : _cfg.settings.mode }));
setValue('cmi.core.score.raw', get_score());
setValue('cmi.core.score.min', '0');
setValue('cmi.core.score.max', '100');
if(state == 'intro' || state == "loading"){
setValue('cmi.core.lesson_status', 'browsed');
}else if(state == 'suspended'){
setValue('cmi.core.lesson_status', 'incomplete');
}else{
setValue('cmi.core.lesson_status', get_result());
}
setValue('cmi.core.session_time', formatTimeIntervalForSCORM12(new Date().getTime() - startTime));
} else {
for (i = 0; i < _cfg.settings.question_count; i++) {
q = _cfg.questions[i];
sendCommonInteractions(q, i);
setValue('cmi.interactions.' + i + '.learner_response', q.student_response);
if (!q.hasOwnProperty('time')) {
q.time = getCurrentTimeForSCORM2004();
}
setValue('cmi.interactions.' + i + '.timestamp', q.time);
setValue('cmi.interactions.' + i + '.result', scorm2004[q.result]);
}
setValue('cmi.comments', '{mode:"' + _cfg.settings.mode + '"}');
setValue('cmi.score.scaled', get_scaled_score());

if(state == 'intro' || state == "loading"){
setValue('cmi.success_status', 'unknown');
setValue('cmi.completion_status', 'not attempted');
}else if(state == 'suspended'){
setValue('cmi.success_status', 'unknown');
setValue('cmi.completion_status', 'incomplete');
}else{
setValue('cmi.success_status', get_result());
setValue('cmi.completion_status', 'completed');
}
setValue('cmi.session_time', formatTimeIntervalForSCORM2004(new Date().getTime() - startTime));
}
API.Terminate('');
API = null;
}
function formatTimeIntervalForSCORM12(diff) {

var h, m, s;
s = (diff - diff % 1000) / 1000;
m = (s - s % 60) / 60;
h = (m - m % 60) / 60;
s = s - m * 60;
m = m - h * 60;
if (h < 10) {
h = '0' + h;
}
if (m < 10) {
m = '0' + m;
}
if (s < 10) {
s = '0' + s;
}
return h + ':' + m + ':' + s;
}
function formatTimeIntervalForSCORM2004(diff) {

return formatTimeIntervalForSCORM12(diff);
}
function setValue(key, value) {

if (typeof value === 'object') {
API.SetValue(key, value.join(', '));
} else if (value === undefined) {
API.SetValue(key, '');
} else {
API.SetValue(key, String(value));
}
}
function getValue(key) {

return API.GetValue(key);
}
function commit() {

if (API !== null) {
API.Commit("");
}
}
function getCurrentTimeForSCORM12() {

var ctime = new Date(),
h = ctime.getHours(),
m = ctime.getMinutes(),
s = ctime.getSeconds();
if (h < 10) {
h = '0' + h;
}
if (m < 10) {
m = '0' + m;
}
if (s < 10) {
s = '0' + s;
}
return h + ':' + m + ':' + s;
}
function getCurrentTimeForSCORM2004() {

return getCurrentTimeForSCORM12();
}


window.document.onkeydown = function (e) {

e = e || window.event;
var code = e.keyCode || e.which;
if (code === 13) {
if (state === 'quiz') {
if (_cfg.settings.show_instant_result) {
if ($(':focus').attr('id') !== 'check_answer_button') {
if(!cq.hasOwnProperty('result')){
check_answer();
}

if ($(':focus').attr('id') !== 'check_answer_next_button' && $(':focus').attr('id') !== 'show_result') {
return false;
}
}
} else if (!_cfg.settings.movable) {
if ($(':focus').attr('id') !== 'not_disp_answer_next_button' && $(':focus').attr('id') !== 'not_disp_answer_mark_button') {
check_choiced_next_quiz();
}
} else if (_cfg.settings.movable) {
display_next_quiz();
}
} else if (state === 'intro') {
start_quiz();
}
} else if (code >= 49 && code <= 57) {
numkey(code - 48);
} else if (code >= 97 && code <= 105) {
numkey(code - 96);
} else if (_cfg.settings.movable) {
if (state === 'quiz' && ((cq.type !== 'fill-in' && cq.type !== 'fill-in-plus' && cq.type !== 'fill-in-multi' && cq.type !== 'textarea') || e.shiftKey || (cq.hasOwnProperty('result') && cq.result !== ''))) {
if (code === 37) {
display_prev_quiz();
} else if (code === 39) {
display_next_quiz();
}
}
}
};
function numkey(num) {

if (state === 'quiz' && !cq.hasOwnProperty('result')) {
if (num <= $(".choice input").length + $(".choice button").length || (cq.type === 'true-false' && num <= 2)) {
if (cq.type === 'sa') {
$(".choice input")[num - 1].checked = "checked";
} else if (cq.type === 'ma') {
$(".choice input")[num - 1].checked = !$(".choice input")[num - 1].checked;
} else if (cq.type === 'button') {
button_click(cq.choice[num - 1]);
} else if (cq.type === 'true-false') {
button_click(num === 1 ? 'true' : 'false');
}
}
}
}


var merge = function (p, q) {

var o = q,
z;
for (z in p) {
if (p.hasOwnProperty(z)) {
if (typeof p[z] === 'object' && typeof o[z] === 'object') {
o[z] = merge(p[z], o[z]);
} else {
o[z] = p[z];
}
}
}
return o;
},
clone = function (obj) {

var F = function () {};
F.prototype = obj;
return new F();
},
htmlencode = function (s) {

return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
},
jsencode = function (s) {

return s.replace(/'/g, '\\\'');
},
qalert = function (msg) {

alert(msg);
},
console_log = function (msg) {

if (typeof console != 'undefined') {
console.log(msg);
}
},
wrap_div = function (str) {

return '<div>' + str + '</div>';
},
cstate = function (new_state) {

state = new_state;
},
show = function (sel) {

$('.page').hide();
$(sel).fadeIn(0);
};

Array.prototype.shuffle = function () {

var i = this.length,
j,
t;
while (i) {
j = Math.floor(Math.random() * i);
t = this[--i];
this[i] = this[j];
this[j] = t;
}
return this;
};

function _getFlashObject() {

return document.getElementById("myFlash");
}
function play($file) {

try {
_getFlashObject().SetVariable("method:setUrl", $file);
_getFlashObject().SetVariable("method:play", "");
} catch (e) {
console_log('error: loading flash');
}
}
function pause() {

_getFlashObject().SetVariable("method:pause", "");
}
function stop() {

_getFlashObject().SetVariable("method:stop", "");
}

function setDivHeight() {

var max_height = 0,
max_outerHeight,
connection_height;
if (cq.type === 'sort') {
$(".drag-choice").each(function () {
if (max_height < $(this).height()) {
max_height =  $(this).height();
}
});
$(".drag-choice").each(function () {
$(this).height(max_height);
});
} else if (cq.type === 'match') {
max_outerHeight = $(".drop-choice-key").eq(0).outerHeight();
connection_height = $(".match-connection").eq(0).css("border-bottom-width").replace("px", "");
$(".drop-choice,.drop-choice-key").each(function () {
if (max_height < $(this).height()) {
max_height =  $(this).height();
max_outerHeight = $(this).outerHeight();
}
});
$(".drag-choice,.drop-choice-key").each(function () {
$(this).height(max_height);
});
$(".match-connection").each(function () {
$(this).css("top", (max_outerHeight - connection_height) / 2);
});
}
}
function setDragDropEvent() {

var dragObject,
changeLi,
former_list;
if (cq.type !== 'wordbank') {
dragObject = $(".drag-choice");
} else {
dragObject = $(".drag-choice-wordbank");
}
dragObject.each(function () {
$(this).draggable({
revert: true,
revertDuration: 100,
start: function () {
$(this).css("z-index", "1000");
$(this).addClass("list-hover");
},
stop: function () {
$(this).css("z-index", "");
$(this).removeClass("list-hover");
},
containment: "#page_quiz",
});
$(this).hover(function () {
$(this).addClass("list-hover");
dragObject.not(this).removeClass("list-hover");
}, function () {
if (!$(this).hasClass("ui-draggable-dragging")) {
$(this).removeClass("list-hover");
}
});
});
if (cq.type === 'wordbank') {
$(".drop-choice-wordbank").each(function () {
$(this).droppable({
hoverClass: "drop-hover",
drop: function (event, ui) {
if ($(this).children().length === 1) {
if (ui.draggable.parents(".drop-choice-wordbank").length === 1) {
ui.draggable.prevAll(".wordbank-key").css("display", "inline-block");
ui.draggable.appendTo(this);
$(this).find(".wordbank-key").css("display", "none");
} else {
ui.draggable.parent("#choices .drop-choice-list").css("display", "none");
ui.draggable.appendTo(this);
$(this).find(".wordbank-key").css("display", "none");
}
} else {
if (ui.draggable.parents(".drop-choice-wordbank").length === 1) {
ui.draggable.after($(this).find(".drag-choice-wordbank"));
ui.draggable.appendTo(this);
} else {
changeLi = $(this).find(".drag-choice-wordbank");
$("#choices .drop-choice-list").eq(changeLi.find(".drop-index").text()).css("display", "inline-block");
$("#choices .drop-choice-list").eq(changeLi.find(".drop-index").text()).append(changeLi);
ui.draggable.parent("#choices .drop-choice-list").css("display", "none");
ui.draggable.appendTo(this);
}
}
ui.draggable.css("left", "");
ui.draggable.css("top", "");
play_dragged_sound();
}
});
});
$("#choices").droppable({
drop: function (event, ui) {
ui.draggable.prevAll(".wordbank-key").css("display", "inline-block");
$("#choices .drop-choice-list").eq(ui.draggable.find(".drop-index").text()).css("display", "inline-block");
$("#choices .drop-choice-list").eq(ui.draggable.find(".drop-index").text()).append(ui.draggable);
ui.draggable.css("left", "");
ui.draggable.css("top", "");
play_dragged_sound();
}
});
} else {
$(".drop-choice").each(function () {
$(this).droppable({
hoverClass: "drop-hover",
drop: function (event, ui) {
$(this).find("li").removeClass("list-hover");
former_list = $(this).find("li");
ui.draggable.after($(this).find("li"));
$(this).append(ui.draggable);
ui.draggable.css("left", "");
ui.draggable.css("top", "");
change_sort_flg = true;
changelist_animation(ui.draggable, former_list);
play_dragged_sound();
}
});
});
}
}
function setDragDropList() {

var template,
displist,
choice_value,
choice_html,
i;
if (cq.type === 'sort') {
template = sort_template;
} else if (cq.type === 'match') {
template = match_template;
}
if (cq.student_response && cq.student_response.length > 0) {
change_sort_flg = true;
displist = cq.student_response;
} else {
change_sort_flg = false;
displist = cq.choice;
}
for (i = 0; i < displist.length; i++) {
choice_value = convert_image_tags(displist[i]);
choice_html = template;
choice_html = choice_html.replace(/\[\[choice\]\]/g, choice_value);
if (cq.type === 'match') {
choice_html = choice_html.replace(/\[\[match_key\]\]/g, convert_image_tags(cq.match_key[i]));
choice_html = choice_html.replace(/\[\[choice_id\]\]/g, 'choice_' + i);
}
choice_html = choice_html.replace(/\[\[choice_key\]\]/g, htmlencode(displist[i]));
choice_html = '<div class="choice">' + choice_html + '</div>';
$('#choices').append(choice_html);
}
}
function setDivWidth() {

var max_width = 0;
$(".drag-choice-wordbank").each(function () {
if (max_width < $(this).width() && $(this).children(".disp_correct").length === 0) {
max_width = $(this).width();
}
});
if (max_width < 50) {
max_width = 50;
}
$(".drop-choice-wordbank,.drag-choice-wordbank").each(function () {
$(this).css("min-width", max_width);
});

$("#question").css("display", "none");
$("#question").css("display", "block");
}

function disableDragDrop(dragobj, dropobj) {

dragobj.each(function () {
$(this).draggable('disable');
$(this).unbind("mouseenter").unbind("mouseleave");
});
dropobj.each(function () {
$(this).droppable('disable');
});

}
function is_shuffle(a1, a2) {

var i;
for (i = 1; i < a1.length; i++) {
if (a1[0] !== a1[i]) {
break;
}
if (i === a1.length - 1) {
return true;
}
}
for (i = 0; i < a1.length; i++) {
if (a1[i] !== a2[i]) {
break;
}
if (i === a1.length - 1) {
return false;
}
}
return true;
}
function is_shuffled_match(a1, a2, match_key){
var aa1 = [], aa2 = [], i;
for (i = 0; i < a1.length; i++) {
aa1.push(match_key[a1.findIndex(function(j){return j == a1[i];})])
aa2.push(match_key[a1.findIndex(function(j){return j == a2[i];})])
}
return is_shuffle(aa1, aa2);
}
function changelist_animation(list1, list2) {

list1.css("left", "20px");
list2.css("left", "20px");
list1.animate({
left: "0px"
}, 100);
list2.animate({
left: "0px"
}, 100);
setTimeout(function () {list1.css("background-color", "white"); }, 100);
setTimeout(function () {list1.css("background-color", ""); }, 300);
setTimeout(function () {list2.css("background-color", "white"); }, 100);
setTimeout(function () {list2.css("background-color", ""); }, 300);
}

function gotoCertificate(){
}

function suspend(){
store_answer(false);
cstate("suspended");
show('#page_suspended');
save_suspend_data();
finalize_scorm();
}


setInterval(function(){
if (typeof cq == 'undefined') {
return;
}
if (typeof cq.result == 'undefined'){
if (cq.hasOwnProperty("latency")){
cq.latency++;
} else {
cq.latency = 1;
}
}
}, 100);

var initPhotoSwipeFromDOM = function( gallerySelector ) {
var parseThumbnailElements = function(el) {
var thumbElements = el.childNodes,
numNodes = thumbElements.length,
items = [],
figureEl,
linkEl,
size,
item;
for(var i = 0; i < numNodes; i++) {
figureEl = thumbElements[i];
if(figureEl.nodeType !== 1) {
continue;
}
linkEl = figureEl.children[0];
sizeStr = imgSize[linkEl.getAttribute('href')];
size = sizeStr.split('x');
item = {
src: linkEl.getAttribute('href'),
w: parseInt(size[0], 10),
h: parseInt(size[1], 10)
};
if(figureEl.children.length > 1) {
item.title = figureEl.children[1].innerHTML;
}
if(linkEl.children.length > 0) {
item.msrc = linkEl.children[0].getAttribute('src');
}
item.el = figureEl;
items.push(item);
}
return items;
};
var closest = function closest(el, fn) {
return el && ( fn(el) ? el : closest(el.parentNode, fn) );
};
var onThumbnailsClick = function(e) {
e = e || window.event;
e.preventDefault ? e.preventDefault() : e.returnValue = false;
var eTarget = e.target || e.srcElement;
var clickedListItem = closest(eTarget, function(el) {
return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
});
if(!clickedListItem) {
return;
}
var clickedGallery = clickedListItem.parentNode,
childNodes = clickedListItem.parentNode.childNodes,
numChildNodes = childNodes.length,
nodeIndex = 0,
index;
for (var i = 0; i < numChildNodes; i++) {
if(childNodes[i].nodeType !== 1) {
continue;
}
if(childNodes[i] === clickedListItem) {
index = nodeIndex;
break;
}
nodeIndex++;
}
if(index >= 0) {
openPhotoSwipe( index, clickedGallery );
}
return false;
};

var photoswipeParseHash = function() {
var hash = window.location.hash.substring(1),
params = {};
if(hash.length < 5) {
return params;
}
var vars = hash.split('&');
for (var i = 0; i < vars.length; i++) {
if(!vars[i]) {
continue;
}
var pair = vars[i].split('=');
if(pair.length < 2) {
continue;
}
params[pair[0]] = pair[1];
}
if(params.gid) {
params.gid = parseInt(params.gid, 10);
}
if(!params.hasOwnProperty('pid')) {
return params;
}
params.pid = parseInt(params.pid, 10);
return params;
};
var openPhotoSwipe = function(index, galleryElement, disableAnimation) {
var pswpElement = document.querySelectorAll('.pswp')[0],
gallery,
options,
items;
items = parseThumbnailElements(galleryElement);
options = {
index: index,
galleryUID: galleryElement.getAttribute('data-pswp-uid'),
getThumbBoundsFn: function(index) {
var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
rect = thumbnail.getBoundingClientRect();
return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
}
};
if(disableAnimation) {
options.showAnimationDuration = 0;
}
gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();
};
var galleryElements = document.querySelectorAll( gallerySelector );

for(var i = 0, l = galleryElements.length; i < l; i++) {
galleryElements[i].setAttribute('data-pswp-uid', i+1);
galleryElements[i].onclick = onThumbnailsClick;
}
var hashData = photoswipeParseHash();
if(hashData.pid > 0 && hashData.gid > 0) {
openPhotoSwipe( hashData.pid - 1, galleryElements[ hashData.gid - 1 ], true );
}
};
var photo;
setTimeout(function(){
photo = initPhotoSwipeFromDOM('.my-gallery');
}, 500);

function backToQuestion(_position){
cstate("quiz_review");
show('#page_quiz');
position = _position;
display_quiz();
$(".list").remove();
}

function drawGraph(){
var data = [0, 0, 0, 0, 0];
var i;
for(i = 0; i < _cfg.questions.length; i++ ){
if(_cfg.questions[i].correct_count >= _cfg.settings.master_count){
data[0]++;
}else if(_cfg.questions[i].unknown_flag){
data[2]++;
}else if(_cfg.questions[i].correct_count > 0){
data[1]++;
}else if(_cfg.questions[i].incorrect_count > 0){
data[3]++;
}else{
data[4]++;
}
}
if(data[1] + data[2] + data[3] == 0){
$("#start_quiz_button_weak").prop("disabled", true);
}
var ctxD = document.getElementById("doughnutChart").getContext('2d');
var myLineChart = new Chart(ctxD, {
type: 'doughnut',
data: {
labels: ["パーフェクト","学習中", "知らない", "間違い", "未解答"],
datasets: [
{
data: data,
backgroundColor: ["#00C851", "#4285F4", "#FF8800", "#F7464A", "#949FB1"],
hoverBackgroundColor: ["#00e25b", "#5a95f5", "#FFC870", "#FF5A5E", "#A8B3C5"]
}
]
},
options: {
responsive: true,
legend:{
display:false
}
}
});
}
if (!Array.prototype.findIndex) {
Array.prototype.findIndex = function(predicate) {
if (this === null) {
throw new TypeError('Array.prototype.findIndex called on null or undefined');
}
if (typeof predicate !== 'function') {
throw new TypeError('predicate must be a function');
}
var list = Object(this);
var length = list.length >>> 0;
var thisArg = arguments[1];
var value;

for (var i = 0; i < length; i++) {
value = list[i];
if (predicate.call(thisArg, value, i, list)) {
return i;
}
}
return -1;
};
}
