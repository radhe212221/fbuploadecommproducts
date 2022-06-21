import React, { useState, useEffect } from 'react';
import { url } from './config';
import axios from 'axios';
export default function Home() {
  const [a, seta] = useState([]); //products
  const [b, setb] = useState([]); //categories

  const getCAts = (d) => {
    let temp1 = Array.from(new Set(d.map((x) => x.tags)));
    let temp2 = temp1?.map((x) => ({
      name: x,
      count: d?.filter((y) => y.tags === x)?.length || 0,
    }));
  };
  const loadPrdocust = () => {
    axios
      .get(`${url}/products.json`)
      .then((d) => {
        let temp = {};
        let x = Object.keys(d);
        let y = Object.values(d);
        for (let i = 0; i < x.length; i++) {
          temp.push({ id: x[i], ...y[i] });
        }
        return temp;
      })
      .then((d) => {
        seta(d);
        setb(getCAts(d));
      });
  };
  useEffect(loadPrdocust, []);

  return (
    <div>
      <h1>all categorues {b.length}</h1>
      {b?.map((x) => (
        <button>
          {x.name} {x.count}
        </button>
      ))}
      <h1>all products {a.length}</h1>
      <div className="products">
        {a?.map((x) => (
          <Product key={x.id} {...x} />
        ))}
      </div>
    </div>
  );
}

function Products({ id, title, price, image, tags }) {
  return (
    <div>
      <img width="50" height="50" src={image} />
      <div>{x.id}</div>
      <div>{x.title}</div>
      <div>{x.price}</div>
    </div>
  );
}
