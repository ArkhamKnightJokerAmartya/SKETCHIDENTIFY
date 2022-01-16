random_number=Math.floor((Math.random()*quick_draw_data_set.length+1));
console.log(quick_draw_data_set[random_number]);
sketch=quick_draw_data_set[random_number];
document.getElementById("yourSketch").innerHTML="sketchtobedrawn:"+sketch;
time_counter=0;
time_check="";
drawn_sketch="";
answer_folder="";
score=0;

function updateCanvas(){
    background("white");
    random_number=Math.floor((Math.random()*quick_draw_data_set.length+1));
    console.log(quick_draw_data_set[random_number]);
    sketch=quick_draw_data_set[random_number];
    document.getElementById("yourSketch").innerHTML="sketchtobedrawn:"+sketch;
}

function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
}

function draw(){
    check_sketch();
    if (drawn_sketch==sketch){
        answer_folder="set";
        score++;
        document.getElementById("score").innerHTML="Score: "+score;
    }


}


function check_sketch(){
    time_counter++;
    document.getElementById("timer").innerHTML="Timer: "+time_counter;
    console.log(time_counter);

    if (time_counter>400){
        time_counter=0;
        time_check="Completed";
    }

    if (time_check=="Completed"|| answer_folder=="set"){
        time_check="";
        answer_folder="";
        updateCanvas();
    }
}



