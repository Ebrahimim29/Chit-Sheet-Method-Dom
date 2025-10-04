// -------Part 237:Cheat Sheet Dom Professional
document.addEventListener("DOMContentLoaded", () => {
    const $ = (selector, root = document) => root.querySelector(selector);
    const form = $("#myForm1");
    const username = $("#username");
    const countMessage = $(".count-message");
    
    // SetCustomValidity(): متدی است که متن خطای پیش 
    // فرض مرورگر رو تغییر میده
    username.addEventListener("input", () => {
        countMessage.textContent = username.value.lenght;
        if(username.value.lenght < 5){
            //ایجاد پیام خطای سفارشی
            username.setCustomValidity("نام کاربری باید حداقل 5 حرف داشته باشد");

            username.reportValidity();
        }else{
            //پاک کردن پیام خطا
            username.setCustomValidity("")
        }
    });
});





// CheckValidity(): متدی است که بررسی می کنه آیا یک فرم یا اینپوت براساس قوانین اعتبار سنجی مثل required و یا خطای SetCustomValidity معتبر هست یا نه
