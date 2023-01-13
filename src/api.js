import axios from 'axios'


const myApi = axios.create({
    baseURL: 'https://musasnews.onrender.com/api'
    
})

export const getArticles = (topic_name) => {
    return myApi.get('/articles')
    .then((res) => {
        
        if (!topic_name) {
            return res.data.articles
        } else {
           const filteredArray = res.data.articles.filter((article) => article.topic === topic_name)
          return filteredArray;

        }
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
        return data.comments
    });
  }


  export const getUsers = () => {
    return myApi.get('/users')
    .then((res) => {
        return res.data.users
    })
}


export const patchVote = (article_id, votes) => {
    const patchBody = {
        inc_votes: votes,
    };
    return myApi.patch(`/articles/${article_id}`, patchBody)
    .then(({ data } ) => {
        return data.article;
    })
}