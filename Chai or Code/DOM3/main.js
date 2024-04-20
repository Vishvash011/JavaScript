function addLanguage(langName)
{
    const li = document.createElement('li');
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li);
}

addLanguage("Python");
addLanguage("Java");
addLanguage("C++");


function addOptimizeLang(langName)
{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);
}

addOptimizeLang("C");
addOptimizeLang("Ruby");


// Edit
const secondLang = document.querySelector("li:nth-child(6)");
// secondLang.innerHTML = "mojo";
const newElement = document.createElement("li");
newElement.textContent = "mojo";
secondLang.replaceWith(newElement);



//edit
const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li>TypeScript</li>";



//remove
const lastLang = document.querySelector("li:last-child");
lastLang.remove();


document.querySelector("li:last-child").remove();