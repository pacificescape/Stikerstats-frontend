const getTop = () => { 
    return fetch(`/api/getTop`, {
        mode: 'no-cors'
    })
        .then((res) => res.json())
        .then((res) => res)
        .catch(err => err)
}

export default getTop;