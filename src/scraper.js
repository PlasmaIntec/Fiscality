const getResults = () => {
    fetch("/scrape", { 
        method: "GET"
    })
        .then(res => res.json())
        .then(json => console.log(json));
};

export default getResults;