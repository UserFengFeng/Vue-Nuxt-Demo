<template>
  <div class="shutter">
    <div class="shutter-img">
      <a href="#" data-shutter-title="Iron Man"><img src="images/shutter_1.jpg" alt="#"></a>
      <a href="#" data-shutter-title="Super Man"><img src="images/shutter_2.jpg" alt="#"></a>
      <a href="#" data-shutter-title="The Hulk"><img src="images/shutter_3.jpg" alt="#"></a>
      <a href="#" data-shutter-title="The your"><img src="images/shutter_4.jpg" alt="#"></a>
    </div>
    <ul class="shutter-btn">
      <li class="prev"></li>
      <li class="next"></li>
    </ul>
    <div class="shutter-desc">
      <p>Iron Man</p>
    </div>
  </div>
</template>

<script src="js/jquery.min.js"></script>
<script src="js/velocity.js"></script>
<script src="js/shutter.js"></script>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #333333;
}
img {
  border: 0;
  vertical-align: top;
}
ul,
li {
  list-style: none;
}

.shutter {
  overflow: hidden;
  width: 1000px;
  height: 358px;
  position: relative;
  margin: 50px auto;
  border-radius: 10px;
}
.shutter-img {
  z-index: 1;
}
.shutter-img,
.shutter-img a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.shutter-img a {
  cursor: default;
}
.shutter-img a > img {
  width: 100%;
  height: 100%;
}
.shutter-img .created {
  overflow: hidden;
  position: absolute;
  z-index: 20;
}
.shutter-btn {
}
.shutter-btn li {
  position: absolute;
  z-index: 2;
  top: 50%;
  width: 49px;
  height: 49px;
  margin-top: -25px;
  cursor: pointer;
}
.shutter-btn li.prev {
  left: 20px;
  background: url(../images/shutter_prevBtn.png) no-repeat 0 -49px;
}
.shutter-btn li.next {
  right: 20px;
  background: url(../images/shutter_nextBtn.png) no-repeat 0 -49px;
}
.shutter-desc {
  position: absolute;
  z-index: 2;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 36px;
  background: url(../images/shutter_shadow.png) repeat;
}
.shutter-desc p {
  padding-left: 20px;
  line-height: 36px;
  color: #fff;
  font-size: 14px;
}
</style>

