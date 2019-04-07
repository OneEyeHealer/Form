/** Note if you want to use [type = checbox] as
  [type = radio] then you have to apply this script
  otherwise you can use [type = radio] for one selectionin a group of options.
*/
$(document).ready(function(){
  /*--- selector matches all input control of type : chekbox & attack click handler ---*/
  $("input:checkbox").on('click', function(){
    // here 'this' refers to box clicked on
    let $box = $(this);
    if($box.is(":checked")){
      /* Note: name of box retrived using .attr() method ,as it is assumed */
      let group = "input:checked[name='" + $box.attr("name")  + "']";
      /* Note: checked status of group/box , change on other hand,
      & current value retrived usng .prop() method */
      $(group).prop("checked",false);
      $box.prop("checked",true);
    } else{
      $box.prop("checked",false);
    }
  });
});
