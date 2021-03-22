$(function(){
  var p = $("progress"),
      v = 0,
      r = 0;
  $("#start").click(()=>{
    if(v===0){
      v=setInterval(()=>{
        p.attr("value",r++)
      },100)
    }
  })
  $("#stop").click(()=>{
    clearInterval(v)
    v=0
  })
  $("#reset").click(()=>{
    p.attr("value",r=0)
  })
});
