import axios from 'axios'


const myApi = axios.create({
    baseURL: 'https://musasnews.onrender.com/api'
    
})

export const getArticles = () => {
    return myApi.get('/articles')
    .then((res) => {
        return res.data.articles
    })
}

export const getTopics = () => {
    return myApi.get('/topics')
    .then((res) => {
        return res.data.topics
    })
}

