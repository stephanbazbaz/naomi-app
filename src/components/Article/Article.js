import React, { useEffect, useState } from "react"
import "./Article.scss"
import { articleArr } from "../More/Constants"
function Article(props) {
  const { id } = props
  const [selectedArticle, setSelectedArticle] = useState(null)
  useEffect(() => {
    const found = articleArr?.find((item) => item?.id === Number(id))
    setSelectedArticle(found)
  }, [id])

  return (
    <div className="article-container">
      <h3 className="title">{selectedArticle?.title}</h3>
      <p className="text">{selectedArticle?.text}</p>
    </div>
  )
}

export default Article
