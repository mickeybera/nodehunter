import React, { useState } from 'react';

// CopyButton component for copying code snippets
function CopyButton({ code }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm mt-2 hover:bg-blue-600 transition"
        >
            {copied ? "Copied!" : "Copy"}
        </button>
    );
}

// Main documentation component
function Python() {
    return (
        <div className="p-4 md:p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">Python Language Documentation</h1>

            {/* Section 1: Introduction */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Introduction</h2>
                <p className="text-gray-700 text-sm md:text-base">
                    Python is a general-purpose programming language known for its simplicity and readability. It supports multiple programming paradigms and is widely used in data science, web development, and automation.
                </p>
            </section>

            {/* Section 2: Basic Syntax */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Basic Syntax</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    A simple Python program typically starts with the `print` function. Here’s a basic program to print "Hello, World!" to the screen:
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-auto">
                    <pre className="text-xs md:text-sm text-black dark:text-white">
                        <code>{`print("Hello, World!")`}</code>
                    </pre>
                    <CopyButton code={`print("Hello, World!")`} />
                </div>
            </section>

            {/* Section 3: Data Types */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Data Types</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    Python supports several built-in data types including:
                </p>
                <ul className="list-disc list-inside text-sm md:text-base mb-2">
                    <li><strong>int</strong>: Used for integers</li>
                    <li><strong>float</strong>: Used for floating-point numbers</li>
                    <li><strong>str</strong>: Used for strings</li>
                    <li><strong>list</strong>: Used for ordered collections</li>
                    <li><strong>tuple</strong>: Similar to lists, but immutable</li>
                    <li><strong>dict</strong>: Used for key-value pairs</li>
                    <li><strong>set</strong>: Unordered collection of unique items</li>
                </ul>
            </section>

            {/* Section 4: Operators */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Operators</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    Python provides various operators for performing different operations. These include:
                </p>
                <ul className="list-disc list-inside text-sm md:text-base mb-2">
                    <li><strong>Arithmetic Operators</strong>: +, -, *, /, %</li>
                    <li><strong>Relational Operators</strong>: ==, !=, &gt;, &lt;, &gt;=, &lt;=</li>
                    <li><strong>Logical Operators</strong>: &&, ||, !</li>
                </ul>


                <p className="text-gray-700 text-sm md:text-base mb-2">Example:</p>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-auto">
                    <pre className="text-xs md:text-sm text-black dark:text-white">
                        <code>{`a = 10
b = 5
sum = a + b  # Addition
is_greater = a > b  # Comparison
logical = (a > 5 and b < 10)  # Logical`}</code>
                    </pre>
                    <CopyButton code={`a = 10\nb = 5\nsum = a + b  # Addition\nis_greater = a > b  # Comparison\nlogical = (a > 5 and b < 10)  # Logical`} />
                </div>
            </section>

            {/* Section 5: Lists */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Lists</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    A list is a collection of elements of any type. Lists are mutable and allow duplicate values. Here’s an example of defining a list in Python:
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-auto">
                    <pre className="text-xs md:text-sm text-black dark:text-white">
                        <code>{`numbers = [1, 2, 3, 4, 5]`}</code>
                    </pre>
                    <CopyButton code={`numbers = [1, 2, 3, 4, 5]`} />
                </div>
            </section>

            {/* Section 6: Tuples */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Tuples</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    A tuple is a collection of elements similar to a list, but it is immutable. Once a tuple is created, its values cannot be modified. Here's an example:
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-auto">
                    <pre className="text-xs md:text-sm text-black dark:text-white">
                        <code>{`coordinates = (10, 20)`}</code>
                    </pre>
                    <CopyButton code={`coordinates = (10, 20)`} />
                </div>
            </section>

            {/* Section 7: Dictionaries */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Dictionaries</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    A dictionary is a collection of key-value pairs. Here’s an example:
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-auto">
                    <pre className="text-xs md:text-sm text-black dark:text-white">
                        <code>{`person = {"name": "John", "age": 30, "city": "New York"}`}</code>
                    </pre>
                    <CopyButton code={`person = {"name": "John", "age": 30, "city": "New York"}`} />
                </div>
            </section>

            {/* Section 8: Sets */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Sets</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    A set is an unordered collection of unique elements. Here's an example:
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-auto">
                    <pre className="text-xs md:text-sm text-black dark:text-white">
                        <code>{`unique_numbers = {1, 2, 3, 4, 5}`}</code>
                    </pre>
                    <CopyButton code={`unique_numbers = {1, 2, 3, 4, 5}`} />
                </div>
            </section>

            {/* Section 9: Functions */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Functions</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    Functions in Python allow you to modularize your code. Here's an example of a function that adds two numbers:
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-auto">
                    <pre className="text-xs md:text-sm text-black dark:text-white">
                        <code>{`def add(a, b):
    return a + b

result = add(5, 3)
print("Sum =", result)`}</code>
                    </pre>
                    <CopyButton code={`def add(a, b):\n    return a + b\n\nresult = add(5, 3)\nprint("Sum =", result)`} />
                </div>
            </section>

            {/* Section 10: Input and Output */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Input and Output</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    Python provides functions like `input()` and `print()` for reading input and displaying output. Here's an example:
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-auto">
                    <pre className="text-xs md:text-sm text-black dark:text-white">
                        <code>{`name = input("Enter your name: ")
print("Hello, " + name)`}</code>
                    </pre>
                    <CopyButton code={`name = input("Enter your name: ")\nprint("Hello, " + name)`} />
                </div>
            </section>
        </div>
    );
}

export default Python;
