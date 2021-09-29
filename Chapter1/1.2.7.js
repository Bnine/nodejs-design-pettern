const name = "Bnine";
const interests = ["php", "node", "OOP", "SOLID", "architecture", "Japan"];
const birth = {year: "yyyy", month: "mm", day: "dd", place: "Busan"};
const text = `${name} is a PHP programer.
${name} is interested in many topics such as ${interests.join(' & ')}.
he was born in ${birth.year} - ${birth.month} - ${birth.day} at ${birth.place}
`;
console.log(text);