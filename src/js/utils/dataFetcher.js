

const dataFetcher = async function(url=undefined){
    const response = await fetch(url);
    const toDoJSON = await response.json()
    return toDoJSON
}

export {dataFetcher}

