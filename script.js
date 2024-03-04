let run = document.querySelector("#run");
let over = document.querySelector("#over");
let wicket = document.querySelector("#wicket");

//run function
run.innerHTML = 0;
function RunCount() {
  let runvalue = prompt("enter run");
  if (runvalue == 0) {
    run.innerHTML;
  } else if (runvalue.length <= 1) {
    run.innerHTML = parseInt(run.innerHTML) + parseInt(runvalue)
  } else {
    alert("Enter 2 digit number only single entry ")
  }
}

// ball count function
let overCount = 1;
function OverCount() {
  let over = document.querySelector("#over");
  if (overCount > 20) {
    alert(" Over Out")
  } else {
    over.innerHTML = overCount;
    overCount++;
  }
}

//wicket function
let wicketCount = 1;
function WicketCount() {
  let wicket = document.querySelector('#wicket');

  if (wicketCount >= 10) {
    alert("all out");
  } else {
    wicket.innerHTML = wicketCount;
    wicketCount++;
  }
}

function UpdateScore() {
  WicketNumber = prompt("How Many Player Wicket Out : 0 or 1 or 2");

  if (isNaN(WicketNumber) || WicketNumber == "") {
    alert("Give valid wicket : 0 or 1 or 2");
  }

  else {
    if (WicketNumber == 0 || WicketNumber == 1 || WicketNumber == 2) {

      if (wicket.innerHTML > 9) {
        alert("All wicket Out");
      } else {
        wicket.innerHTML = parseInt(wicket.innerHTML) + parseInt(WicketNumber);
        console.log(wicket.innerHTML);

        let runvalue = prompt("How much run Hit"); // run Count
        console.log(runvalue == null);
        if (isNaN(runvalue) || (runvalue == null) || (runvalue == "")) {
          alert("Enter valid Number ")
        } else if (runvalue.length <= 1) {
          run.innerHTML = parseInt(run.innerHTML) + parseInt(runvalue);
        }
        else { alert("Enter valid Run : 0 To 9  ") }
      }
      // ball count

      let Over = document.querySelector("#over");
      if (overCount > 20) {
        alert("Over Out")
      } else {
        let temp = overCount;
        let rem = temp % 6;
        let mod = temp / 6;
        let result = parseInt(mod) + Number((rem * 0.1).toFixed(1));
        console.log((rem * 0.1).toFixed(1));
        over.innerHTML = result;
        overCount++;
      }

    } else {
      alert("Give valid wicket : 0 or 1 or 2");
    }

  }

}


/*  0.1 0.2 0.3 0.4 0.5 1.0
1 2 3 4 5  1 2 3 4 5   
  let rem = 

let rem = 12 % 6 ;  //00    // 2.0
let temp = rem  0.1; 
let result =   

*/