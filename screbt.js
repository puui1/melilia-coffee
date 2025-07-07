// تأثير Fade-In للصفحة
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  let opacity = 0;
  const fadeIn = setInterval(() => {
    if (opacity >= 1) clearInterval(fadeIn);
    opacity += 0.02;
    document.body.style.opacity = opacity;
  }, 20);
});

// تغيير لون العنوان كل 2 ثانية
const heroTitle = document.querySelector(".hero h1");
if (heroTitle) {
  const colors = ['#6f4e37', '#a97452', '#d2b48c'];
  let index = 0;
  setInterval(() => {
    heroTitle.style.color = colors[index];
    index = (index + 1) % colors.length;
  }, 2000);
}

// زر يرجع للأعلى (اختياري)
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑ Top";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "20px";
scrollBtn.style.backgroundColor = "#6f4e37";
scrollBtn.style.color = "white";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "1000";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
