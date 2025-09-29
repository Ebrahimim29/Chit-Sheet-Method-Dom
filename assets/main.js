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
    window.scrollTo({top:0, left:0});
}





