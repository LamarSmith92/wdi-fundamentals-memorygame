$(function() {

  var lucky_cards = ['A','A','B','B','C','C','D','D','E','E','F','F',
  'G','G','H','H','I','I','J','J','K','K','L','L']
  var picker = 1;
  var endGame = 0;

  var tryOne = tryTwo = null;

  var levelOne = null;
  var levelTwo = null;

  var board = document.getElementsByTagName("li");
  var luckyArray = shuffle(lucky_cards)

  for (var j = luckyArray.length - 1; j >= 0; j--) {
    board[j].setAttribute("data-value", luckyArray[j])
    board[j].addEventListener("click", showValues)
  };

  function shuffle (board ) {
    var cardLength = board.length, Index, temp;
    
    while (cardLength > 0) {
      index = Math.floor(Math.random() * cardLength);
      cardLength--;
      temp = board[cardLength];
      board[cardLength] = board[index];
      board[index] = temp;
    }

    return board
  }

  function showValues(){
    if(this.innerHTML.length === 0){
      if (picker  % 2) {
        this.innerHTML = "<img src='./imgs/"+this.getAttribute("data-value")+".png'>"
        console.log(this.innerHTML)
        tryOne= event.target
        levelOne = event.target.getAttribute("data-value")
      } else {
        this.innerHTML = "<img src='./imgs/"+this.getAttribute("data-value")+".png'>"
        console.log($(this).find("img"))
        tryTwo = event.target
        levelTwo = event.target.getAttribute("data-value")
        
        check(levelOne, levelTwo)
      }
      picker ++
    }
  }
  $('#board').click(function() {
    $('#output').html(function(i, val) { return val*1+1 });
});



  function check(levelOne, levelTwo) {
    if (levelOne === levelTwo) {

      $(".display-text").html("It's a match")
      endGame++;
      
      $(tryOne).fadeOut()
      $(tryTwo).fadeOut()

      setTimeout(function(){
        $(".display-text").hide("")
      }, 300);
      
    } else {

      $(".display-text").html("Not a match")

      setTimeout(function(){
        $(tryOne).empty()
        $(tryTwo).empty()


        $(".display-text").html("")
      }, 300);
    }
    if(endGame == 12) {
      alert(document.getElementById('output').innerHTML);
      location.reload();
    }
  }

});

