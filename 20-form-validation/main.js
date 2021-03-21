$(() => {
  // get dom elem
  let $width          = $('#width'),
      $height         = $('#height'),
      $btnCal         = $('#calc')
      $perimeter      = $('#perimeter'),
      $widthValidate  = $('#width-validate'),
      $heightValidate = $('#height-validate'),
      $area           = $('#area');

  // calc button click
  $btnCal.click(()=> {

    // get value
    let w = Number($width.val()),
        h = Number($height.val());

    // validate
    if(validate($width, $widthValidate) && validate($height,$heightValidate)){

      // calc
      let p = (w + h) * 2;
      let a = w * h;

      // 解决浮点舍入误差的问题
      function roundFractional(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
      }
        
      // output
      $perimeter.val(roundFractional(p,2));
      $area.val(roundFractional(a,2)); 
    }
  })
})

function validate(input, output) {
  // is empty
  if(input.val() === '') {
    output.html('该字段不能为空');
    return false;
  } else {
    output.html('');
  }

  // is number
  let val = Number(input.val());

  if(isNaN(val)) {
    output.html('该字段应该是数值');
    return false;
  } else {
    output.html('')
  }
  
  // is +
  if(val < 0) {
    output.html('该数值不能小于零');
    return false;
  } else {
    output.html('');
  }

  return true
}
