<template>
  <div class="echarts">
    <div class="map"
         ref="myEchart"></div>
  </div>
</template>
<script>
import echarts from "echarts";
import { getOperateprogress } from '../api/dashboard'
import '../../node_modules/echarts/map/js/china.js' // 引入中国地图数据
export default {
  name: "echarts",
  props: ["date", "radio"],
  data () {
    return {
      chart: null,
      data: [
        {
          "name": "北京",
          "value": 599
        }, {
          "name": "上海",
          "value": 142
        }, {
          "name": "黑龙江",
          "value": 44
        }, {
          "name": "深圳",
          "value": 92
        }, {
          "name": "湖北",
          "value": 810
        }, {
          "name": "四川",
          "value": 453
        }
      ]
    };
  },
  watch: {
    // radio (val) {
    //   this.getData()
    // },
    // date (val) {
    //   this.getData()
    // }
  },
  mounted () {
    // this.chinaConfigure()
    // this.getData()
  },
  beforeDestroy () {
    if (!this.chart) {
      return;
    }
    this.chart.dispose()
    this.chart = null;
  },
  methods: {
    chinaConfigure () {
      let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置    
      window.onresize = myChart.resize;
      myChart.setOption({ // 进行相关配置
        // backgroundColor: "#02AFDB",
        tooltip: {
          show: false
        }, // 鼠标移到图里面的浮动提示框
        //左侧小导航图标
        visualMap: {
          type: 'piecewise',
          selectedMode: 'single',
          outOfRange: {
            color: '#18bee3',
            symbol: 'circle'
          },
          show: true,
          x: 'left',
          y: 'bottom',
          pieces: [{
            max: 30,
            label: '2018年以前',
            color: 'yellow'
          },
          {
            min: 30,
            max: 60,
            label: '2018年建设',
            color: 'yellow'
          },
          {
            min: 60,
            label: '2019年建设',
            color: 'yellow'
          },
          ],
          color: '#fff',
          textStyle: {
            color: '#fff',
          },
          visibility: 'off'
        },
        // dataRange: {
        //   show: true,
        //   min: 0,
        //   max: 1000,
        //   text: ['High', 'Low'],
        //   realtime: true,
        //   calculable: true,
        //   color: ['orangered', 'yellow', 'lightskyblue']
        // },
        geo: { // 这个是重点配置区
          map: 'china', // 表示中国地图
          roam: true,
          label: {
            normal: {
              show: true, // 是否显示对应地名
              textStyle: {
                color: 'rgba(255,255,255,1)'
              }
            }
          },
          itemStyle: {
            normal: {
              color: 'rgba(8, 22, 121, 1)',
              borderColor: 'rgba(16, 105, 204, 1)',
              borderWidth: 2
            },
            emphasis: {
              areaColor: 'rgba(255, 232, 0, 1)',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 0,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 1)'
            }
          }
        },
        series: [{
          type: 'scatter',
          coordinateSystem: 'geo' // 对应上方配置
        },
        {
          name: '启动次数', // 浮动框的标题
          type: 'map',
          geoIndex: 0,
          data: this.data
        }
        ]
      })

      myChart.on('click', function (params) {
        console.log(params.data);
        if (params.data.link) {
          window.open(params.data.link) 
        }
      })
    },
    getData () {
      let obj = {
        optype: this.radio,
        analysistime: this.date
      }
      getOperateprogress(obj).then(res => {
        this.data = []
        let dataList = res.data
        dataList.forEach(item => {
          if (item.operateprogress === '一期') {
            this.data.push({
              name: item.province,
              link: item.linkurl,
              value: 35
            })
          } else if (item.operateprogress === '二期') {
            this.data.push({
              name: item.province,
              link: item.linkurl,
              value: 65
            })
          } else {
            this.data.push({
              name: item.province,
              link: item.linkurl,
              value: 10
            })
          }
        })
        this.chinaConfigure()
      })
    }
  }
}
</script>
<style>
.echarts,
.map {
  width: 100%;
  height: 100%;
}
</style>