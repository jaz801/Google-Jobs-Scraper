
Use the javascript console in chrome.

const elements = document.querySelectorAll("div.BjJfJf.PUpOsf, div.vNEEBe, div.Qk80Jf");

let csvContent = "data:text/csv;charset=utf-8,function,company,foundBy\n";

elements.forEach((element) => {
  if (element.classList.contains("BjJfJf") && element.textContent.trim() !== "") {
    csvContent += `"${element.textContent.trim()}",,`;
  } else if (element.classList.contains("vNEEBe") && element.textContent.trim() !== "") {
    csvContent += `,"${element.textContent.trim()}",`;
  } else if (element.classList.contains("Qk80Jf") && element.textContent.includes("via")) {
    csvContent += `,,${element.textContent.trim()}\n`;
  }
});

const encodedUri = encodeURI(csvContent);
const link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "output.csv");
document.body.appendChild(link); 
link.click();

