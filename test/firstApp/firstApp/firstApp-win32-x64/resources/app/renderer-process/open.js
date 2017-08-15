const click=document.querySelector('#click');
const path=require('path');
const BrowserWindow =require('electron').remote.BrowserWindow;

window.onload=()=>{
	window.open('http://www.baidu.com','百度','height=800,width=1000,top=150,left=300,scrollbars=no');
}