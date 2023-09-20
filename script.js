document.addEventListener('DOMContentLoaded', function() {
    const residentsList = document.getElementById('residents-list');
    const flatsList = document.getElementById('flats-list');

    // Sample data, you can replace this with actual data
    const residentsData = [
        { name: 'John Doe', apartment: '101' },
        { name: 'Jane Doe', apartment: '102' },
        // Add more residents as needed
    ];

    const flatsData = [
        { name: 'Smith Family', flatNumber: '201' },
        { name: 'Johnson Family', flatNumber: '202' },
        // Add more flat owners as needed
    ];

    function populateList(listElement, data) {
        data.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `Name: ${item.name}, ${item.apartment || 'Flat Number'}: ${item.apartment || item.flatNumber}`;
            listElement.appendChild(listItem);
        });
    }

    populateList(residentsList, residentsData);
    populateList(flatsList, flatsData);
});
