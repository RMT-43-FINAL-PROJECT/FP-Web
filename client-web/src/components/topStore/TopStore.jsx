import { topStore } from "../../data"
import "./topStore.scss"

const TopStore = () => {
  return (
    <div className="topBox">
      <h1>Top Store</h1>
      <div className="list">
        {topStore.map(store=>(
          <div className="listItem" key={store.id}>
            <div className="store">
              <img src={store.img} alt="" />
              <div className="storeText">
                <span className="name">{store.name}</span>
                <span className="ownerName">{store.ownerName}</span>
              </div>
            </div>
            <span className="totalOrder">Rp.{store.totalOrder}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopStore