console.log('hi');

console.log(200);

console.log(true);
console.log(null);
console.log();

var num = 10;

console.log(num);

console.log("string", 10.11, false, null, num);

function makeCoffee(sugar, milk) {
  var instructions = "Boil water,";
  instructions += " pour into cup,";
  instructions += " add instant coffee mix,";
  instructions += " add " + sugar + " teaspoons sugar,";
  instructions += " add " + milk + " % milk";
  return instructions;
}

console.log(makeCoffee(2, 3));

function instructionsAndMore(callback, details, sugerAmount, milkAmount) {
  var instructions = callback(sugerAmount, milkAmount);
  instructions += details;
  return instructions;
}

console.log(instructionsAndMore(makeCoffee, ' something', 4, 1));

let myObject = { color: 'red', drive: function () { console.log("driving") } }

var myCar = {
  color: 'red',
  speed: 200,
  drive: function () { return "drive" }
};

var shoppingList = ['apple', 'orange', 'cherry', function () { return 'go shopping'; }];

var car = {
  make: 'Volvo',
  speed: 160,
  engine: {
    size: 2.0,
    make: 'bmw',
    fuel: 'petrol',
    pistons: [{ maker: 'bmw' }, { maker: 'bmw' }]
  }
};

var array = [
  "string",
  100,
  ["embed", 200],
  { car: "ford" },
  function () { return "drive"; }
];

function name() {
  var fullname = "Dan Kiss";
  function concat(name) {
    return "Mr. " + name;
  };
  return concat(fullname);
}

console.log(name());

function name2(fullname) {
  return fullname();
}

console.log(name2(function () { return 'Joe Smith' }));

console.log(me);

var me = 'Rick';

console.log(me);

function runExpression() {
  var a = 10;
  function add() {
    var b = 90;
    return a + b;
  }
  return add();
}

var object23 = {
  prop: this,
  method: function () {
    return this;
  }
};

// note how this is the execution context of the object23 object
console.log(object23.method())

var array23 = [
  this,
  function () {
    return this;
  }
]

function global() {
  console.log('global function', this);
  function sub() {
    console.log('sub function', this);
  }
  sub();
}

// note how the this in sub refers to the window object but global refers to a new object as the callable object of sub will go to the global scope-even if you are already in a callable object. 
new global();

function Apple(x, y, color, score) {
  console.log(123, this === window)
  this.x = x;
  this.y = y;
  this.color = color;
  this.score = score;
}

// using new constructor this will refer to the members of the new apple object aka x, y, coor and score. invoking a regular function will make this refer to the window object in the browser.
var apple1 = new Apple(10, 20, 'red', 200);
var apple2 = new Apple(5, 25, 'blue', 300);
var apple3 = new Apple(25, 225, 'pink', 300);

function Orange(x, y) {
  this.x = x;
  this.y = y;
  // this.eat = function () {
  //   return "Eat the orange";
  // };
}

Orange.prototype = {
  eat: function () { return this },
  throw: function () { return "throw the orange" }
}

var orange1 = new Orange(5, 10);
var orange2 = new Orange(7, 14);
var orange3 = new Orange(22, 44);

//to change a prototype
Orange.prototype.throw = function () { return "New orange thrown" }

//example of how this context points to the instance of the object so ou can change the X value on an instance basis with the function below
Orange.prototype.changeX = function (newX) {
  this.x = newX;
}

orange1.changeX(7);

// event hangelers on the dom
var select1 = document.getElementsByName('cars')[0]
//to see the dom object of select do
//dir(select)
select1.onclick = function (event) {
  console.log(event, 'select1.onclick');
}

select1.addEventListener('click', function (e) { console.log(e, 'clicked by add event listener') })

function ClickCallback(event) {
  console.log('clicked by add event listener 2')
}

select1.addEventListener('click', ClickCallback);

select1.removeEventListener('click', ClickCallback);

//DOM notes to show h1 element in body
console.log('show tag h1 with dom traversal', document.childNodes[1].childNodes[2].childNodes[1])

//show all p tags, notes elements is plural so you get array
console.log('grab all h2 tags', document.getElementsByTagName('h2'))

//grab id of vanilla
console.log('get vanilla id', document.getElementById('vanilla'))

//grab all elements which match what I'm searching for
console.log('get vanilla id', document.querySelectorAll('#vanilla, h1'))

//return just the first h2 element
console.log('return just the first h2 element', document.querySelector('h2'))

//get span with attribute of data-* set to certain value and all p tags in the body
console.log('get span with attribute of data-* set to certain value and all p tags in the body', document.querySelectorAll(' span[data-content="interesting"], body > p '))

//see all properties of document vs see tags of document
console.dir(document)
console.log(document)

let pClass = document.getElementsByClassName('pClass')[0];

pClass.innerText += '. We changed the inner text of this element using JS';

pClass.innerHTML += ', <span id="addedSpan"> so amazingly</span> '


// we will style the myP element
let myP = document.querySelector('.pClass')
console.dir(myP)
myP.style.color = "pink";

//to use css string, note you want to do this in one go as we do 2 renders here
myP.style.cssText = " background: lightblue; color: white;"
myP.style.cssText += "width: 200px;";

let myElement = document.createElement('div');

myElement.style.cssText = "padding: 10px; background-color: lightblue; margin: 20px;"

myElement.innerText = "I created this element in JS, click for a greeting";

myElement.onclick = function () { alert('Hello!') }

document.body.append(myElement)

//to change the color and padding of the div
let elements = document.getElementsByName('boxDropdowns');
function changeColor() {
  for (let index = 0; index < elements.length; index++) {
    let sample = document.getElementById('sample');
    let cssProperty = elements[index].getAttribute('id');
    let cssValue = elements[index].value;
    sample.style[cssProperty] = cssValue;
  }
}

document.getElementById('options').addEventListener('click', changeColor)







