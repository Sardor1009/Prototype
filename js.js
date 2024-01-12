String.prototype.trm = function() {
    return this.trim();
  };
  
  String.prototype.upperCase = function() {
    return this.toUpperCase();
  };
  
  String.prototype.has = function(substring) {
    return this.includes(substring);
  };
  
  String.prototype.cut = function(start, end) {
    return this.slice(start, end);
  };
  
  String.prototype.rpt = function(count) {
    return this.repeat(count);
  };
  
  var matn = "   Bu bir matn   ";
  
  console.log(matn.trm());         // "Bu bir matn"
  console.log(matn.upperCase());   // "   BU BIR MATN   "
  console.log(matn.has("bir"));    // true
  console.log(matn.cut(3, 6));      // " B"
  console.log(matn.rpt(3));         // "   Bu bir matn   Bu bir matn   Bu bir matn   "
  
  
  // String constructoriga oid 2
  Number.prototype.fixed = function(digits) {
    return this.toFixed(digits);
  };
  
  Number.prototype.round = function() {
    return Math.round(this);
  };
  
  Number.prototype.isSquare = function() {
    return Math.sqrt(this) % 1 === 0;
  };
  
  Number.prototype.count = function() {
    return Math.abs(this).toString().length;
  };
  
  Number.prototype.sum = function() {
    return Math.abs(this).toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  };
  
  var son = 4.567;
  console.log(son.fixed(2));     // "4.57"
  console.log(son.round());      // 5
  
  var kvadrat1 = 10;
  var kvadrat2 = 16;
  console.log(kvadrat1.isSquare());  // false
  console.log(kvadrat2.isSquare());  // true
  
  var butunSon = -12345;
  console.log(butunSon.count());     // 5
  console.log(butunSon.sum());       // 15
  
  
  // String constructoriga oid 3
  
  Array.prototype.customMap = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
  
  Array.prototype.customEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
        return false;
      }
    }
    return true;
  };
  
  Array.prototype.customReduce = function (callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
  
    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  
    return accumulator;
  };
  
  Array.prototype.customFindIndex = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return i;
      }
    }
    return -1;
  };
  
  Array.prototype.customSplice = function (start, deleteCount, ...items) {
    let removedItems = this.slice(start, start + deleteCount);
    let tail = this.slice(start + deleteCount);
    this.length = start;
    this.push(...items, ...tail);
    return removedItems;
  };
  
  let numbers = [1, 2, 3, 4, 5];
  let doubled = numbers.customMap(function (item) {
    return item * 2;
  });
  console.log(doubled); // [2, 4, 6, 8, 10]
  
  let allEven = numbers.customEvery(function (item) {
    return item % 2 === 0;
  });
  console.log(allEven); // false
  
  let sum = numbers.customReduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  console.log(sum); // 15
  
  let index = numbers.customFindIndex(function (item) {
    return item > 2;
  });
  console.log(index); // 2
  
  let removed = numbers.customSplice(1, 2, 6, 7, 8);
  console.log(removed); // [2, 3]
  console.log(numbers); // [1, 6, 7, 8, 4, 5]
  
  
  // String constructoriga oid 4
  
  function Animal(name, speed, limitAge) {
    this.name = name;
    this.speed = speed;
    this.limitAge = limitAge;
  }
  
  Animal.prototype.info = function () {
    return `Name: ${this.name}, Speed: ${this.speed}, Limit Age: ${this.limitAge}`;
  };
  
  function Student(name, course, years, university) {
    this.name = name;
    this.course = course;
    this.years = years;
    this.university = university;
  }
  
  Student.prototype.leftYears = function () {
    return this.years;
  };
  
  function Person(name, age, currentYear) {
    this.name = name;
    this.age = age;
    this.currentYear = currentYear;
  }
  
  Person.prototype.getBirthYear = function () {
    return this.currentYear - this.age;
  };
  
  function Employee(name, salary, workName) {
    this.name = name;
    this.salary = salary;
    this.workName = workName;
  }
  
  Employee.prototype.increaseSalary = function (percent) {
    return this.salary * (1 + percent / 100);
  };
  
  function Rectangle(width, height) {
    this.width = width;
    this.height = height;
  }
  
  Rectangle.prototype.getArea = function () {
    return this.width * this.height;
  };
  
  Rectangle.prototype.getPerimeter = function () {
    return 2 * (this.width + this.height);
  };
  
  let animal = new Animal("Tiger", 60, 15);
  console.log(animal.info());
  
  let student = new Student("John Doe", 3, 4, "University of Example");
  console.log(student.leftYears());
  
  let person = new Person("Alice", 25, 2024);
  console.log(person.getBirthYear());
  
  let employee = new Employee("Bob", 50000, "Developer");
  console.log(employee.increaseSalary(10));
  
  let rectangle = new Rectangle(5, 8);
  console.log(rectangle.getArea());
  console.log(rectangle.getPerimeter());