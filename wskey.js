
/**

##添加说明



[task_local]
0 0 1 1 * https://ghproxy.com/https://raw.githubusercontent.com/a358594784/YWSCK/main/wskey.js, tag=获取wskey, enabled=true


 
https://api.m.jd.com/client.action(.*)functionId=genToken url script-request-header https://ghproxy.com/https://raw.githubusercontent.com/a358594784/YWSCK/main/wskey.js


hostname =api.m.jd.com


##关于脚本

该原脚本感谢飞哥哥提供， 余温二次修改

飞哥哥微信公众号：IOS公社

脚本简单写的，知道写得很差劲，不喜请嘴下留情！


##使用说明

一、获取CK

打开某东app，使用短信或者密码登录，登录过程开启圈X


圈X提示“CK获取成功，请去执行快截指令吧”，说明CK已经更新


二、获取明文CK

获取明文CK配合快捷指令使用更加方便

https://www.icloud.com/shortcuts/e7dcb372b29f492082f811730169d19f

如果成功获取过CK，添加快捷指令运行即可直接获取CK！


三、使用提示：

浏览器登录后切勿退出登录，否则wskey立马失效

如果无法添加快捷指令，请检查手机设置 > 快捷指令是否允许安装非受信快捷指令

如果无法运行快捷指令，请确保圈X为最新版本



 */
try{
const header=$request.headers;
console.log("开始尝试获取CK更新中……");
var CK=header['Cookie'];
console.log("CK生成环境监测中……");
if(CK.search("pin")!=-1){
console.log("未发现异常，获取生成CK…");
const pin=CK.match("pin=\.+?\;");
const key=CK.match("wskey=\.+?\;");
var json={};
json.cookie=pin+key;
$prefs.setValueForKey(JSON.stringify(json), "JD_CK");
console.log("获取CK更新成功，快去运行快捷指令获取吧");
$notify("CK获取成功","","请去执行快截指令吧");
}
else{
console.log("服务异常，请退出重试");
}
 $done();
}
catch(err){
const CK=$prefs.valueForKey("JD_CK");
if (CK==null)
{
console.log("少侠！你还未获取CK……");
}
else{
//console.log("开始打印CK");
//console.log(CK);
console.log(CK);
}
 $done();
}
/*
const url = "https://example.com/";
const method = "POST";
const headers = {"Field": "test-header-param"};
const data = {"info": "abc"};

const myRequest = {
    url: url,
    method: method, // Optional, default GET.
    headers: headers, // Optional.
    body: JSON.stringify(data) // Optional.
};

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    console.log(response.body);
    $notify("Title", "Subtitle", response.body); // Success!
    $done();
}, reason => {
    // reason.error
    $notify("Title", "Subtitle", reason.error); // Error!
    $done();
});
*/
