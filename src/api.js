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


export const getSingleArticle = (article_slug) => {
    return myApi.get(`/articles/${article_slug}`).then((res) => {
      return res.data.article;
    });
  };


  export const getComments = (article_id) => {
    return myApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
        return data.comments
    });
  }

  export const postComment = (article_id, newCommentText) => {
const postBody = {
    username: "grumpy19",
    body: newCommentText,
}
    return myApi.post(`/articles/${article_id}/comments`, postBody).then(({ data }) => {
        console.log(data, "Data")
        return data.comments
    });
  }


  export const getUsers = () => {
    return myApi.get('/users')
    .then((res) => {
        return res.data.users
    })
}