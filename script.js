
    let j=document.getElementsByClassName("tab-content1").length;
    console.log(j+1);
    var i=j+1;
function ipp(i) {i++;
                return i;}


function addsub() {

    var tabl =document.getElementById("tbdy");
    var newtd=document.createElement("td");

    var template ='<tr><td >'+i+'</td><td><input type="text" id="sub'+i+'" class="tab-content1"></td><td><input type="number" id="ch'+i+'" class="tab-content2"></td><td><select id="sel'+i+'" class="tab-content3"><option value="4.00">A</option><option value="3.66">A-</option><option value="3.33">B+</option><option value="3.00">B</option><option value="2.66">B-</option><option value="2.33">C+</option><option value="2.00">C</option><option value="1.66">C-</option><option value="1.33">D+</option><option value="1.00">D</option><option value="0.00">F</option><option value="0.00">P</option></select></td></tr>';
    tabl.innerHTML += template;

    i= ipp(i);
    return i-1;}

function calc() {
            var j = ipp(i)-2;
            let F_result=0;
            let result=0;
            let Chrs=0;
            
            for(k=1;k<=j; k++){
                let ch= document.getElementById("ch"+k).value;
                    
                    if(ch>0){
                        let credits=0;
                        let name= document.getElementById("sub"+k).value;
                        let grade= document.getElementById("sel"+k).value;
                        console.log(grade);
                        credits=ch*grade;
                    
                        // console.log(credits);
                        ;
                        Chrs=parseInt(Chrs)+parseInt(ch);
                        result=result+credits;
                        // console.log(result);
                        // console.log(Chrs);
                        
                        
                   }}
                   F_result=result/Chrs;
        document.getElementById("result").innerHTML=F_result;
                   F_result=0;
 }