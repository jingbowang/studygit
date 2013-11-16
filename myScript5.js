var Memory = 0;
var Number1 = "";
var Number2 = "";
var NewNumber = "blank";
var opvalue = "";

function Display(displaynumber) {
document.calculator.monitor.value = displaynumber;
}



function ClearCalc() {
Number1 = "";
Number2 = "";
NewNumber = "blank";
Display("");
}    //C

function Backspace(monitor) {
monitorlength = monitor.length;
monitor = monitor.substring(0, monitorlength - 1);
if (Number2 != "") {
Number2 = monitor.toString();
Display(Number2);
} else {
Number1 = monitor.toString();
Display(Number1);
}
}

function CECalc() {
Number2 = "";
NewNumber = "yes";
Display("");
}   //ce

function CheckNumber(monitor) {

if(monitor == ".") {
Number = document.calculator.monitor.value;
if(Number.indexOf(".") != -1) {
monitor = "";
}
}
if(NewNumber == "yes") {
Number2 += monitor;
Display(Number2);
}
else {
if(NewNumber == "blank") {
Number1 = monitor;
Number2 = "";
NewNumber = "no";
}
else {
Number1 += monitor;
}
Display(Number1);
}
}

// 数字输入包括小数点
function AddButton(x) {
if(x == 1) EqualButton();
if(Number2 != "") {
Number1 = parseFloat(Number1) + parseFloat(Number2);
}
NewNumber = "yes";
opvalue = '+';
Display(Number1);
}

//加
function SubButton(x) {
if(x == 1) EqualButton();
if(Number2 != "") {
Number1 = parseFloat(Number1) - parseFloat(Number2);
}
NewNumber = "yes";
opvalue = '-';
Display(Number1);
}

//减
function MultButton(x) {
if(x == 1) EqualButton();
if(Number2 != "") {
Number1 = parseFloat(Number1) * parseFloat(Number2);
}
NewNumber = "yes";
opvalue = '*';
Display(Number1);
}

//乘
function DivButton(x) {
if(x == 1) EqualButton();
  if(Number2 != "" ) {
    Number1 = parseFloat(Number1) / parseFloat(Number2);
   }
NewNumber = "yes";
opvalue = '/';
Display(Number1);
}

//除



function PercentButton(x) {
if(x == 1) PercentButton();
if(Number2 != "") {
Number1 = parseFloat(Number1) % parseFloat(Number2);
}
NewNumber = "yes";
opvalue = '%';
Display(Number1);
}

//取余

function SqrtButton() {
 if(Number1>=0)
        Number1 = Math.sqrt(Number1);
 else
        Number1 = "error";
NewNumber = "blank";
Display(Number1);
}

//开方
function RecipButton() {
 if(Number1!=0)
        Number1 = 1/Number1;
 else
        Number1 = "can't divide by zero";
NewNumber = "blank";
Display(Number1);
}

//倒数
function NegateButton() {
Number1 = parseFloat(-Number1);
NewNumber = "no";
Display(Number1);
}

//正负
function EqualButton() {
if(opvalue == '+') AddButton(0);
if(opvalue == '-') SubButton(0);
if(opvalue == '*') MultButton(0);
if(opvalue == '/') DivButton(0);
if(opvalue == '%') PercentButton(0);
Number2 = "";
opvalue = "";
}

//等于
function MemoryClear() {
Memory = 0;
document.calculator.monitor.value = "";
}

//MC

function MemoryRecall(monitor) {
if(NewNumber != "blank") {
Number2 += monitor;
} else {
Number1 = monitor;
}
NewNumber = "blank";
Display(monitor);
}

//MR

function MemorySubtract(monitor) {
Memory = Memory - eval(monitor);
}

//M-
function MemoryAdd(monitor) {
Memory = Memory + eval(monitor);
document.calculator.monitor.value = " M ";
NewNumber = "blank";
}

//M+ MS
