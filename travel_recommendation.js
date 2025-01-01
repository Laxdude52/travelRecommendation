const contactName = document.getElementById("custName");
const contactEmail = document.getElementById("custEmail");
const contactMessage = document.getElementById("custMessage");
const btnContactSubmit = document.getElementById("submitForm");

const searchWords = document.getElementById("searchBar");
const btnSearch = document.getElementById("btnSearch");
const btnClear = document.getElementById("btnReset");

const catagories = ["beach", "temple", "countr"]

btnSearch.addEventListener("click", () => {
    let words = searchWords.value;
    words = words.toLowerCase();
    catagories.forEach((e) => {
       if(words.includes(e)) {
            words = e;
       } 
    });
    showResults(words);
});

const showResults = (category) => {

}