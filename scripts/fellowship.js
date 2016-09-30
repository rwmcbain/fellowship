console.log("Linked.");

var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

//PART 1

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
var section = '<section></section>';

function makeMiddleEarth(lands) {
  $(body).append('<section id=\'middle-earth\'></section>'); //appended section to body
  $.each(lands, function (index, someValue){
    $('#middle-earth').append('<article>' + '<h1>' + someValue + '</h1>' + '</article>')//each land will make new article
  }); //added and <article><h1>____ to the section for each index value for lands
}

makeMiddleEarth(lands);

//PART 2------------------------------------------------

function makeHobbits(hobbits){
  var first = $('#middle-earth').children('article')[0];
  var ul = $('<ul>');

  $.each(hobbits, function(index, value){ //adds hobbits to child in a list
    var li = $('<li>');

    $(first).append(ul)
    $(ul).append(li)
    $(li).append(value)
  });

  var second = $('article').children('li');
  $.each(hobbits, function(){
    $(second).prop('class','hobbit');
  });
}

makeHobbits(hobbits);

//PART 3------------------------------------------------

function keepItSecretKeepItSafe(){
  var frodochild = $('article').children('li')[0];
    $(frodochild).append('<div id=\'the-ring\' class=\'magic-imbued-jewelry\'></div>');
}

keepItSecretKeepItSafe();

//PART 4------------------------------------------------

function makeBuddies(){
  var aside = '<aside></aside';
  var first = $('#middle-earth').children('article')[1];

  var ul = $('<ul>');


  $.each(buddies, function (index, someValue){
    var li = $('<li>');
    $(first).append(ul)
    $(ul).append(li)
    $(li).append(someValue)
  });
}

makeBuddies();

//PART 5------------------------------------------------

function beautifulStranger(){
 var strider = $('#middle-earth > article:nth-child(2) > ul > li:nth-child(4)');
  $(strider).text('Aragorn')
}

beautifulStranger();

//PART 6------------------------------------------------

function leaveTheShire(){
  var hobbitsss = $('#middle-earth > article:nth-child(1) > ul');

  var shire = $('article').children('h1')[1];
    $(shire).parent().append($(hobbitsss ));
};

leaveTheShire();

//PART 7------------------------------------------------

function forgeTheFellowship() {
  var rivendell = $('#middle-earth').children('article')[1];
  var thefellowship = $('h1').children('div');
  var test = $('h1').children('li');

    $(rivendell).append('<div id=\'the-fellowship\'></div>');
    $.each(hobbits, function(index, value){ 
    $(thefellowship).append(test)
  });
}

forgeTheFellowship();

//PART 8------------------------------------------------

function theBalrog(){
  var gandalf = $('#middle-earth > article:nth-child(2) > ul:nth-child(2) > li:nth-child(1)');
    $(gandalf).text('Gandalf the White')
    $(gandalf).css('border', '2px solid grey');
    $(gandalf).css('backgroundColor', 'white');
}

theBalrog();

//PART 9------------------------------------------------

function hornOfGondor() {
  $(document).ready(function(event) { 
   alert('the horn of gondor has been blown');
  $('#middle-earth > article:nth-child(2) > ul:nth-child(2) > li:nth-child(5)').remove();
});
}

hornOfGondor();

//PART 10------------------------------------------------

function itsDangerousToGoAlone() {
var mordor = $('#middle-earth > article:nth-child(3) > h1');
var frodo = $('#middle-earth > article:nth-child(2) > ul:nth-child(3) > li:nth-child(1)');
var sam = $('#middle-earth > article:nth-child(2) > ul:nth-child(3) > li:nth-child(2)');
  $(mordor).parent().append(frodo);
  $(mordor).parent().append(sam);
  $(mordor).parent().append('<div id=\'mount-doom\'></div>');
}

itsDangerousToGoAlone();

//PART 11------------------------------------------------

function weWantsIt() {
  var mordor = $('#middle-earth > article:nth-child(3) > h1');
  var golum = $('<div id=\'gollum\'></div>')
  var doom = $('#mount-doom')

    $(mordor).parent().append(golum);
    golum.append('<div id=\'the-ring\' class=\'magic-imbued-jewelry\'></div>');
    $(doom).append(golum);
}

weWantsIt();

//PART 12------------------------------------------------

function thereAndBackAgain(){
  var shire = $('#middle-earth > article:nth-child(1) > h1');
  var golum = $('#gollum');
  var merryperry = $('#middle-earth > article:nth-child(2) > ul:nth-child(3)');
  var merryperrylist = $('#middle-earth > article:nth-child(1) > ul');
  var frodo = $('#middle-earth > article:nth-child(3) > li:nth-child(2)');
  var sam = $('#middle-earth > article:nth-child(3) > li');
    golum.remove();

    $(shire).parent().append(merryperry);

    $(('#middle-earth > article:nth-child(1) > ul')).append(frodo);
    $(('#middle-earth > article:nth-child(1) > ul')).append(sam);

}

thereAndBackAgain();
