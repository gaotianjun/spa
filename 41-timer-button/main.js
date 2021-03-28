// function TimeBtn() {
//   // get elem
//   let $btn = $('<input type="button" class="timer-button">'),

//     timer = null,
//     cfg = {
//       container: 'body',

//       title: '同意',
//       delay: 6,
//       enabled: 'false',
//       onClick: 'null'

//     }

//   // init status: disable,text,delay
//   // $btn.val('同意 (' + delay + 's)');
//   // $btn.attr('disabled','disabled')
//   $btn.css({
//     height: '50px',
//     width: '150px',
//     'font-size': '1.2em'
//   })
//   // start timer,timeout button enable
//   function show(config) {
//     //这里如果把上面的btn放来 就点一下增加一个
//     $.extend(cfg, config);//最新参数在cfg里面。

//     $(cfg.container).append($btn);
//     $btn.val('cfg,title + (' + cfg.delay + 's)');
//     $btn.attr('disabled', 'disabled')
//     timer = setInterval(() => {
//       // delay > 0
//       // set btn text
//       // delay ---
//       // delay = 0 set btn enable
//       $btn.val('同意(' + --cfg.delay + 's)');
//       if (cfg.delay == 0) {
//         clearInterval(timer);
//         $btn.val(cfg.title);
//         $btn.removeAttr('disabled');
//       }
//     }, 1000);
//     $btn.click(
//       cfg.onClick
//     )
//     //gen dom
//     //   $btn.click(()=>{
//     //     alert('button clicked');
//     //   })

//   }

//   function destory() {
//     $btn.remove()
//   }

//   // click event
//   // $btn.click(()=>{
//   //   alert('button clicked!')
//   // })
//   return { show, destory }
// };


let $timerBtn = (() => {
  // get elem
  let $btn = $('<input type="button" class="timer-button">'),
    timer = null,
    cfg = {
      container: 'body',
      title: '同意',
      delay: 6,
      enabled: 'false',
      onClick: 'null'
    }

  // init status: disable,text,delay
  // $btn.val('同意 (' + delay + 's)');
  // $btn.attr('disabled','disabled')
  $btn.css({
    height: '50px',
    width: '150px',
    'font-size': '1.2em'
  })
  // start timer,timeout button enable
  this.show = function (config) {
    //这里如果把上面的btn放来 就点一下增加一个
    $.extend(cfg, config);//最新参数在cfg里面。

    $(cfg.container).append($btn);
    $btn.val('cfg,title + (' + cfg.delay + 's)');
    $btn.attr('disabled', 'disabled')
    timer = setInterval(() => {
      // delay > 0
      // set btn text
      // delay ---
      // delay = 0 set btn enable
      $btn.val('同意(' + --cfg.delay + 's)');
      if (cfg.delay == 0) {
        clearInterval(timer);
        $btn.val(cfg.title);
        $btn.removeAttr('disabled');
      }
    }, 1000);
    $btn.click(
      cfg.onClick
    )
    //gen dom
    //   $btn.click(()=>{
    //     alert('button clicked');
    //   })

  }

  function destory() {
    $btn.remove()
  }

  // click event
  // $btn.click(()=>{
  //   alert('button clicked!')
  // })
  // return {show,destory}
  //因为构造函数默认返回一个对象
})();
