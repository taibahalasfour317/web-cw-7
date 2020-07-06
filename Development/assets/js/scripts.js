let arr = [];


// let array =[
//   "JavaScriptحب نانسي ل",
//   "Reactاتقان استاذ مناور ل",
//  "حماس موضي",
//  "قدرات خاجة",
//   "طيبة رهف",
//    "شدة حسين",
//    "  مساعدات سموالعجيبة",
//   ];

// // Test
// console.log(arr);

// onClick هذه الدالة المسؤولة عن إضافة العنصر في السلة عن طريق
function addToCart(item) {
  arr.push(item);
}

let ul = document.createElement("ul");
ul.className = "myUL";
document.getElementById("container").appendChild(ul);



// arr هذه الدالة المسؤولة عن إنشاء قائمة المشتريات من العناصر الموجودة في المصفوفة
function create(arr) {
  arr.forEach(function (data) {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML += data;
    li.className = "myList";
  });
  // أكمل
}

// create(arr) هذه الدالة المسؤولة عن استدعاء

function myarray() {
  create(arr);
  
}