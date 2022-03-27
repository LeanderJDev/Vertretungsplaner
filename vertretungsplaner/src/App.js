import './App.css';
import Row from './Row.js';
import xmldata from './Klassen.xml';
// import { useState, useRef, useEffect } from 'react'

function App() {
  function generate(cl) {
    let data
    let xhr = new XMLHttpRequest();
    xhr.open("GET", xmldata, false);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        const parser = new DOMParser();
        data = parser.parseFromString(xhr.response, "application/xml");
      }
    }
    xhr.send();
    return data;
  }

  function parse(xml, cl) {
    let raw = xml.querySelectorAll('Pl')[cl].querySelectorAll('Std');
    let data = { 0: { 'St': 0, 'Fa': 0, 'FaAe': 0, 'Le': 0, 'LeAe': 0, 'Ra': 0, 'RaAe': 0, 'Nr': 0, 'If': 0 } }
    for (let i = 0; i < raw.length; i++) {
      let childs = raw[i].children
      if (childs.length === 6) {
        data[i] = { 'St': childs[0].innerHTML, 'Fa': childs[1].innerHTML, 'FaAe': 0, 'Le': childs[2].innerHTML, 'LeAe': 0, 'Ra': childs[3].innerHTML, 'RaAe': 0, 'Nr': childs[4].innerHTML, 'If': childs[5].innerHTML }
      }
      else if (childs.length === 7) {
        data[i] = { 'St': childs[0].innerHTML, 'Fa': childs[1].innerHTML, 'FaAe': 0, 'Ku': childs[2].innerHTML, 'Le': childs[3].innerHTML, 'LeAe': 0, 'Ra': childs[4].innerHTML, 'RaAe': 0, 'Nr': childs[5].innerHTML, 'If': childs[6].innerHTML }
      }
    }
    return data
  }

  const cl = 14;
  let data = parse(generate(cl), cl);

  return (
    <div>
      <h1>Boah ist das ein krasser VP</h1>
      <ul>
        {Object.keys(data).map((item,index) => <Row key={index} data={data[item]}/>)}
      </ul>
    </div>
  );
}

export default App;
