<template>
  <div>
    <div class="container">
      <svg width="500" height="200" viewBox="0 0 500 200">
        <!--
          matrix(2 1 -1 2 50 0),第1,3,5为一组，第2,4,6为一组,(_x,_y)表示原有坐标
          [2,-1,50] => 2*_x + (-1)*_y + 50 = x坐标
          [1, 2, 0] => 1*_x + 2*_y + 0 = y坐标

          顶点坐标
          [0,0]     => [50,0]
          [100,0]   => [250,0]
          [100,50]  => [200,200]
          [0,50]    => [0,100]
        -->
        <rect
          x="0"
          y="0"
          width="100"
          height="50"
          fill="red"
          transform="matrix(2 1 -1 2 50 0)"
        />
      </svg>
    </div>
  <div class="container">
    <svg width="440" height="440">
      <circle cx="220" cy="220" r="200" stroke-width="20" stroke="#d1d3d7" fill="none"></circle>
      <circle class="circle" cx="220" cy="220" r="200" stroke-width="20" stroke="#00A5E0" fill="none"></circle>
    </svg>
  </div>
  </div>
</template>

<script>
export default {
  name: "SvgAnimation",
};
</script>

<style lang="scss" scoped>
.container {
  svg {
    border: 1px solid #000;
  }
}
.circle {
  animation: circle 5s linear infinite;
}

@keyframes circle {
  from{
    stroke-dasharray: 0 1257;
  }
  to{
    stroke-dasharray: 1257 0;
  }
}
</style>