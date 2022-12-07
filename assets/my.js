//creating a varible to the  present time and day//
var presentDateAndTimeEl = moment().format("LLLL ss ");
// our diplayed time to our html via append//
$('#presentDateAndTime').append(presentDateAndTimeEl);
//setting a variable to store the present time in hours//
var currentTime = moment().hours();
console.log(currentTime)
//This will update the time displayed every second.
function update() {
    $('#presentDateAndTime').html(moment().format('LLLL ss'));
  }
  
  setInterval(update, 1000);
   
  
  
//
$(document).ready(function () {

    $('#input1').html(localStorage.getItem('9AmInput'));
    $('#input2').html(localStorage.getItem('10AmInput'));
    $('#input3').html(localStorage.getItem('11AmInput'));
    $('#input4').html(localStorage.getItem('12AmInput'));
    $('#input5').html(localStorage.getItem('1PmInput'));
    $('#input6').html(localStorage.getItem('2PmInput'));
    $('#input7').html(localStorage.getItem('3PmInput'));
    $('#input8').html(localStorage.getItem('4PmInput'));
    $('#input9').html(localStorage.getItem('5PmInput'));
    $('#input10').html(localStorage.getItem('6PmInput'));
  


   //setting a name of ()am/pmInput with the value of the useres text entry on click//
    $('button').on("click", function () {
        localStorage.setItem('9AmInput', $('#input1').val());
        localStorage.setItem('10AmInput', $('#input2').val());
        localStorage.setItem('11AmInput', $('#input3').val());
        localStorage.setItem('12AmInput', $('#input4').val());
        localStorage.setItem('1PmInput', $('#input5').val());
        localStorage.setItem('2PmInput', $('#input6').val());
        localStorage.setItem('3PmInput', $('#input7').val());
        localStorage.setItem('4PmInput', $('#input8').val());
        localStorage.setItem('5PmInput', $('#input9').val());
        localStorage.setItem('6PmInput', $('#input10').val());
    });
    //function to change display color based on present time using the currentTime varibale we created that is referencing hours//
    function colorCodeTime() {
     
       
       //for each timeblock this will happen//
        $(".time-block").each(function () {
            //new variable that equals the current time-block id=hr[9-18] removing the hr and giving it the number value of the curent hr proceding to its time-block//
            var timeBlock = parseInt($(this).attr('id').split("hr")[1]);

console.log(timeBlock)
//conditonal statemanets that will change background on vlaue of our timeblock var and currentTime variable//
            if (currentTime < timeBlock) {
                $(this).addClass('future').removeClass("past present");
           
            }

            else if (currentTime> timeBlock) {
                $(this).addClass('past').removeClass("present future");
          
            }
            else if (currentTime === timeBlock) {
                $(this).addClass('present').removeClass("past future")
          
            }
        });


    }
    colorCodeTime()
});
