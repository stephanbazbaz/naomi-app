import React from "react"
import "./About.scss"
const About = () => {
  return (
    <div className="about">
      <div
        className="text-warp"
        itemProp="person"
        itemScope
        itemType="https://schema.org/Person"
      >
        <h1
          title="Naomi Heyman Itai /איתי ד״ר נעמי היימן איתי"
          className="title"
        >
          ד״ר נעמי היימן איתי{" "}
        </h1>
        <div className="text">
          פסיכותרפיסטית מתמחה בטיפול פסיכותרפיה אקספרסיבית.
          <br />
          מציאת השפה האישית של כל מטופל.
          <p className="conflicts">
            קונפליקטים, קוטביות, ופיוס באמצעות התהליך היצירתי.
          </p>
          35 שנות נסיון, בעלת קליניקה פרטית ליחידים ולזוגות, מתבגרים ובוגרים.{" "}
          <br />
          תואר שני בתרפיה אקספרסיבית ואומניות Lesley College, Boston
          <br />
          דוקטורט PHD מאוניברסיטת סנט דניס, פאריס. <br />
          מנהלת סדנאות והרצאות בארץ ובאירופה, הנחיית קבוצות בשילוב אומנויות.
        </div>
      </div>
    </div>
  )
}

export default About
