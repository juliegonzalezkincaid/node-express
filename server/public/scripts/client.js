console.log('script sourced.');


console.log('JS Sourced');

function getTrains() {
    axios.get('/train').then((response) => {
        console.log(response);
        let trainFromServer = response.data;
        let contentDiv = document.querySelector('#content');
        for (let train of trainFromServer) {
            contentDiv.innerHTML += `
                <p>${train.name}, ${train.color}</p>
            `;
        }
    });
}

getTrains();