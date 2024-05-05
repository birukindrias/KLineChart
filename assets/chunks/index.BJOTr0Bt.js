const __vite__fileDeps=["assets/chunks/Chart.BEWR7XqS.js","assets/chunks/framework.C9pGYRs8.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{u as i,o as s,b as a,m as n,W as r,X as c}from"./framework.C9pGYRs8.js";const t=JSON.parse(`{"css":".button-container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  gap: 8px;\\n  margin-top: 10px;\\n  padding: 10px 22px;\\n}\\n\\n.button-container button {\\n  padding: 2px 6px;\\n  background-color: #1677FF;\\n  border-radius: 4px;\\n  font-size: 12px;\\n  color: #fff;\\n  outline: none;\\n  border: none;\\n}","html":"<div id=\\"container\\">\\n  <div id=\\"k-line-chart\\" style=\\"height:430px\\">\\n</div>","js":"import { init } from 'klinecharts'\\nimport './index.css'\\n\\nfunction genData (timestamp = new Date().getTime(), length = 800) {\\n  let basePrice = 5000\\n  timestamp = Math.floor(timestamp / 1000 / 60) * 60 * 1000 - length * 60 * 1000\\n  const dataList = []\\n  for (let i = 0; i < length; i++) {\\n    const prices = []\\n    for (let j = 0; j < 4; j++) {\\n      prices.push(basePrice + Math.random() * 60 - 30)\\n    }\\n    prices.sort()\\n    const open = +(prices[Math.round(Math.random() * 3)].toFixed(2))\\n    const high = +(prices[3].toFixed(2))\\n    const low = +(prices[0].toFixed(2))\\n    const close = +(prices[Math.round(Math.random() * 3)].toFixed(2))\\n    const volume = Math.round(Math.random() * 100) + 10\\n    const turnover = (open + high + low + close) / 4 * volume\\n    dataList.push({ timestamp, open, high,low, close, volume, turnover })\\n\\n    basePrice = close\\n    timestamp += 60 * 1000\\n  }\\n  return dataList\\n}\\n\\nconst chart = init('k-line-chart')\\nchart.applyNewData(genData())\\n\\nfunction setPosition (position) {\\n  chart.setStyles({\\n    yAxis: {\\n      position\\n    }\\n  })\\n}\\n\\nfunction setInside (inside) {\\n  chart.setStyles({\\n    yAxis: {\\n      inside\\n    }\\n  })\\n}\\n\\nfunction setType (type) {\\n  chart.setStyles({\\n    yAxis: {\\n      type\\n    }\\n  })\\n}\\n\\nfunction setReverse (reverse) {\\n  chart.setStyles({\\n    yAxis: {\\n      reverse\\n    }\\n  })\\n}\\n\\n// 以下仅仅是为了协助代码演示，在实际项目中根据情况进行调整。\\n// The following is only for the purpose of assisting in code demonstration, and adjustments will be made according to the actual situation in the project.\\nconst container = document.getElementById('container')\\nconst buttonContainer = document.createElement('div')\\nbuttonContainer.className = 'button-container'\\n\\nconst positions = [\\n  { key: 'right', text: '右侧-Right' },\\n  { key: 'left', text: '左侧-Left' }\\n]\\nconst insideOutside = [\\n  { key: false, text: '外部-Outside' },\\n  { key: true, text: '内部-Inside' }\\n]\\nconst types = [\\n  { key: 'normal', text: '线性轴-Liner Axis' },\\n  { key: 'percentage', text: '百分比轴-Percentage axis' },\\n  { key: 'log', text: '对数轴-Logarithm axis' },\\n]\\nconst reverse = [\\n  { key: false, text: '正向-Regularity' },\\n  { key: true, text: '反向-Reverse' }\\n]\\npositions.forEach(({ key, text }) => {\\n  const button = document.createElement('button')\\n  button.innerText = text\\n  button.addEventListener('click', () => { setPosition(key) })\\n  buttonContainer.appendChild(button)\\n})\\ninsideOutside.forEach(({ key, text }) => {\\n  const button = document.createElement('button')\\n  button.innerText = text\\n  button.addEventListener('click', () => { setInside(key) })\\n  buttonContainer.appendChild(button)\\n})\\ntypes.forEach(({ key, text }) => {\\n  const button = document.createElement('button')\\n  button.innerText = text\\n  button.addEventListener('click', () => { setType(key) })\\n  buttonContainer.appendChild(button)\\n})\\nreverse.forEach(({ key, text }) => {\\n  const button = document.createElement('button')\\n  button.innerText = text\\n  button.addEventListener('click', () => { setReverse(key) })\\n  buttonContainer.appendChild(button)\\n})\\ncontainer.appendChild(buttonContainer)\\n"}`),h={__name:"index",setup(d){const e=r(()=>c(()=>import("./Chart.BEWR7XqS.js"),__vite__mapDeps([0,1]))),{title:o}=i();return(u,l)=>(s(),a(n(e),{js:n(t).js,html:n(t).html,css:n(t).css,title:n(o)},null,8,["js","html","css","title"]))}};export{h as _};
