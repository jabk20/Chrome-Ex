async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=8dc563f0-7e55-4500-9ef5-a6bc526e74ae&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success") return;

            const matchesList = data.data;

            if(!matchesList)return [];

            const relevantData = matchesList.map(match => `${match.name}, ${match.status}`)

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match}</li>`).join(' ');

            return relevantData;
        })
        .catch(e => console.log(e))
}

getMatchData();