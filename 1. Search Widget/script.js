// console.clear();

const list = [
        "Pierce Brown - Red Rising",
        "Pierce Brown - Golden Son",
        "Pierce Brown - Morning Star",
        "Pierce Brown - Iron Gold",
        "Pierce Brown - Dark Age",
        "Pierce Brown - Red God",
];

const input = document.querySelector("#search");

function searchInput(){
    console.clear();

    const searchStrg = input.value;
    const searchStrgLower = searchStrg.toLocaleLowerCase();
    const ul = document.querySelector("#results")
    ul.innerHTML = ""

    if ( searchStrg.length > 3 ) {
        let listHTML = "";

        

        for (let i = 0; i < list.length; i++) {
            const itemLowerCase = list[i].toLocaleLowerCase();

            if (itemLowerCase.includes(searchStrgLower)) {
                
                // Find the required points to split the string
                const indexStart = itemLowerCase.indexOf(searchStrgLower);
                const indexEnd = indexStart + searchStrgLower.length;
                
                // Split the string to (before the typed text) | (typed text) | (after typed text)
                const beforeMatch = list[i].slice(0, indexStart);
                const match = list[i].slice(indexStart, indexEnd);
                const afterMatch = list[i].slice(indexEnd);

                // Build the li with the highlighted text
                const highlightedText = `${beforeMatch}<span class="highlight">${match}</span>${afterMatch}`;
                console.log(highlightedText);

                listHTML +=`<li>${highlightedText}</li>`
            }
            ul.innerHTML = listHTML;
        }
    }
}