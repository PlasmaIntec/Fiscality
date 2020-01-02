const getResults = () => {
    return fetch("/scrape", { 
        method: "GET"
    })
        .then(res => res.json())
        .then(json => {
            window.json = json.data; // REMOVE
            return json.data; 
        });
};

export default getResults;