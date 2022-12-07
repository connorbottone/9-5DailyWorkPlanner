
var presentDateAndTimeEl = moment().format("LLLL ss ");
$('#presentDateAndTime').append(presentDateAndTimeEl);
var currentTime = moment().hours();
//This is provind the time element a continuse update without affecting inner html
function update() {
    $('#presentDateAndTime').html(moment().format('LLLL ss'));
  }
  
  setInterval(update, 1000);
   
  
  

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
});

