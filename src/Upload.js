import React, { useState } from 'react';
import { url } from './config';
import axios from 'axios';
export default function Home() {
  const [ob, setob] = useState({
    title: '',
    price: 0,
    image: null,
    tags: '',
  }); //products
  const handlefile = (e) => {
    let file = e.target.files[0];
    let fr = new FileReader();
    fr.onload = () => setob({ ...ob, image: fr.result });
    if (file) {
      return fr.readAsDataURL(file);
    }
  };
  const upload = () => {
    axios
      .post(`${url}/products.json`, ob)
      .then((e) => alert('uploaded'))
      .catch((e) => alert('not uploaded'));
  };
  return (
    <div>
      <h1>upload new </h1>
      <input
        placeholder="title"
        value={ob.title}
        onChange={(e) => setob({ ...ob, title: e.target.value })}
      />
      <input
        placeholder="tags"
        value={ob.tags}
        onChange={(e) => setob({ ...ob, tags: e.target.value })}
      />

      <input
        placeholder="price"
        value={ob.price}
        onChange={(e) => setob({ ...ob, price: e.target.value })}
      />
      <input type="file" onChange={handlefile} />
      <button onClick={upload}>upload</button>
    </div>
  );
}
