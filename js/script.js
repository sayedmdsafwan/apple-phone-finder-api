const loadMobileName = () => {
    const searchText = document.getElementById("search-field").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then((Response) => Response.json())
        .then((json) => displayMobileName(json.data));
};

const displayMobileName = (mobiles) => {
    // console.log(mobiles);
    const displayMobiles = document.getElementById("display-search");
    mobiles.forEach((mobile) => {
        console.log(mobile);
        const div = document.createElement("div");
        div.classList.add("col-md-6");
        div.innerHTML = `
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img
                            src="${mobile.image}"
                            class="img-fluid rounded-start"
                        />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3 class="card-title">${mobile.phone_name}</h3>
                            <p class="card-text">
                                Brand: ${mobile.brand}
                            </p>
                            <button onclick="loadMobileId('${mobile.slug}')">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        displayMobiles.appendChild(div);
    });
};

const loadMobileId = (mobileId) => {
    const url = `https://openapi.programming-hero.com/api/phone/${mobileId}`;
    fetch(url)
        .then((Response) => Response.json())
        .then((json) => console.log(json.data));
};
