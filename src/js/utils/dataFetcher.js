

const dataFetcher = async function(url=null){

    const response = await fetch(url);
    const toDoJSON = await response.json()

    return toDoJSON
}

export {dataFetcher}

