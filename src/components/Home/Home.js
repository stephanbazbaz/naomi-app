import React from "react"
import "./Home.scss"
import NAOMI_IMG from "../../Assets/naomi-heyman-itay.png"
const Home = () => {
  return (
    <div className="home">
      <div className="shadow-contanier">
        <h1 title="Naomi Heyman Itay / ד״ר נעמי היימן" className="title">
          ד״ר נעמי היימן איתי{" "}
        </h1>
        <div className="home-header">
          <div className="img-warp">
            <img
              alt="Naomi itay , naomi itai / נעמי היימן איתי פסיכוטרפיסטית עם ניסיון של שנים, כל מה שחיפשם על נעמי היימן"
              className="main-img"
              src={NAOMI_IMG}
            />
          </div>
        </div>
        <h1 title="Naomi Heyman Itai" className="sub-title">
          EXPRESSIVE THERAPY
        </h1>
      </div>
    </div>
  )
}

export default Home
