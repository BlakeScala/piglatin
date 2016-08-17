var pigla = "ay"
var piglatinTranslator = function(inputSentence) {
  var sentenceArray = inputSentence.split(" ");
  alert(sentenceArray);
  for (var index = 0; index < sentenceArray.length(); index++) {
    if (sentenceArray[index] = "a" || sentenceArray[index] = "e" || sentenceArray[index] = "i" || sentenceArray[index] = "o" || sentenceArray[index] = "u") {
      return
    }
  }
};

$(document).ready(function() {
  $("form").submit(function(event) {
    var inputSentence = $("#textinput").val();
    piglatinTranslator(inputSentence);
    event.preventDefault();
  });
});

// var first = word.charAt(0);
// if (first == 'a' || first == 'e' || first == 'i' || first = 'o' || first ='u')
