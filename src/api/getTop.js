const getTop = () => { 
    return fetch(`/api/getTop`)
        .then(res => res.json())
        .catch(err => {
            console.log(err)
            return null
        })
}

export default getTop;