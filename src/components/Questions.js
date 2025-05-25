const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyperlink Text Management Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<script>", "<style>", "<css>", "<link>"],
    answer: "<style>"
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["styles", "class", "font", "style"],
    answer: "style"
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<break>", "<br>", "<lb>", "<line>"],
    answer: "<br>"
  },

  
  {
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which property is used to change the background color?",
    options: ["background-color", "color", "bgcolor", "background"],
    answer: "background-color"
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-size", "text-style", "text-size", "font-style"],
    answer: "font-size"
  },
  {
    question: "Which CSS value makes an element invisible?",
    options: ["hidden", "none", "invisible", "no-display"],
    answer: "none"
  },
  {
    question: "Which selector selects all `<p>` elements inside a `<div>`?",
    options: ["div.p", "div > p", "div + p", "div p"],
    answer: "div p"
  },

  
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "float", "String"],
    answer: "var"
  },
  {
    question: "What is the correct syntax for a function in JavaScript?",
    options: ["function myFunc()", "function = myFunc()", "def myFunc()", "func myFunc()"],
    answer: "function myFunc()"
  },
  {
    question: "Which of the following is a JavaScript data type?",
    options: ["number", "float", "character", "double"],
    answer: "number"
  },
  {
    question: "What does `===` mean in JavaScript?",
    options: ["Equal in value", "Equal in type", "Equal in value and type", "Not equal"],
    answer: "Equal in value and type"
  },
  {
    question: "Which method adds an element at the end of an array?",
    options: ["push()", "add()", "append()", "insert()"],
    answer: "push()"
  },
  {
    question: "How do you write a comment in JavaScript?",
    options: ["<!-- comment -->", "// comment", "** comment **", "## comment ##"],
    answer: "// comment"
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onmouseclick", "onmouseover", "onchange", "onclick"],
    answer: "onclick"
  },
  {
    question: "What does `typeof []` return in JavaScript?",
    options: ["object", "array", "list", "undefined"],
    answer: "object"
  },
  {
    question: "How do you convert a string to a number in JavaScript?",
    options: ["Number()", "Int()", "parse()", "Convert()"],
    answer: "Number()"
  },
  {
    question: "Which method can be used to round a number in JavaScript?",
    options: ["round()", "Math.round()", "Math.ceil()", "Math.floor()"],
    answer: "Math.round()"
  },

  
  {
    question: "What is React primarily used for?",
    options: ["Server-side rendering", "Database management", "Building user interfaces", "Styling web pages"],
    answer: "Building user interfaces"
  },
  {
    question: "What is the command to create a new React app?",
    options: ["npx create-react-app myApp", "npm install react", "create-react myApp", "react-new myApp"],
    answer: "npx create-react-app myApp"
  },
  {
    question: "What is JSX?",
    options: ["A template engine", "JavaScript XML", "React component", "Browser plugin"],
    answer: "JavaScript XML"
  },
  {
    question: "Which hook is used to manage state in a functional component?",
    options: ["useState()", "useEffect()", "useRef()", "useContext()"],
    answer: "useState()"
  },
  {
    question: "Which hook is used to perform side effects in React?",
    options: ["useState()", "useEffect()", "useRef()", "useReducer()"],
    answer: "useEffect()"
  },
  {
    question: "Which method is used to pass data from parent to child in React?",
    options: ["props", "state", "data", "setState"],
    answer: "props"
  },
  {
    question: "How do you create a functional component in React?",
    options: ["function MyComponent() {}", "class MyComponent extends React.Component {}", "React.createComponent()", "new Component()"],
    answer: "function MyComponent() {}"
  },
  {
    question: "Which directive is used to render lists in React?",
    options: ["for", "map()", "each()", "loop"],
    answer: "map()"
  },
  {
    question: "React is based on which language?",
    options: ["TypeScript", "HTML", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "Which tool is used for debugging React applications?",
    options: ["Redux DevTools", "React Developer Tools", "Chrome DevTools", "Node Inspector"],
    answer: "React Developer Tools"
  },
  {
    question: "Which library is commonly used for routing in React apps?",
    options: ["React Router", "React Path", "React Route", "React Navigation"],
    answer: "React Router"
  },
  {
    question: "What is a key prop in React?",
    options: ["A unique identifier for elements in a list", "A method to create a component", "A style property", "A lifecycle method"],
    answer: "A unique identifier for elements in a list"
  },
  {
    question: "What does lifting state up mean?",
    options: ["Moving state to a higher-level component", "Deleting state", "Passing props down", "Making global state"],
    answer: "Moving state to a higher-level component"
  },
  {
    question: "What is the virtual DOM?",
    options: ["Copy of the real DOM", "Browser’s memory", "Actual HTML DOM", "React's component tree"],
    answer: "Copy of the real DOM"
  },
  {
    question: "What is the correct file extension for a React component?",
    options: [".js", ".jsx", ".react", ".component"],
    answer: ".jsx"
  }
];

export default questions;
