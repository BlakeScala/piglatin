var pigLatin = function(letters) {
  var vowels = ["a", "e", "i", "o", "u"],
    result = letters.split('');

  if (vowels.includes(letters.charAt(0))) {
    return letters += 'way';
  } else {
    for (var i = 0; i < letters.length; i++) {
      if (!vowels.includes(letters[i])) {
        result.push(result.shift());
      } else {
        result.push('ay');
        return result.join('');
        }
      }
    }
  }

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var letters = $("input#userinput").val();
    $("#output").text(pigLatin(letters));
  });
});
