// دالة لتغيير السمة بين الوضعين light و dark
function setTheme(theme) {
    var element = document.body;
    var sunIcon = document.getElementById('sun-icon');
    var moonIcon = document.getElementById('moon-icon');
    
    if (theme === "light") {
        element.dataset.bsTheme = "light";  // تغيير السمة إلى light
        sunIcon.style.display = "none";  // إخفاء الشمس
        moonIcon.style.display = "inline";  // إظهار القمر
        localStorage.setItem("theme", "light");  // حفظ الخيار في التخزين المحلي
    } else {
        element.dataset.bsTheme = "dark";  // تغيير السمة إلى dark
        sunIcon.style.display = "inline";  // إظهار الشمس
        moonIcon.style.display = "none";  // إخفاء القمر
        localStorage.setItem("theme", "dark");  // حفظ الخيار في التخزين المحلي
    }
}

// تحميل السمة المحفوظة من التخزين المحلي عند تحميل الصفحة
window.onload = function () {
    var savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        setTheme(savedTheme);  // إذا تم حفظ السمة، نطبقها
    } else {
        // إذا لم يكن هناك سمة محفوظة، طبق الوضع الافتراضي (الداكن)
        setTheme("dark"); 
    }
}
