<template>
  <div ref="chart"
       class="chart"></div>
</template>

<script>
import echarts from 'echarts'
import { getSaveelectric } from '../api/dashboard'
export default {
  props: ["date", "radio"],
  data () {
    return {
      chart: null,
      xdata: [],
      ydata: []
    }
  },
  watch: {
    radio (val) {
      this.getData()
    },
    date (val) {
      this.getData()
    }
  },
  methods: {
    initChart () {
      try {
        const option = {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '20%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: this.xdata,
              axisTick: {
                alignWithLabel: true
              },
              axisLabel: {
                margin: 12,
                color: '#e2e9ff',
                textStyle: {
                  fontSize: 14
                }
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
              name: '度/天',
              splitLine: {//去除网格线
                show: false
              },
              nameTextStyle: {
                color: '#fff'
              },
              axisLabel: {
                margin: 12,
                color: '#e2e9ff',
                textStyle: {
                  fontSize: 14
                }
              }
            }
          ],
          series: [
            {
              name: '节电度数',
              type: 'bar',
              barWidth: '30%',
              data: this.ydata
            }
          ]
        }
        this.chart = echarts.init(this.$refs.chart)
        this.chart.setOption(option)
      } catch (e) {
        console.log(e)
      }
    },
    getData () {
      let obj ={
        optype: this.radio,
        analysistime: this.date
      }
      getSaveelectric(obj).then(res => {
        let data = res.data
        this.xdata = []
        this.ydata = []
        data.forEach(item => {
          this.xdata.push(item.province)
          this.ydata.push(item.saveelectric)
        })
        this.initChart()
      }) 
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style>
</style>