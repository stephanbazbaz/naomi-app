import React from "react"
import "./More.scss"
import { cardArr } from "./Constants"
import ArticleCard from "../Common/ArticleCard/ArticleCard"
const More = () => {
  const thinikingMat = "חומר למשחבה"
  return (
    <div className="more">
      <div className="shadow-contanier">
        <h1 title="למידע נוסף על נעמי היימן איתי" className="title">
          {thinikingMat}
        </h1>
        <div className="more-card-row">
          {cardArr?.map((item, idx) => (
            <ArticleCard
              key={`card-${idx}`}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default More
