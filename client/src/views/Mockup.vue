<template>
  <div class="page">
    <div class="top-section">
      <indicator-speedometer />
      <indicator-gear />
      <div class="pedals">
        <div class="pedal">
          <div class="empty" style="height: 10%"></div>
        </div>
        <div class="pedal">
          <div class="empty" style="height: 60%"></div>
        </div>
      </div>
      <indicator-rpm />
    </div>
    <car />
  </div>
</template>

<script>
import {
  IndicatorRpm,
  IndicatorSpeedometer,
  IndicatorGear,
} from '../components/Indicators/index';

import Car from '../components/Car.vue';

export default {
  name: 'Mockup',
  components: {
    IndicatorRpm,
    IndicatorSpeedometer,
    IndicatorGear,
    Car,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
  }

  .top-section {
    display: block;
    margin-top: 5vh;
    height: 20vh;
  }
  .top-section > div {
    margin: 0 3vh;
  }


</style>
