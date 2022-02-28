const loadMobileName = () => {
    const searchContent = document.getElementById("search-field");
    const searchText = searchContent.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then((Response) => Response.json())
        .then((json) => displayMobileName(json.data));
    searchContent.value = "";
};

const displayMobileName = (mobiles) => {
    // console.log(mobiles);
    const displayMobiles = document.getElementById("display-search");
    displayMobiles.textContent = "";
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
                            <button class="btn btn-outline-primary" onclick="loadMobileId('${mobile.slug}')">Details</button>
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
        .then((json) => displayMobileData(json.data));
};

const displayMobileData = (mobileData) => {
    console.log(mobileData);
    const detailsData = document.getElementById("details");
    const div = document.createElement("div");
    div.classList.add("card", "mb-3");
    div.innerHTML = `
        <img src="${mobileData.image}" class="card-img-top" alt="..." />
        <div class="card-body p-4">
            <h3 class="card-title display-6 my-3">${mobileData.name}</h3>
            <p class="card-text">
                <small class="text-muted"
                    >${
                        mobileData.releaseDate
                            ? mobileData.releaseDate
                            : "No release date"
                    }</small
                >
            </p>
            <h4 class= "my-3">Brand: ${mobileData.brand}</h4>
            <ul style = "margin:0; padding:0" class="mb-3">
                <li>${mobileData.mainFeatures.storage}</li>
                <li>${mobileData.mainFeatures.chipSet}</li>
                <li>${mobileData.mainFeatures.displaySize}</li>
            </ul>
            <p class="lead"><b>Sensors:</b> ${mobileData.mainFeatures.sensors.join(', ')}</p>
        </div>
    `;
    detailsData.appendChild(div);
};
