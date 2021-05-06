$(function(){
    var windowHeight = $("body").height(800)/* Use .height() method for window-class selector */;
    var windowWidth = $("body").width(1300);
    var headerBarHeight = $("header").height(96);/* Use .height() method for header-class selector */;
var codeContainerHeight = $("#htmlcontainer").height(400);/* Give the height's value along with units */

var codeContainerWidth=  $("#htmlContainer").width(400);/* Give the height's value along with units */
var codeContainerHeight = $("#csscontainer").height(400);/* Give the height's value along with units */

var codeContainerWidth=  $("#cssContainer").width(400);/* Give the height's value along with units */
var codeContainerHeight = $("#jscontainer").height(400);/* Give the height's value along with units */

var codeContainerWidth=  $("#jsContainer").width(400);/* Give the height's value along with units */

$(".toggle").click(function () {
    $(this).toggleClass("newclass");
    var activeDiv = $(this).html();/* use .HTML() method on 'this' constructor reference */
    console.log(activeDiv);
    if (activeDiv == "HTML") {
        $('#htmlcontainer').toggle(500);
    } else if (activeDiv == "CSS") {
        $('#csscontainer').toggle(500);
    } else if (activeDiv =="JS"){
        $('#jscontainer').toggle(500);
    } else if (activeDiv == "Result") {
        $('#myframe').toggle(500);
    }
    var showingDivs = $("textarea").filter(function () {
        return $("textarea",this).html() != activeDiv}).css({ "background-color": "#e6d1a4;" });
    
    console.log(showingDivs);
});
$(".run-btn").click(function updateIframe() {
    var htmlContent = $("#myframe").contents().find("body"); 
    var htmlValue = $("#htmlcontainer").val(); // htmlValue contains html code
    htmlContent.html(htmlValue);
    console.log(htmlValue);
    var cssValue = $("#csscontainer").val();
    console.log(cssValue);
    var cssLink = "<style>" + cssValue + "</style>"; // cssValue contains css code
    var head = $("#myframe").contents().find("head");
    head.append(cssLink);
    var jsCode = $("#jscontainer").val(); // jsCode contains js code
    console.log(jsCode);
    var js = '<script>' + jsCode + '<\/script>';
    var content = $('#myframe').contents();
    content.find('head').append('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"><\/script>');
    content.find('body').append(js);
});
   });