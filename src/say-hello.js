const $ = require('jquery');

// const fileContent = {};
//
// fileContent.niceMessage = () => {
//     console.log("Your doing a great job");
// }
//
// module.exports = fileContent;



const fileContent = {};
fileContent.sayHello = () => {
    return "Your doing fine";
};
fileContent.add = (a,b) => {
    return a + b;
};
fileContent.addAHeader = (string,id) => {
    return `<h2 id=${id}>${string}</h2>`
}
fileContent.newAppend = (append,element,content,elementend) =>{
    return $(append).append(element + content + elementend)
}

export default fileContent;
