import React, { useState } from 'react';

// CopyButton component to copy the code
function CopyButton({ code }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code); // Copy the code to clipboard
        setCopied(true); // Set copied state to true
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    };

    return (
        <button
            onClick={handleCopy}
            className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm mt-2 hover:bg-blue-600 transition"
        >
            {copied ? 'Copied!' : 'Copy'}
        </button>
    );
}

// Main Documentation Component for JavaScript
function JavaScriptDocs() {
    return (
        <div className="p-4 md:p-6 max-w-3xl mx-auto bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">JavaScript Documentation</h1>

            {/* Section 1: Introduction */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Introduction</h2>
                <p className="text-gray-700 text-sm md:text-base">
                    JavaScript is a versatile, high-level, interpreted programming language commonly used for web development.
                    It allows developers to create interactive websites and dynamic user interfaces.
                </p>
            </section>

            {/* Section 2: Variables and Data Types */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Variables and Data Types</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    In JavaScript, variables can be declared using `let`, `const`, or `var`. Data types include strings, numbers, and booleans.
                </p>
                <div className="bg-gray-800 text-white p-3 rounded-md overflow-auto">
                    <pre className="text-xs md:text-sm">
                        <code>{`let name = "John";  // String
const age = 30;  // Number
let isStudent = true;  // Boolean`}</code>
                    </pre>
                    <CopyButton code={`let name = "John";\nconst age = 30;\nlet isStudent = true;`} />
                </div>
            </section>

            {/* Section 3: Operators */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Operators</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    JavaScript supports various operators like arithmetic, comparison, and logical operators.
                </p>
                <ul className="list-disc list-inside text-sm md:text-base mb-2">
                    <li><strong>Arithmetic Operators</strong>: +, -, *, /, %</li>
                    <li><strong>Relational Operators</strong>: ==, !=, &gt;, &lt;, &gt;=, &lt;=</li>
                    <li><strong>Logical Operators</strong>: &&, ||, !</li>
                </ul>
                <div className="bg-gray-800 text-white p-3 rounded-md overflow-auto">
                    <pre className="text-xs md:text-sm">
                        <code>{`let a = 5, b = 10;
let sum = a + b;  // Addition
let isEqual = (a == b);  // Comparison
let isTrue = (a > 2 && b < 15);  // Logical`}</code>
                    </pre>
                    <CopyButton code={`let a = 5, b = 10;\nlet sum = a + b;\nlet isEqual = (a == b);\nlet isTrue = (a > 2 && b < 15);`} />
                </div>
            </section>

            {/* Section 4: Functions */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Functions</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    Functions in JavaScript allow you to modularize code and reuse it. Here's how you can declare and invoke a function.
                </p>
                <div className="bg-gray-800 text-white p-3 rounded-md overflow-auto">
                    <pre className="text-xs md:text-sm">
                        <code>{`function add(a, b) {
  return a + b;
}

let result = add(3, 4);  // Calling the function`}</code>
                    </pre>
                    <CopyButton code={`function add(a, b) {\n  return a + b;\n}\n\nlet result = add(3, 4);`} />
                </div>
            </section>

            {/* Section 5: Loops */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Loops</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    JavaScript has several types of loops, including `for`, `while`, and `do...while`.
                </p>
                <div className="bg-gray-800 text-white p-3 rounded-md overflow-auto">
                    <pre className="text-xs md:text-sm">
                        <code>{`for (let i = 0; i < 5; i++) {
  console.log(i);  // Prints 0, 1, 2, 3, 4
}`}</code>
                    </pre>
                    <CopyButton code={`for (let i = 0; i < 5; i++) {\n  console.log(i);\n}`} />
                </div>
            </section>

            {/* Section 6: Objects */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Objects</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    JavaScript objects are used to store collections of data and more complex entities.
                </p>
                <div className="bg-gray-800 text-white p-3 rounded-md overflow-auto">
                    <pre className="text-xs md:text-sm">
                        <code>{`let person = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log("Hello!");
  }
};

person.greet();  // Calling the method`}</code>
                    </pre>
                    <CopyButton code={`let person = {\n  name: "Alice",\n  age: 25,\n  greet: function() {\n    console.log("Hello!");\n  }\n};\nperson.greet();`} />
                </div>
            </section>

            {/* Section 7: Event Handling */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Event Handling</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    JavaScript allows you to handle events like clicks, keypresses, and more.
                </p>
                <div className="bg-gray-800 text-white p-3 rounded-md overflow-auto">
                    <pre className="text-xs md:text-sm">
                        <code>{`document.getElementById("btn").addEventListener("click", function() {
  alert("Button clicked!");
});`}</code>
                    </pre>
                    <CopyButton code={`document.getElementById("btn").addEventListener("click", function() {\n  alert("Button clicked!");\n});`} />
                </div>
            </section>

        </div>
    );
}

export default JavaScriptDocs;
