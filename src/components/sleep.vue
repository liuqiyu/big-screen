<template>
  <div ref="chart"
       class="chart"></div>
</template>

<script>
import echarts from 'echarts'
import { getSleepInfo } from '../api/dashboard'
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
            right: '8%',
            bottom: '-4%',
            top: '0%',
            containLabel: true
          },
          yAxis: [
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
            {
              type: 'category',
              data: this.ydata,
              axisTick: {
                alignWithLabel: true
              },
              axisLabel: {
                margin: 12,
                color: '#e2e9ff',
                // formatter: '{value} 小时',
                textStyle: {
                  fontSize: 14
                }
              },
            },
          ],
          xAxis: [
            {
              show: false,
              type: 'value',
            }
          ],          
          visualMap: {
            show: false,
            orient: 'horizontal',
            min: 0,
            max: 1000,
            // Map the score column to color
            dimension: 0,
            inRange: {
              color: ['#0076e7', '#7ee552', '#00e6ba', '#2eb8f4']
            }
          },
          series: [
            {
              name: '休眠数',
              type: 'bar',
              barWidth: '60%',
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
      getSleepInfo(obj).then(res => {
        let data = res.data
        this.xdata = []
        this.ydata = []
        data.forEach(item => {
          this.xdata.push(item.province)
          this.ydata.push(item.sleepcell)
        })
        this.xdata = this.xdata.reverse()
        this.ydata = this.ydata.reverse()
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