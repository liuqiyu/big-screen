<!--
@author wupeng
@date   19.11.9
@description 项目开发完善
-->
<template>
  <div class="content">
    <div class="header">
      <div class="title">
        <span>IT云全网资源统一视图</span>
      </div>
    </div>
    <div class="body">
      <div class="content-box">
        <div class="content-item">
          <div class="BlueHorn">
            <div class="lt"></div>
            <div class="rt"></div>
            <div class="rb"></div>
            <div class="lb"></div>
          </div>
        </div>
        <div class="content-item">
          <div class="BlueHorn">
            <div class="lt"></div>
            <div class="rt"></div>
            <div class="rb"></div>
            <div class="lb"></div>
          </div>
        </div>
        <div class="content-item">
          <div class="BlueHorn">
            <div class="lt"></div>
            <div class="rt"></div>
            <div class="rb"></div>
            <div class="lb"></div>
          </div>
        </div>
        <div class="content-item">
          <div class="BlueHorn">
            <div class="lt"></div>
            <div class="rt"></div>
            <div class="rb"></div>
            <div class="lb"></div>
          </div>
        </div>
      </div>
      <div class="content-box">
        <div class="content-item">
          <div class="BlueHorn">
            <div class="lt"></div>
            <div class="rt"></div>
            <div class="rb"></div>
            <div class="lb"></div>
          </div>
        </div>
        <div class="content-item">
          <div class="BlueHorn">
            <div class="lt"></div>
            <div class="rt"></div>
            <div class="rb"></div>
            <div class="lb"></div>
          </div>
        </div>
        <div class="content-item">
          <div class="BlueHorn">
            <div class="lt"></div>
            <div class="rt"></div>
            <div class="rb"></div>
            <div class="lb"></div>
          </div>
        </div>
        <div class="content-item">
          <div class="BlueHorn">
            <div class="lt"></div>
            <div class="rt"></div>
            <div class="rb"></div>
            <div class="lb"></div>
          </div>
        </div>
      </div>
      <div class="content-box">
        <div class="content-item">
          <div class="BlueHorn">
            <div class="lt"></div>
            <div class="rt"></div>
            <div class="rb"></div>
            <div class="lb"></div>
          </div>
        </div>
        <div class="content-item long">
          <div class="BlueHorn">
            <div class="lt"></div>
            <div class="rt"></div>
            <div class="rb"></div>
            <div class="lb"></div>
          </div>
        </div>
        <div class="content-item">
          <div class="BlueHorn">
            <div class="lt"></div>
            <div class="rt"></div>
            <div class="rb"></div>
            <div class="lb"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import chinamap from './map'
// import power from './power'
// import scale from './scale'
// import sleep from './sleep'
// import { getMainInfo, getAlarmInfo } from '../api/dashboard'
export default {
  name: 'HelloWorld',
  components: {
  },
  data () {
    return {
    }
  },
  watch: {
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-image: url("../assets/img/bg.svg");
  // background-size: 100% 100%;
  .header {
    margin-top: 0.21rem;
    height: 0.61rem;
    background-image: url("../assets/img/top_bg.svg");
    background-size: 100% 100%;
    .title {
      color: #fff;
      font-size: 0.4rem;
      margin-top: -0.15rem;
      height: 0.56rem;
    }
  }
  .body {
    height: 10%;
    padding: 0 0.2rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    .content-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 10%;
      flex-grow: 1;
      margin-bottom: 0.2rem;
      .content-item {
        width: 24%;
        position: relative;
        background: rgba(6, 30, 47, 0.5);
        .BlueHorn {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px solid rgba(0, 168, 255, 0.3);
        }
        .BlueHorn .lt,
        .BlueHorn .rt {
          border-top: 2px solid #00a8ff;
          top: -2px;
        }
        .BlueHorn .lb,
        .BlueHorn .rb {
          border-bottom: 2px solid #00a8ff;
          bottom: -2px;
        }

        .BlueHorn .rb,
        .BlueHorn .rt {
          border-right: 2px solid #00a8ff;
          right: -2px;
        }
        .BlueHorn .lt {
          border-left: 2px solid #00a8ff;
          left: -2px;
        }
        .BlueHorn .lb {
          border-left: 2px solid #00a8ff;
          left: -2px;
        }
        .BlueHorn .lb,
        .BlueHorn .rb {
          border-bottom: 2px solid #00a8ff;
          bottom: -2px;
        }
        .BlueHorn .lb,
        .BlueHorn .lt,
        .BlueHorn .rb,
        .BlueHorn .rt {
          width: 0.1rem;
          height: 0.1rem;
          position: absolute;
        }
      }
      .long {
        width: 49.4%;
      }
    }
  }
}
</style>
