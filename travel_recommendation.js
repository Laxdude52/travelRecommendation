const contactName = document.getElementById("custName");
const contactEmail = document.getElementById("custEmail");
const contactMessage = document.getElementById("custMessage");
const btnContactSubmit = document.getElementById("submitForm");
const close = document.getElementById("close-btn");
const searchWords = document.getElementById("searchBar");
const btnSearch = document.getElementById("btnSearch");
const btnClear = document.getElementById("btnReset");
const result = document.getElementById("resultContainer");
const mydiv = document.getElementById("dropdown");
const catagories = ["beach", "temple", "countr"]

const clearsearch = () => {
    searchWords.value = "";
    mydiv.style.display = "none";
    console.log("Clearing");
  };
  
  btnClear.addEventListener("click", clearsearch);

  const showResult = (name, img, info) => {
    if (mydiv.style.display === "none" || mydiv.style.display === "") {
      mydiv.style.display = "block";
    } else {
      mydiv.style.display = "none";
    }
    result.innerHTML = `
      <h2 class="title">${name}</h2>
      <img class="search-img" src=${img} alt="sofia">
      <p class="description">${info}</p>
    `;
  };
  
  const closeDropdown = () => {
    mydiv.style.display = "none";
    query.value = "";
  };
  
  close.addEventListener("click", closeDropdown);
  
  const searchError = () => {
    if (mydiv.style.display === "none" || mydiv.style.display === "") {
      mydiv.style.display = "block";
    } else {
      mydiv.style.display = "none";
    }
  
    result.innerHTML = `<p class="notfound">Sorry we can't find your search</p>`;
  };
  
  fetch("travel_recommendation_api.json")
    .then((res) => res.json())
    .then((data) => {
      const search = () => {
        let searchQuery = searchWords.value.toLowerCase();
        let notfound = true;
  
        data.countries.map((country) => {
            if(searchQuery.includes("count")) {
                country.cities.array.forEach(element => {
                    showResult(city.name, city.imageUrl, city.description);
                    notfound = false;
                });
            }
        });
  
        data.temples.map((temple) => {
            if (searchQuery.includes("temple")) {
                temple.array.forEach(element => {
                    showResult(temple.name, temple.imageUrl, temple.description);
                    notfound = false;
                })
            }
        });
  
        data.beaches.map((beach) => {
            if (searchQuery.includes("beach")) {
                beach.array.forEach(element => {
                    showResult(beach.name, beach.imageUrl, beach.description);
                    notfound = false;  
                })
            }
        });
  
        if (notfound) {
          searchError();
        }
      };
  
      btnSearch.addEventListener("click", search);
    });
