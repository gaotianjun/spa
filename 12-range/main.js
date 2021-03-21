$(function(){
  // get elem: range,span
  let $range = $('input'),
      $age   = $('span');
  
  // range change event
  $range.change(()=>{
    // get range value
    // set span text
    $age.html($range.val()); // <span>0</span>
  });
});
