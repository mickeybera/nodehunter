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
function CDemo({ darkMode }) {
    return (
        <div className="p-4 md:p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">C Language Documentation</h1>

            {/* Section 1: Introduction */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Introduction</h2>
                <p className="text-gray-700 text-sm md:text-base">
                    C is a general-purpose programming language widely used for system programming, developing operating systems, and embedded programming. It is known for its efficiency and control over system resources.
                </p>
            </section>

            {/* Section 2: Basic Syntax */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Basic Syntax</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    A simple C program typically starts with the `main` function. Here’s a basic program to print "Hello, World!" to the screen:
                </p>
                <div className={`bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-auto`}>
                    <pre className="text-xs md:text-sm text-black dark:text-white">
                        <code>{`#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}`}</code>
                    </pre>
                    <CopyButton code={`#include <stdio.h>\n\nint main() {\n    printf("Hello, World!");\n    return 0;\n}`} />
                </div>
            </section>

            {/* Section 3: Data Types */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Data Types</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    C supports several data types, including:
                </p>
                <ul className="list-disc list-inside text-sm md:text-base mb-2">
                    <li><strong>int</strong>: Used for integers</li>
                    <li><strong>float</strong>: Used for single-precision floating-point numbers</li>
                    <li><strong>double</strong>: Used for double-precision floating-point numbers</li>
                    <li><strong>char</strong>: Used for single characters</li>
                </ul>
            </section>

            {/* Section 4: Operators */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Operators</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    C provides various operators for performing different operations. These include:
                </p>
                <ul className="list-disc list-inside text-sm md:text-base mb-2">
                    <li><strong>Arithmetic Operators</strong>: +, -, *, /, %</li>
                    <li><strong>Relational Operators</strong>: ==, !=, &gt;, &lt;, &gt;=, &lt;=</li>
                    <li><strong>Logical Operators</strong>: &&, ||, !</li>
                </ul>

                <p className="text-gray-700 text-sm md:text-base mb-2">Example:</p>
                <div className={`bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-auto`}>
                    <pre className="text-xs md:text-sm text-black dark:text-white">
                        <code>{`int a = 10, b = 5;
int sum = a + b;    // Addition
int isGreater = (a > b); // Relational Operator
int logical = (a > 5 && b < 10); // Logical Operator`}</code>
                    </pre>
                    <CopyButton code={`int a = 10, b = 5;\nint sum = a + b;\nint isGreater = (a > b);\nint logical = (a > 5 && b < 10);`} />
                </div>
            </section>

            {/* Section 5: Arrays */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Arrays</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    An array is a collection of data items of the same type stored at contiguous memory locations. Here’s an example of defining an integer array:
                </p>
                <div className={`bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-auto`}>
                    <pre className="text-xs md:text-sm text-black dark:text-white">
                        <code>{`int numbers[5] = {1, 2, 3, 4, 5}; // Array of integers`}</code>
                    </pre>
                    <CopyButton code={`int numbers[5] = {1, 2, 3, 4, 5};`} />
                </div>
            </section>

            {/* Section 6: Pointers */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Pointers</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    A pointer is a variable that stores the address of another variable. Pointers allow for efficient memory management and manipulation.
                </p>
                <div className={`bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-auto`}>
                    <pre className="text-xs md:text-sm text-black dark:text-white">
                        <code>{`int x = 10;
int *ptr = &x; // Pointer to x`}</code>
                    </pre>
                    <CopyButton code={`int x = 10;\nint *ptr = &x;`} />
                </div>
            </section>

            {/* Section 7: Structures */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Structures</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    Structures allow grouping of variables of different data types under a single name, useful for creating complex data types.
                </p>
                <div className={`bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-auto`}>
                    <pre className="text-xs md:text-sm text-black dark:text-white">
                        <code>{`struct Person {
    char name[50];
    int age;
    float salary;
};`}</code>
                    </pre>
                    <CopyButton code={`struct Person {\n    char name[50];\n    int age;\n    float salary;\n};`} />
                </div>
            </section>

            {/* Section 8: Functions */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Functions</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    Functions allow code to be modularized and reused. Here’s an example of a function in C that adds two numbers:
                </p>
                <div className={`bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-auto`}>
                    <pre className="text-xs md:text-sm text-black dark:text-white">
                        <code>{`int add(int a, int b) {
    return a + b;
}

int main() {
    int sum = add(5, 3);
    printf("Sum = %d", sum);
    return 0;
}`}</code>
                    </pre>
                    <CopyButton code={`int add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int sum = add(5, 3);\n    printf("Sum = %d", sum);\n    return 0;\n}`} />
                </div>
            </section>

            {/* Section 9: Input and Output */}
            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Input and Output</h2>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                    C provides standard input/output functions such as `printf` and `scanf` for printing and reading data.
                </p>
                <div className={`bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-auto`}>
                    <pre className="text-xs md:text-sm text-black dark:text-white">
                        <code>{`#include <stdio.h>

int main() {
    int age;
    printf("Enter your age: ");
    scanf("%d", &age);
    printf("Your age is %d", age);
    return 0;
}`}</code>
                    </pre>
                    <CopyButton code={`#include <stdio.h>\n\nint main() {\n    int age;\n    printf("Enter your age: ");\n    scanf("%d", &age);\n    printf("Your age is %d", age);\n    return 0;\n}`} />
                </div>
            </section>
        </div>
    );
}

export default CDemo;
