$(function() {
    var current;
    var screen = $("#Display")[0];
    var output;
    var limit;
    var zero;
    var operator;

    //var elem = document.querySelector(".num");
    var elem = $(".num");
    var len = elem.length;
        for( var i = 0; i < len; i++) {
            elem[i].addEventListener("click", function() {
                if (limit > 10) {
                    alert("Your Number is to large!");
                }
                else{
                    num = this.value;
                    output = screen.innerHTML += num;
                    limit = output.length;
                }
            }, false)
        }
    $("#clear").click(function() {
        screen.innerHTML = ""
    })

    var elem1 = $(".operator");
    var len1 = elem1.length;
        for(var i = 0; i < len1; i++) {
            elem1[i].addEventListener("click", function() {
                operator = this.value;
                    if(screen.innerHTML === ""){
                        screen.innerHTML = screen.innerHTML.concat("");
                    }else if(output){
                        screen.innerHTML = output.concat(operator);   
                    }
                }, false)
            }
    
    $("#equals").click(function() {
        if(screen.innerHTML === output) {
            screen.innerHTML = eval(output);
        }else {
            screen.innerHTML = "";
        }

    })

    $("#zero")[0].click(function(){
        zero= this.value
        if(screen.innerHTML ===""){
            output = screen.innerHTML = zero
        }
        else if(screen.innerHTML === output){
            output = screen.innerHTML += zero
        }
    })


            })
