const para1 = document.getElementById("para1");

// outerHtml: کل تگ + محتواش رو برمی گردونه
console.log(para1.outerHTML);

para1.outerHTML = `<h2 id="para1" class="title">New Heading</h2>`

// setAttribute
para1.setAttribute("id" , "example");
console.log("attribute جدید اضافه شد:" , para1.getAttribute("id"));

// hasAttibute
console.log("آیا این المنت id دارد؟" , para1.hasAttribute("id"));

// removeAttribute
para1.removeAttribute("class");

// getAttribute 
const cls = para1.getAttribute("class");
console.log("کلاس فعلی:" , cls);

//-----------------
const container = document.getElementById("container");
const para2 = document.getElementById("para2");

// removeChild => حذف یک فرزند
container.removeChild(para2);

// ساخت یک المنت جدید
const newPara = document.createElement("p");
newPara.textContent = "This is a new Paragraph";
container.appendChild(newPara);

// replaceChild => جایگزینی المنت جدید به جای span
const span1 = document.getElementById("span1");
container.replaceChild(newPara, span1);

// پراپرتی ها و متدهای مربوط به مفهوم Traversing(رفت و آمد بین عناصر)
const container2 = document.getElementById("container2");
const h2 = document.getElementById("h2");
const p2 = document.getElementById("p2");

console.log("والد h2:" , h2.parentNode); //دسترسی به والد

//NodeList: یک مجموعه شبیه آرایه از نودهای (عناصر) صفحه وب که با متدهایی مثل querySelectorAll , childNodes به دست می آید
console.log("لیست همه بچه ها:" , container2.childNodes); //نودهای داخل والد

console.log("اولین بچه:" , container2.firstChild);
console.log("آخرین بچه:" , container2.lastChild);

// حرکت بین خواهرها و برادرها
console.log("nextSibling:" , h2.nextSibling);
console.log("previousSibling:" , p2.previousSibling);

// closest => نزدیکترین جدی که با Selector بخوره
console.log(p2.closest("div")); //می ره بالا تا برسه به اولین div


// ------Part2(234): Cheat Sheet Dom

// اطلاعات کلی مربوط به المانهای Document
console.log("عنوان:" , document.title);
// document.title = "عنوان جدید";
console.log("URL:" , document.URL);
console.log("دامنه:" , document.domain);
console.log("Referrer:" , document.referrer);
console.log("آخرین تغییر:", document.lastModified);
console.log("Character set:" , document.characterSet);
console.log("وضعیت بارگذاری:", document.readyState);

setTimeout(() => {
    console.log("وضعیت بارگذاری:", document.readyState);    
} , 1000);

console.log("Active element:", document.activeElement);

// دسترسی به بخش ها و المنت ها
console.log("عنوان:", document.title);
console.log("Html کل:", document.documentElement);
console.log("Head:", document.head);
console.log("Body:" , document.body);
console.log("image:", document.images);
console.log("Links:", document.links);
console.log("Scripts:", document.scripts);
console.log("StyleSheets:", document.styleSheets);
console.log("Forms:", document.forms);

// انتخاب
console.log("با ID:", document.getElementById("title"));
console.log("با Class:", document.getElementsByClassName("text"));
console.log("با Css:", document.querySelector("p.text"));
console.log("با Tag Name:", document.getElementsByTagName("p"));
document.querySelectorAll('[name="username"]')


// ایجاد المنت
const newDiv = document.createElement("div");
newDiv.textContent = "من یک Div جدیدم!";
document.body.appendChild(newDiv);

// رویداد Dom
document.addEventListener("DOMContentLoaded", () =>{
    console.log("Dom کاملا بارگذاری شد!");    
});
document.addEventListener("readystatechange", () =>{
    console.log("وضعیت بارگذاری:", document.readyState);    
});
document.addEventListener("visibilitychange", () =>{
    console.log("وضعیت نمایشی:", document.visibilityState);    
}); // مربوط به تب مرورگر می باشد
document.addEventListener("fullscreenchange", () =>{
    console.log("وضعیت تمام صفحه:", document.fullscreenElement);    
});
console.log("وضعیت تمام صفحه:", document.fullscreenElement);


// ------Part3(235):Cheat Sheet Window Object
const out = document.getElementById("output");

// نمایش اندازه ها و اطلاعات مرورگر
function showInfo() {
    out.innerHTML = `
    <b>اندازه Viewport:</b> x ${window.innerWidth} y ${window.innerHeight} <br>
    <b>اندازه پنجره مرورگر:</b> x ${window.outerWidth} y ${window.outerHeight} <br>
    <b>موقعیت روی صفحه:</b> X=${window.screenX} , Y=${window.screenY} <br>
    <b>آدرس صفحه:</b> ${window.location.href} <br>
    <b>نام مرورگر:</b> ${window.navigator.userAgent} <br>
    <b>مقدار اسکرول:</b> X=${window.scrollX} , Y=${window.scrollY}
    `
}
showInfo();

// اجرا هنگام بارگذاری
window.addEventListener("load", showInfo);

// اجرا هنگام تغییر سایز
window.addEventListener("resize", showInfo);

// اجرا هنگام اسکرول
window.addEventListener("scroll", showInfo);

// Open Window
function testOpen() {
    let newWin = window.open("http://digikala.com" , "_blank" , "width=400,height=500");
    
    setTimeout(()=> newWin.close(), 7000); 
    //بعد از 7 ثانیه بسته میشه
}

// ScrollBy
function scrollDown() {
    window.scrollBy(0 , 200);
}

// ScrollTo
function scrollToTop() {
    window.scrollTo({top:0, behavior: "smooth"});
}


// ------part4(236-Cheat Sheet Forms)
// 1-دسترسی به فرمها
console.log(document.forms); //همه فرمهای صفحه یک اچ تی ام ال کالکشن هستند
console.log(document.forms[0]); //اولین فرم
console.log(document.forms["myForm"]); //روش قدیمی

//-- ShortCut & Helper Function
const $ = (selector , root = document) => root.querySelector(selector);

let form = $("#myform");
let msg = $("#msg");
//qs توی پروژه های بزرگتر بهتره استفاده بشه

const $$ = (selector , root = document) => root.querySelectorAll(selector);

// 2-گرفتن و ست کردن مقدار ورودیها
console.log(form.username.value); //مقدار اینپوت با name="username"


//ست کردن مقدار
form.username.value = "Hassan";

// const start = ()=>{
    // form.remember.checked = !form.remember.checked;
    // form.remember.hidden = !form.remember.hidden; //پنهان و ظاهر کردن فیلد
    // form.remember.disabled = true; //غیر فعال کردن فیلد
// }

//3-چک باکس و رادیو
const gender = ()=>{
    console.log(form.gender.value);
    form.gender.disabled = true;    
}

// 4- پنهان و آشکار کردن المان
msg.hidden = true;
msg.hidden = false;

// 5- ارسال فرم با جاوااسکریپت
const start = () =>{
    //form.submit(); //ارسال خودکار بدون کلیک کاربر
    // form.submit();
    //form.reset(); //بازگرداندن مقادیر فرم به حالت اولیه
    // form.reset();
    //form.focus(); //انتقال فوکوس به یک ورودی
    // form.username.focus();
    //form.blur(); //خارج کردن فوکوس
    // form.username.blur();
    //form.select(); //انتخاب متن داخل اینپوت
    // form.username.select();
}

// Submit:وقتی فرم ارسال میشه
form.addEventListener("submit", function(e) {
    e.preventDefault(); //جلوگیری از ارسال واقعی
    msg.innerText = "فرم ارسال شد،مقدار ✅:" + form.username.value;
});

//Reset: وقتی فرم ریست میشه
form.addEventListener("reset", function() {
    msg.innerText = "فرم ریست شد ♻";
});

//Input: هر بار که کاربر چیزی تایپ می کنه    
form.username.addEventListener("input", function() {
    msg.innerText = "در حال تایپ: " + form.username.value;
});

//Change: وقتی مقدار ورودی تغییر می کنه و کاربر فوکوس رو از اون خارج می کنه

//Input , Change: شبیه به هم هستند ولی اینپوت در لحظه تایپ اعمال میشه ولی برای Change باید حتما بعد از تایپ المان اینپوت از حالت فوکوس خارج بشه

//Focus: وقتی یک فیلد فوکوس می گیره
form.password.addEventListener("focus", function(){
    msg.innerText = "رمز عبور فوکوس گرفت";
});

//Blur: وقتی فوکوس از فیلد خارج میشه
form.password.addEventListener("blur", function() {
    msg.innerText = "رمز عبور فوکوس رو از دست داد";
});







