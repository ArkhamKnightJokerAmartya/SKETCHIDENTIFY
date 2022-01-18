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
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
}

function draw(){
    check_sketch();
    if (drawn_sketch==sketch){
        answer_folder="set";
        score++;
        document.getElementById("score").innerHTML="Score: "+score;
    }
         strokeWeight(10);
         stroke("#0004ff");
         if (mouseIsPressed){
            line(pmouseX,pmouseY,mouseX,mouseY);
        }

}


function preload(){
    classifier=ml5.imageClassifier('DoodleNet')
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


function classifyCanvas(){
    classifier.classify(canvas,gotResult);
}

function gotResult(error,results){
     if (error){
         console.error(error);
     }

     else {
         document.getElementById("yourSketch").innerHTML="Your Sketch: "+results[0].label;
         document.getElementById("confidence").innerHTML="Confidence: "+Math.round(results[0].confidence*100)+"%";
         
         utterThis=new SpeechSynthesisUtterance(results[0].label);
         synth.speak(utterThis)
     
        }
}
