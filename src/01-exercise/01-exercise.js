import $ from "jquery";

function exercise01() {
  // Complete the code of the function
  var content=$(".box").css("padding");
        $(".ex-wrapper").append("<p>"+content+"</p>");
}

export default exercise01;
