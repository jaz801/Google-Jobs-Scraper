
Use the javascript console in chrome.

scroll down so you get all the vacancies. 


const elements = document.querySelectorAll("div.BjJfJf.PUpOsf, div.vNEEBe, div.Qk80Jf");

elements.forEach((element) => {
  if (element.classList.contains("Qk80Jf") && element.textContent.includes("via")) {
    console.log(element);
  } else if (!element.classList.contains("Qk80Jf")) {
    console.log("Other element:", element);
  }
});
