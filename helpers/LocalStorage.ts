export const getArticleId = () => {
  const memorizedId = localStorage.getItem('currentArticleId')
  if(memorizedId) {
    return memorizedId
  } else {
    localStorage.setItem('currentArticleId', null)
    return null
  }
}

export const setArticleId = (id) => {
  localStorage.setItem('currentArticleId', id)
}
