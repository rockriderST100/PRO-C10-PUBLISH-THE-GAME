var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c6ce5e56-8d52-492d-949a-83ef985a8ccb","2d56fe43-1c6e-4fa4-ab77-10076fa4a845","fc0f8ce6-8ae0-4e14-9839-25cce161b27e","ef818aa7-dfbb-4346-ac26-ef14d4365551","82a3f8b2-28ad-4dc2-b28c-79d7efa0b3b4"],"propsByKey":{"c6ce5e56-8d52-492d-949a-83ef985a8ccb":{"name":"car_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"lHG1XFlqFup4wzdHby85uHkMnnYotG1g","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png"},"2d56fe43-1c6e-4fa4-ab77-10076fa4a845":{"name":"car_green_1","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"},"fc0f8ce6-8ae0-4e14-9839-25cce161b27e":{"name":"car_black_1","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"},"ef818aa7-dfbb-4346-ac26-ef14d4365551":{"name":"car_yellow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png"},"82a3f8b2-28ad-4dc2-b28c-79d7efa0b3b4":{"name":"grey_shirt2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/t44eFFNKurL6603QnBdIgqQ0CWopoOaC/category_people/grey_shirt2.png","frameSize":{"x":143,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"t44eFFNKurL6603QnBdIgqQ0CWopoOaC","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":143,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/t44eFFNKurL6603QnBdIgqQ0CWopoOaC/category_people/grey_shirt2.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation("grey_shirt2_1")
  sam.scale=0.1
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car1.velocityY=8
  car1.setAnimation("car_green_1");
  car1.scale=0.2
  
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car2.velocityY=8
  car2.setAnimation("car_blue_1")
  car2.scale=0.2
  
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car3.velocityY=-8
  car3.setAnimation("car_black_1")
  car3.scale=0.2
  
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car4.velocityY=-8
  car4.setAnimation("car_yellow_1")
  car4.scale=0.2
 
//add the velocity to make the car move.

function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);

  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
    
  if(keyDown("right"))
  {sam.x = sam.x + 3
  }
  
  if(keyDown("left"))
  {sam.x = sam.x - 3}
  
  if(
     sam.isTouching(car1)||
     sam.isTouching(car2)||
     sam.isTouching(car3)||
     sam.isTouching(car4))
     
     {sam.x = 20
     sam.y = 190
       
       life = life + 1;}
  
// create bounceoff function to make the car bounceoff the boundaries
//Add the condition to make the sam move left and right
//Add the condition to reduce the life of sam if it touches the car.
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
