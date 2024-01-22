import React from 'react'

const DetailPage = () => {
  return (
    <div className="musthave__card">
    <img
      src=""
      alt="must have"
      className="img"
    />
    <div className="p-4">
      <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">click</button>
      <h4 className="h4">{listProduct.name}</h4>
      <p className="p">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(listProduct.price)}</p>
    </div>
  </div>
  )
}

export default DetailPage