import "./topBox.scss"
import {topSales} from "../../data.js"

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Sales</h1>
      <div className="list">
        {topSales.map(user=>(
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">Rp.{user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox