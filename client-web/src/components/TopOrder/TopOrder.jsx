import { topOrder } from "../../data"
import "./topOrder.scss"

const TopOrder = () => {
  return (
    <div className="topBox">
      <h1>Top Orders</h1>
      <div className="list">
        {topOrder.map(order=>(
          <div className="listItem" key={order.id}>
            <div className="order">
              <img src={order.img} alt="" />
              <div className="orderText">
                <span className="name">{order.name}</span>
                <span className="soldOut">{order.soldOut}</span>
              </div>
            </div>
            <span className="price">Rp.{order.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopOrder