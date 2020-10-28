const getMyPacks = () => {
    return fetch('/api/getMyPacks')
        .then(res => res.json())
        .catch(err => {
            console.log(err)
            return null
        })

}

export default getMyPacks