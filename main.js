random_number=Math.floor((Math.random()*quick_draw_data_set.length+1));
console.log(quick_draw_data_set[random_number]);
sketch=quick_draw_data_set[random_number];
document.getElementById("yourSketch").innerHTML="sketchtobedrawn:"+sketch;
time_counter=0;
time_sketch="";
drawn_sketch="";
answer_folder="";
score=0;