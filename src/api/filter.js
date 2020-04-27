import axios from 'axios'
const filterMovie = async (query) => {
    let actor = [], actress = []
    console.log(query)
    let url = "http://localhost:8000/moviefilter/query?"
    let m = url
    console.log(m)
    query.map((item, key) => {
        if (item.cat == "Year")
            if (url == m)
                url = url + "year=" + item.key
            else
                url = url + "&year=" + item.key
        if (item.cat == "Rating") {
            if (url == m)
                url = url + "rating=" + item.key
            else
                url = url + "&rating=" + item.key
        }
        if (item.cat == "Actor") {
            actor.push(item.key)
            console.log(actress)
            if (url == m)
                url = url + "actor=" + JSON.stringify(actress)
            else
                url = url + "&actor=" + JSON.stringify(actress)
        }
        if (item.cat == "Actress") {
            actress.push(item.key)
            console.log(actress)
            if (url == m)
                url = url + "actress=" + JSON.stringify(actress)
            else
                url = url + "&actress=" + JSON.stringify(actress)
        }
        if (item.cat == "Producer") {
            if (url == m)
                url = url + "producer=" + JSON.stringify(item.key)
            else
                url = url + "&producer=" + JSON.stringify(item.key)
        }
        if (item.cat == "Director") {
            if (url == m)
                url = url + "director=" + JSON.stringify(item.key)
            else
                url = url + "&director=" + JSON.stringify(item.key)
        }
    })
    console.log(url)
    let res = await axios.get(url)
    console.log(res.data.movie)
    if (res) {
        return res.data.movie
    }
    else {
        return false
    }

}
export default filterMovie