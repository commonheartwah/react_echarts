import React, { Component } from 'react';
import asyncComponent from './AsyncComponent'
import { lineOption1,pieOption, barOption, lineOption, scatterOption, mapOption, radarOption, candlestickOption } from './optionConfig/options'
const PieReact = asyncComponent(() => import(/* webpackChunkName: "PieReact" */'./EchartsDemo/PieReact'))  
const BarReact = asyncComponent(() => import(/* webpackChunkName: "BarReact" */'./EchartsDemo/BarReact')) 
const LineReact = asyncComponent(() => import(/* webpackChunkName: "LineReact" */'./EchartsDemo/LineReact'))  
const ScatterReact = asyncComponent(() => import(/* webpackChunkName: "ScatterReact" */'./EchartsDemo/ScatterReact'))  
const MapReact = asyncComponent(() => import(/* webpackChunkName: "MapReact" */'./EchartsDemo/MapReact')) 
const RadarReact = asyncComponent(() => import(/* webpackChunkName: "RadarReact" */'./EchartsDemo/RadarReact')) 
const CandlestickReact = asyncComponent(() => import(/* webpackChunkName: "CandlestickReact" */'./EchartsDemo/CandlestickReact')) 

class App extends Component {
  render() {
    return (
      <div>
        <h2>折线游戏分析图</h2>
        <LineReact option={lineOption1} />
        <hr/>
        <h2>饼图游戏分析图</h2>
        <PieReact option={pieOption} />
        <hr/>
  
        <h2>柱状游戏分析图</h2>
        <BarReact option={barOption} />
        <hr/>
        
        <h2>折线游戏分析图</h2>
        <LineReact option={lineOption} />
        <hr/>

        <h2>雷达图游戏分析图</h2>
        <RadarReact option={radarOption} />
        <hr/>
        
      </div>
    );
  }
}

export default App;
