const countryCodes = [
    { name: "India", code: "+91" },
    { name: "USA", code: "+1" },
    { name: "UK", code: "+44" },
    { name: "Australia", code: "+61" },
    { name: "UAE", code: "+971" },
    { name: "Singapore", code: "+65" },
    { name: "Japan", code: "+81" },
    // Add all other countries here
];

function populateCountryCodes(selectElementId) {
    const select = document.getElementById(selectElementId);
    if (!select) return;
    
    countryCodes.forEach(c => {
        let opt = document.createElement('option');
        opt.value = c.code;
        opt.innerHTML = `${c.code} (${c.name})`;
        select.appendChild(opt);
    });
}
