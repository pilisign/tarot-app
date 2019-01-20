$('button').on('click', function(){
  if ($("#name").val() == ""){
    let required = $('#required');
    required.removeClass("none");
    } else {
    $('.board').removeClass('hidden')
    $('.first').addClass('hidden')
    let name = $('#name').val();
    $('#repeatname').append(name);
    let about = $('#know-about').val();
    $('#about').append(about);
    }
})

let divContainer = $('#cardscontainer');
const cards = [
  {id: 1, dataid:"1", img: './img/chariot.jpg', description: 'The Chariot tarot card is all about overcoming challenges and gaining victory through maintaining control of your surroundings. The use of strength and willpower are critical in ensuring that you overcome the obstacles that lie in your path. The Chariot s message comes to make you stronger as you strive to achieve your goals. The key message that he brings to you is that you must maintain focus, confidence, and determination through a process that will be full of winding turns and detours. If you have a plan or a project that you seem not to be sure about, the Chariot shows that you should pursue the plan with a structured and ordered approach. Your boldness will ensure that you achieve all that you should in this goal.' },
  {id: 2, dataid:"2", img: './img/death.jpg', description:'The Death card signals that one major phase in your life is ending, and a new one is going to start. You just need to close one door, so the new one will open. The past needs to be placed behind you, so you can focus your energy on what is ahead of you.' },
  {id: 3, dataid:"3", img: './img/devil.jpg', description:'You have feelings of entrapment, emptiness and lack of fulfillment in your life. It might also mean that you are a slave to materialism and opulence and no matter how hard you try, you just can’t seem to shake off the feeling of wanting to indulge in luxurious living.'},
  {id: 4, dataid:"4", img: './img/star.jpg', description:'You have gone and passed through a terrible life challenge. You have managed to go through this without losing your hope. While you suffered, you perhaps were not aware of your own strength, but you are now perhaps recognizing that the loss helped you discover your own resilience and inner power. It is only now that you can really appreciate all that you have.'},
  {id: 5, dataid:"5", img: './img/strength.jpg', description:'You are a very patient individual who is likely to accomplish anything that they put their mind to. Your resilience will greatly aid you, and your fearlessness means that you should have no issues speaking your mind. This card also indicates this kind of compassion will always be rewarded with having a lot of stability in your life either presently on in the near future.'},
  {id: 6, dataid:"6", img: './img/sun.jpg', description:'The Sun card represents success, abundance, and radiance. Like the sun itself, it gives strength and vitality to all those that are lucky enough to feel its rays. There is much joy and happiness that is coming to you.'},
  {id: 7, dataid:"7", img: './img/empress.jpg', description:'Understand yourself and get in touch with your sensuality so that you can attract life circumstances to bring happiness and joy. She is a signal that be kind to yourself, to take care of yourself. The Empress is also a strong indication of pregnancy and motherhood. You can look for other cards to confirm if this is truly pregnancy, or rather just an indication of a motherly, nurturing and caring attitude. The Empress card could also mean the birth of a new idea, business or project on your life.'},
  {id: 8, dataid:"8", img: './img/moon.jpg', description:'On one hand, the Moon card can symbolize your imagination is taking the best of you. In the dark of the night, you are taking a path that you are unsure of, for there could be danger lurking in its depths. You are the crawfish embarking on the path in the card. The moon s light can bring you clarity and understanding and you should allow your intuition to guide you through this darkness.'},
  {id: 9, dataid:"9", img: './img/magician.jpg', description:'It s time to tap into your full potential without hesitation. It might be in your new job, new business venture, a new love or something else. It shows that the time to take action is now and any signs of holding back would mean missing the opportunity of becoming the best version of yourself. Certain choices will have to be made and these can bring great changes to come. Harness some of the Magician s power to make the world that you desire most.'},
  {id: 10, dataid:"10", img: './img/lovers.jpg', description:'Harmony, attractiveness, and perfection in a relationship. The trust and the unity that the lovers have gives each of them confidence and strength, empowering the other. The bond that they have created is very strong, and it can indicate that the two are joined in marriage, and other close and intimate relationships.'},
  {id: 11, dataid:"11", img: './img/the-world.jpg', description:'Fulfillment, achievement, and completion. This shows that all the efforts that you have been putting in place are starting to pay off. It reflects that you have completed a major milestone in your life and you have built the resilience to withstand challenges. The World may indicate completion of a long-term project, study or any other major event in your life. It may also mean the birth of a child, marriage, graduation or any other thing that you have accomplished. The World card shows that you have a desire to give back to the community in various ways. You have a commitment to make the world a better place because you understand that everything is connected.'},
  {id: 12, dataid:"12", img: './img/wheel-of-fortune.jpg', description:'The Wheel of Fortune turns evermore, seemingly to communicate that life is made up of both good and bad times, and that the cycle is one that we cannot control. It is something that is subjected to both kings and workers, and that nobody on earth can avoid what is fated. When you have good moments in your life, make sure that you enjoy to the fullest, for what comes up must always go down. The same is true in reverse - when you are in a bad situation, things will eventually become better again.'},
  {id: 13, dataid:"13", img: './img/fool.jpg', description:'A beginning of a new journey, one where you will be filled with optimism and freedom from the usual constraints in life. When we meet him, he approaches each day as an adventure, in an almost childish way. He believes that anything can happen in life and there are many opportunities that are lying out there, in the world, waiting to be explored and developed. He leads a simple life, having no worries, and does not seem troubled by the fact that he cannot tell what he will encounter ahead.'},
  {id: 14, dataid:"14", img: './img/high-priestess.jpg', description:' it is time for you to listen to your intuition rather than prioritizing your intellect and conscious mind. When the High Priestess shows up it can depict an archetype known as the divine feminine - the mysterious female that understands and holds the answers to the deep unknowns; religion, self, nature. She represents someone that is intuitive, and beginning to open to her or his spirituality. Meditation, prayer and new spiritual work is indicated.'},
  {id: 15, dataid:"15", img: './img/hermit.jpg', description:'You are currently contemplating that you need to be alone. Never be afraid to take this chance to reflect, as it could help you clear your mind of all the clutter that comes with everyday life. The Hermit may also refer to your effort in taking action that is authentic and aligned with your true self. You are perhaps searching your inner soul for guidance on what is right, and where your next steps are to be. The hermit s appearance in a reading can also denote the appearance of someone who will come to your life that will be your mentor.'},
  {id: 16, dataid:"16", img: './img/hanged-man.jpg', description:'This is a card which is mainly designated towards waiting and suspension. This suggests that this might be the thing that you need to do in order to achieve success or to wait for the proper opportunity. Keep in mind that taking action is not always the best solution and in certain cases refraining from doing so might bring you just as much, if not more benefits.'},
  {id: 17, dataid:"17", img: './img/justice.jpg', description:'The decisions that you make now have long-term effects in all things, both for yourself and others. There will always come a time where you will be judged. The Justice tarot card appearing in a reading signals that a judgment will be made fairly and accordingly. The decisions that you have made in the past will be carefully weighed with fairness. Your feelings around this card may differ depending on your situation. If you have been wronged, this card s appearance may bring you relief. On the other hand, if your actions caused pain to others, this card serves as a warning. Her appearance represents a chance for you to change your actions now for a better future.'},
  {id: 18, dataid:"18", img: './img/temperance.jpg', description:'This card implies that you have a clear vision and know what you want to achieve. This is an indication of higher learning, which is a critical attribute in the journey of life. It reflects that you have found peace with what you are doing and everything is unfolding as it ought to. The Temperance card, in relation to other people, shows that you are able to adapt and work in harmony with your community, your coworkers and your loved ones. Your calmness in all matters gives them comfort and puts them at ease.'},
  {id: 19, dataid:"19", img: './img/emperor.jpg', description:'Presents a chance to grow in terms of the goals that you have set for yourself. It presents a successful future as long as you pursue your goals similar to the fashion that the Emperor does, methodically, and strategically. When you see him in a reading, a possible interpretation is that you could be put in charge of something important. It could be a position at work or in any kind of organization or institution that desperately needs order and a clear decisive mind. You may be called to act in the place of the Emperor, using his wisdom to bring clarity to the project.'},
  {id: 20, dataid:"20", img: './img/the-tower.jpg', description:'The Tower represents change in the most radical and momentous sense. It is for this reason that the card itself visually looks so unnerving. But it doesn t necessarily have to be truly frightening or ominous. Because at the heart of this card, its message is foundational, groundbreaking change. The kind of event that the Tower card marks does not have to be something terrible, like a disaster or a great loss.  Change itself is a normal part of life that one has to embrace. But it can sometimes strike fear, for it means that we must abandon the truths that we have known prior to this event. The old ways are no longer useful, and you must find another set of beliefs, values and processes to take their place.'},
  {id: 21, dataid:"21", img: './img/judgement.jpg', description:'The Judgement card appearing in a reading signifies that you are coming close to this significant point in your life where you must start to evaluate yourself. To see this card can also indicate that you are in a period of awakening, brought on by the act of self-reflection. You now have a clearer idea of what you need to change and how you need to be true yourself and your needs. This can mean making small changes to your daily life or making huge changes that not only affect you but the people close to you.'},
  {id: 22, dataid:"22", img: './img/le-pape.jpg', description:'You have a certain desire to actually follow a process which has been well established. It also suggests that you want to stay within certain conventional bounds of what could be considered an orthodox approach. So, instead of being innovative, you will be adapting to certain beliefs and systems which are already put in place and are existing.'},
];

const random = shuffle(cards)

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

$('img').on('click', function(e) {
  const imgId = e.target.id
  const id = $('#' + imgId).attr('data-id')
  $('#' + imgId).attr('src', random[id - 1])
})

// set board
function setBoard(){
for ( i = 0; i < 3; i++) {
  let cardImg = cards[i].img;    
  let CardDiv = $('<div class="card"><span><img data-id="'+cards[i].dataid+'"id="'+cards[i].id+'" src="'+cards[i].img+'"></span></div>');
  $('.boardcard').append(CardDiv);
  } 
}

// cards counter
let clicks = 0;
let primerClick

function play(){ 
  // set cards
  $(".card").on('click', function (){
     clicks = clicks + 1
     
     $(this).toggleClass('flipped');
     $(this).addClass('show');
     if (clicks == 3) {
     let cardPast = cards[0].description;
     let cardPresent = cards[1].description;
     let cardFuture = cards[2].description;
 
      let predictions = $('<div class="tries"><p class="description"><strong>Past:</strong> '+cardPast+'</p><p class="description"><strong>Present:</strong> '+cardPresent+'</p><p class="description"><strong>Future:</strong> '+cardFuture+'</p></div>'); 
      $('.tries').append(predictions);
      } else {
        return;
      }
    })      
}

$('#retry').on('click', function(){
  window.location.reload(true);
})

setBoard();
play();
