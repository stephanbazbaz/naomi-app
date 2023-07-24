import React from "react"
import "./More.scss"
import { cardArr, articleArr } from "./Constants"
import ArticleCard from "../Common/ArticleCard/ArticleCard"
import ModalComponent from "../Common/ModalComponent/ModalComponent"
import Article from "../Article/Article"
const More = () => {
  const thinikingMat = "חומר למשחבה"
  const [open, setOpen] = React.useState(false)
  const [articleId, setArticleId] = React.useState(0)
  const handleOpen = (id) => {
    setArticleId(id)
    setOpen(true)
  }
  const handleClose = () => setOpen(false)
  return (
    <div className="more">
      <div className="shadow-contanier">
        <h1 title="למידע נוסף על נעמי היימן איתי" className="title">
          {thinikingMat}
        </h1>
        <div className="more-card-row">
          {articleArr?.map((item, idx) => (
            <ArticleCard
              handleClick={() => handleOpen(item.id)}
              key={`card-${idx}`}
              title={item.title}
              text={item.text}
              path={`${item.path}/${item.id}`}
            />
          ))}
        </div>
      </div>
      <ModalComponent
        open={open}
        handleClose={handleClose}
        articleId={articleId}
        children={<Article id={articleId} />}
      />
    </div>
  )
}

export default More
