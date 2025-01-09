console.clear();

const genres = [
    "Action",
    "Drama",
    "Comedy",
    "Family",
    "Animation",
    "Social",
    "Musical",
    "Thriller",
    "Horror"
]

function populate() {
    const datalist = document.querySelector(".available-genres");

    for (const gen of genres) {
        const option = `<option value="${gen}"></option>`;
        datalist.innerHTML += option;
        console.log(datalist);
    }
}
populate();

function initApp() {
    const input = document.querySelector("#genre-choice");

    function inputHandler() {
        const userInput = event.target.value.toLowerCase();

        const allCinemas = document.querySelectorAll("details");

        allCinemas.forEach(details => {
            // Targeting and Reseting the counter for specific <details>
            const spanCounter = details.querySelector(".bubble");
            spanCounter.textContent = "";
            spanCounter.style.visibility = "hidden";
            let counter = 0;

            // Getting all <li> items from specific <details>
            const lis = details.querySelectorAll("ul li");

            // Removing all style if input is null
            if (userInput === "") {
                for (const li of lis) {
                    li.style.color = "";
                    li.style.fontWeight = "";
                    li.style.backgroundColor = "";
                    spanCounter.style.visibility = "hidden";
                }

                return;
            }

            for (const li of lis) {
                // Removing the styling from any previous input
                li.style.color = "";
                li.style.fontWeight = "";
                li.style.backgroundColor = "";


                // Applying the desired styling if input matches the content of <li>
                // and increasing the counter
                if (li.textContent.toLowerCase().includes(userInput)) {
                    li.style.color = "yellow";
                    li.style.fontWeight = "bold";
                    li.style.backgroundColor = "#736b68";
                    counter++;
                }
                if (counter > 0) {
                    spanCounter.textContent = counter;
                    spanCounter.style.visibility = "visible";
                }

            }
        })

    }
    input.addEventListener("input", inputHandler);

}

initApp();