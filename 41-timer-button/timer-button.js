let $timerBtn = (function(){
  let $btn = $('<input type="button>"'),
      delay = 6,
      timer = null;
  

  // 设计时，运行时
  function show
  $btn.val('同意 (' + delay + 's)');
  $btn.attr('disabled','disabled')
  
  // start timer,timeout button enable
 
  timer = setInterval(()=>{
    // delay > 0
    // set btn text
    // delay ---
    // delay = 0 set btn enable
    $btn.val('同意(' + --delay + 's)');
    if(delay == 0){
      clearInterval(timer);
      $btn.val('同意');
      $btn.removeAttr('disabled');
    }
  },1000);

  // click event
  $btn.click(()=>{
    alert('button clicked!')
  })
})();
/*
 * UI组件的面向对象封装，三种方式
 * 1.{} Object
 * let $timerBtn = {
 *  show: function() {}
 * };
 *
 * 2.工厂函数（函数的立即执行表达式+闭包）-> 全局对象
 * 封装：
 * let $timerBtn = (function() {
 *  
 *  return {
 *    show
 *  }
 * })();
 *使用：
 $timerBtn.show();
 * 3.构造函数
 * 封装：
 * function TimerBtn() {
 *
 *  this.show = function() {}
 * }
 * 使用：
 * let btn = new TimerBtn
 * */
