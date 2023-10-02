var v=prompt("ENTER YOUR NAME");
var k=v.slice(0,1);
var j=v.slice(1,v.length);
var s=k.toUpperCase()+j.toLowerCase();
$("h2").css("text-align","center");
$("h2").css("font-family","cursive");

$("h2").html("Welcome "+s+"!");