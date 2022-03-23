// Code your solutions in this file
const names=["Guadalupe", "Ollie", "Aki"];
const cards=["placeholder","placeholder","placeholder"]
function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    
    cards[i]=`Thank you, ${names[i]}, for the wonderful ${event} gift!`;
  }

  return cards;
}
function countDown(number){
    
    for (let countup = number; countup >-1; countup--) {
        console.log(countup);
      }
}