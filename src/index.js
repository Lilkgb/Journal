import $ from 'jquery';
import ('./scss/input.scss');


function Journal(title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.numWords = function(journal) {
  var numCount = 1;
  for (var i=0; i < journal.length; i++) {
    if (journal[i] === " ") {
      numCount++
    }
    else {}
  }
  $(".journalBodyCount").append("There are " + numCount + " words in your body.")
}

$(document).ready(function() {
  $("#journalEntry").submit(function(event){
    event.preventDefault();
    var journalTitle = $("#journalTitle").val();
    var journalBody = $("#journalBody").val();
    var journalStore = new Journal(journalTitle, journalBody);
    journalStore.numWords(journalBody);
    $(".journalTitleDisplay").append(journalTitle);
    $(".journalBodyDisplay").append(journalBody);
  });
});
