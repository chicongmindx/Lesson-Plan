// Var là phương pháp truyền thống và được sử dụng từ những phiên bản JavaScript đầu tiên.
/* 
- Biến được khai báo bằng var có phạm vi toàn cục (global scope) và phạm vi khối (function scope).
- Có thể khai báo lại biến cùng tên trong cùng một phạm vi.
- Việc khai báo biến bằng var có thể dẫn đến hiện tượng hoisting, khiến biến có thể truy cập được trước khi được khai báo.*/
console.log(message); // Xuất ra: Hello!
var message = "Hello!";

greet(); // Xuất ra: Xin chào!

function greet() {
  console.log("Xin chào!");
}

// Ví dụ về hoisting
// Hoisting là một tính năng của JavaScript có thể hữu ích trong một số trường hợp, nhưng cũng có thể dẫn đến code khó hiểu và khó bảo trì. Nên sử dụng let và const thay cho var để tránh hoisting và viết code rõ ràng hơn.
var a = 10;

function test() {
  console.log(a); // Xuất ra: 10
  var a = 20; // Khai báo lại biến a
  console.log(a); // Xuất ra: 20
}

test();
console.log(a); // Xuất ra: 10
/* 
const dùng để khai báo hằng số, giá trị không thể thay đổi sau khi khai báo.

Biến được khai báo bằng const có phạm vi khối (block scope), chỉ truy cập được trong khối lệnh nơi nó được khai báo.
Bắt buộc phải gán giá trị cho biến khi khai báo.
Không thể khai báo lại biến hoặc thay đổi giá trị của biến sau khi khai báo.
*/

/* 
Được giới thiệu từ ES6, let giúp cải thiện việc quản lý phạm vi biến.

Biến được khai báo bằng let có phạm vi khối (block scope), chỉ truy cập được trong khối lệnh nơi nó được khai báo.
Không thể khai báo lại biến cùng tên trong cùng một khối lệnh.
let không bị ảnh hưởng bởi hoisting.
*/

// Khai báo một hàm để chào hỏi
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!

// Khai báo một mảng
let fruits = ["Apple", "Banana", "Cherry"];

// Truy cập phần tử trong mảng
console.log(fruits[0]); // Output: Apple

// Thêm phần tử vào mảng
fruits.push("Orange");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Orange"]

// Sử dụng vòng lặp for để duyệt qua mảng
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output:
// Apple
// Banana
// Cherry
// Orange

// Sử dụng vòng lặp for...of
for (let fruit of fruits) {
  console.log(fruit);
}
// Output:
// Apple
// Banana
// Cherry
// Orange

// Khai báo chuỗi
let sentence = "The quick brown fox jumps over the lazy dog";

// Độ dài của chuỗi
console.log(sentence.length); // Output: 43

// Kiểm tra nếu chuỗi chứa một từ cụ thể
console.log(sentence.includes("fox")); // Output: true

// Cắt chuỗi
let word = sentence.slice(4, 9);
console.log(word); // Output: quick

// Thay thế từ trong chuỗi
let newSentence = sentence.replace("fox", "cat");
console.log(newSentence); // Output: The quick brown cat jumps over the lazy dog
