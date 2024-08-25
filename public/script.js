function filterData() {
    const input = JSON.parse(document.getElementById('apiInput').value);
    const data = input.data;
    const filterType = document.getElementById('filterType').value;
    let filteredResponse = "";

    if (filterType === "numbers") {
        filteredResponse = data.filter(item => !isNaN(item)).join(",");
    } else if (filterType === "alphabets") {
        filteredResponse = data.filter(item => /^[a-zA-Z]$/.test(item)).join(",");
    } else if (filterType === "highest-lowercase") {
        const lowercaseAlphabets = data.filter(item => /^[a-z]$/.test(item));
        if (lowercaseAlphabets.length > 0) {
            filteredResponse = lowercaseAlphabets.sort().pop(); // Returns the highest lowercase letter
        } else {
            filteredResponse = "No lowercase letters found.";
        }
    }

    document.getElementById('filteredResponse').innerText = `Filtered Response: ${filteredResponse}`;
}

function clearFilter() {
    document.getElementById('filteredResponse').innerText = "Filtered Response: ";
}
