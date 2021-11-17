

const dataFetcher = async function(url=undefined){
    console.log(url)
    const response = await fetch(url);
    console.log(response)
    const toDoJSON = await response.json()
    
    return toDoJSON
}

export {dataFetcher}

