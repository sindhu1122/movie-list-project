import axios from 'axios'
const filterMovie = async (query) => {
    console.log(query)
    let url = "http://localhost:8000/listfilter/query?"
    let m = url
    console.log(m)
    query.map((item, key) => {
        if (item.cat == "Movie")
            if (url == m)
                url = url + "movieName=" + item.key
            else
                url = url + "&movieName=" + item.key

        if (item.cat == "Age") {
            if (url == m)
                url = url + "age=" + item.key
            else
                url = url + "&age=" + item.key
        }

    })
    console.log(url)
    let res = await axios.get(url)
    console.log(res.data.person)
    if (res) {
        return res.data.person
    }
    else {
        return false
    }

}
export default filterMovie