//the isTouching function
function isTouching(sprite1,sprite2){
    if(sprite1.x-sprite2.x<sprite2.width/2+sprite1.width/2&&sprite2.x-sprite1.x<sprite2.width/2+sprite1.width/2&&sprite1.y-sprite2.y<sprite2.height/2+sprite1.height/2&&sprite2.y-sprite1.y<sprite2.height/2+sprite1.height/2){
      return true;
    }
    else{
      return false;
    }
  }

  //the bounceOff function
  function bounceOff(a,b) {
    if(a.x-b.x<b.width/2+a.width/2&&b.x-a.x<b.width/2+a.width/2){
      a.velocityX *= -1;
      b.velocityX *= -1;
    }
  
    if(a.y-b.y<b.height/2+a.height/2&&b.y-a.y<b.height/2+a.height/2){
      a.velocityY *= -1;
      b.velocityY *= -1;
    }
  }