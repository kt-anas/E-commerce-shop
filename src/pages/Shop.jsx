import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import style from '../styles/shop.module.css'
import axios from 'axios'

function shop() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:3000/products');
      setData(res.data);
      console.log(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className={style.shop}>
      <div className={style.container}>
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}

      </div>
    </div>
  );
}

export default shop;