let arr = [];

// let arr = [
//     "JavaScriptحب نانسي ل",
//     "Reactاتقان استاذ مناور ل",
//     "حماس موضي",
//     "قدرات خاجة",
//     "طيبة رهف",
//     "شدة حسين",
//     "مساعدة سمو",
//   ];

// Test
console.log(arr);

function addToCart(item) {
  arr.push(item);
}

let ul = document.createElement("ul");
ul.className = "myUL";
document.getElementById("container").appendChild(ul);

function myFunction() {
  create(arr);
}

function create(arr) {
  arr.forEach(function (data) {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML += data;
    li.className = "myList";
  });
}
