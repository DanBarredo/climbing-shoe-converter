shoeBrands = [
    {
        // e.g. Kronos sizes
        "id": "brand-1",
        "comfort": 0.88,
        "trad": 0.95,
        "advanced": 1,
        "snug": 1.06,
        "bouldering": 1.14,
    },
    {
        // e.g. Kronos sizes
        "id": "brand-2",
        "comfort": 0.88,
        "trad": 0.95,
        "advanced": 1,
        "snug": 1.06,
        "bouldering": 1.14,
    },
    {
        // e.g. Kronos sizes
        "id": "brand-3",
        "comfort": 0.88,
        "trad": 0.95,
        "advanced": 1,
        "snug": 1.06,
        "bouldering": 1.14,
    },
    {
        // e.g. Kronos sizes
        "id": "brand-4",
        "comfort": 0.88,
        "trad": 0.95,
        "advanced": 1,
        "snug": 1.06,
        "bouldering": 1.14,
    },
]

// shoeBrands.forEach((brand) => {
//     console.log("id: " + brand.comfort)
// });


// variables
const shoeSize = document.getElementById("select-size");
const desiredFit = document.getElementById("select-fit");
const shoeBtns = document.querySelectorAll("button");
const results = document.querySelector(".results");
const climbSize = document.getElementById("climb-size");
// console.log(shoeSize.options[shoeSize.selectedIndex].value);
// console.log(desiredFit.options[desiredFit.selectedIndex].value)

shoeBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        var shoeBrand = e.currentTarget.id;
        var size = shoeSize.options[shoeSize.selectedIndex].value;
        var fit = desiredFit.options[desiredFit.selectedIndex].value;
        console.log(shoeBrand + ", " + size + ", " + fit);
        newSize = calculateSize(shoeBrand, size);
        console.log(newSize);
        results.classList.add("show-results");
        showResults(newSize);
    })
});

// calculate climbing shoe size
function calculateSize(shoeBrand, size) {
    var calculatedFit, conversion;
    var fit = desiredFit.options[desiredFit.selectedIndex].value;
    shoeBrands.forEach((brand) => {
        if (shoeBrand == brand.id) {
            shoeFits = Object.keys(brand);
            for (var key in brand) {
                if (fit == key) {
                    conversion = brand[key];
                }
            }
        }
    });
    calculatedFit = size / conversion;
    calculatedFit = (Math.round(calculatedFit*2) / 2).toFixed(1);
    // console.log(calculatedFit);
    return calculatedFit;
}

// return new size to HTML
function showResults(size) {
    if (size == 0) {
        results.classList.add("no-results");
        climbSize.innerHTML = "did you enter your shoe size??";
    }
    else if (isNaN(size)) {
        results.classList.add("no-results");
        climbSize.innerHTML = "did you choose your desired fit??";
    }
    else {
        results.classList.remove("no-results");
        results.classList.add("show-results");
        climbSize.innerHTML = size;
    }
}