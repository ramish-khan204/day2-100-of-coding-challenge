//Question 1:Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//"Albert Einstein once said, “A person who never made a mistake never tried anything new.”

console.log
('Muhammad Ali Jinnah once said, “Think a hundred times before you take a decision, but once that decision is taken, stand by it as a one man ”');

//Question 2:Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person: string = "Muhammad Ali Jinnah";
let message: string = `${famous_person} once said, “Think a hundred times before you take a decision, but once that decision is taken, stand by it as a one man.”`;

console.log(message);


//Question 3:Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.

let name1: string = "\t\n Ramish \t\n"; // This saves the name with whitespace

console.log(name1); // Shows the name with whitespace
console.log(name1.trim()); // Shows the name without whitespace