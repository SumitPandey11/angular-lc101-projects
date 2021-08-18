import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled : boolean = true;

  
  handleTakeOff(){
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      this.takeOffEnabled = false;
   }
  }

  
  handleLand(){
    let result = window.alert('The shuttle is landing. Landing gear engaged.');
    
      this.color = 'green';
      this.height = 0;
      this.width = 0;
      this.message = 'The shuttle has landed.';
      this.takeOffEnabled = true;
  }

  handleAbort(){
    let result = window.confirm('Are you really want to abort the mission?');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      this.message = 'Mission aborted.';
      this.takeOffEnabled = true;
  }
}

tooCloseTopWarning(){
  if(this.height >= 650000){
    alert("you are too close to top");
  }
}
tooCloseBottomWarning(){
  if(this.height <= 10000){
    alert("you are too close to bottom");
  }
}

moveRocket(rocketImage, direction) {
   if(direction === 'up' ){
     let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
     this.tooCloseTopWarning();
     rocketImage.style.bottom = movement;
     this.height += 10000;
   }

   if(direction === 'down' ){
    let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
    this.tooCloseBottomWarning(); 
    rocketImage.style.bottom = movement;
     this.height -= 10000;
  } 

  if(direction === 'right'){
    
    let movement = parseInt(rocketImage.style.left) + 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width + 10000;
  }
  if(direction === 'left'){
    let movement = parseInt(rocketImage.style.left) - 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width - 10000;
  }
}

}
