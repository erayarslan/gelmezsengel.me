$(document).ready(function () {
  var direction = true;

  var time = 0;

  var counter = 300;

  var speed = 1;

  (function myLoop() {

    setTimeout(function () {

      time++;

      var degrees = -counter / 3;
      var degrees_2 = -counter / 2;
      var degrees_3 = -counter / 1;

      var radian = degrees * (Math.PI / 180);
      var radian_2 = degrees_2 * (Math.PI / 180);

      var y = 200 - (Math.cos(radian) * 200);
      var z = (Math.sin(radian) * 200);

      var y_2 = y + (200 - (Math.cos(radian_2) * 200));
      var z_2 = z + (Math.sin(radian_2) * 200);

      $(".box-1").css("transform", "rotateX(" + degrees + "deg)");
      $(".box-2").css("transform", "translateZ(" + z + "px) translateY(-" + y + "px) rotateX(" + degrees_2 + "deg)");
      $(".box-3").css("transform", "translateZ(" + z_2 + "px) translateY(-" + y_2 + "px) rotateX(" + degrees_3 + "deg)");

      // Fade in
      if (time == 40) {
        $(".box-2").fadeIn(200);
      }
      if (time == 80) {
        $(".box-3").fadeIn(200);
      }

      // Direction
      if (direction) {
        counter = counter - 2;
      } else {
        counter = counter + 2;
      }

      // Slow the animation
      if (time > 120) {
        speed = speed * 1.012;
      }

      // Change direction
      if (time == 241) {
        direction = false;
      }
      if (time == 378) {
        direction = true;
      }
      if (time == 447) {
        direction = false;
      }
      if (time == 480) {
        direction = true;
      }
      if (time == 490) {
        return false
      }

      myLoop(time, speed, counter);
    }, speed)
  })();

});