import React, {useState, useEffect} from 'react';
import axios from "axios";
import Fanpage from './Fanpage';
import './main.css';

export default function RenderPage() {

  const [data, getData] = useState('');

  useEffect(() => {
    getDisplay();
  }, [])

  const getDisplay = () => {
    axios.get("http://localhost:5000/show").then((response) => {
      getData(response.data);
    }).catch(error => console.log('error'))
  }
  return (
    <div id="fanpage">
      <Fanpage data={data}/>
    </div>
  );
}
