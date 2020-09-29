const axios = require('axios')

const url = 'https://api.publicapis.org/entries'

const usePromise = (url) => {
    axios
        .get(url)
        // get first 20 choices
        .then(({ data }) => data.entries.slice(0, 21))
        .then((choices) => {
            choices.forEach(({ Cors, Description, Link }) => {
                if (Cors === 'yes') {
                    console.log(Description)
                }
                else if (Cors === 'unknown') {
                    console.log(Link)
                }
            })
        })
        .catch((err) => console.log(err))
}

const useAsync = async (url) => {
    try {
        const response = await axios.get(url)
        const data = await response.data
        const first20 = await data.entries.slice(0, 21)
        first20.forEach(({ Cors, Description, Link }) => {
            if (Cors === 'yes') {
                console.log(Description)
            }
            else if (Cors === 'unknown') {
                console.log(Link)
            }
        })
    } catch (err) { console.log(err) }
}
usePromise(url)
useAsync(url) 