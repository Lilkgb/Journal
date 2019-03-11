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

Journal.prototype.numVowels = function(journal) {
  var numCount = 0;
  var otherCount = 0;
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var consts = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z"];
  for (var i=0; i<journal.length; i++) {
    for (var j=0; j<vowels.length; j++) {
      if (journal[i] === vowels[j]) {
        numCount++;
      }
    }
    for (var c=0; c<consts.length; c++) {
      if (journal[i] === consts[c]) {
        otherCount++;
      }
    }
  }
  $(".journalVowels").append("There are " + numCount + " vowels in your body.");
  $(".journalConsts").append("There are " + otherCount + " consonant in your body.");
}

Journal.prototype.getTeaser = function(journal) {
  var words = journal.split(' ');
  if (words.length > 8) {
    var output = words.splice(0, 8);
    var output = output.join(' ')
  }
  $(".journalTeaser").append("Teaser: " + output);
}

$(document).ready(function() {
  $("#journalEntry").submit(function(event){
    event.preventDefault();
    var journalTitle = $("#journalTitle").val();
    var journalBody = $("#journalBody").val();
    var journalStore = new Journal(journalTitle, journalBody);
    journalStore.numWords(journalBody);
    journalStore.numVowels(journalBody);
    journalStore.getTeaser(journalBody);
    $(".journalTitleDisplay").append(journalTitle);
    $(".journalBodyDisplay").append(journalBody);
  });
});
