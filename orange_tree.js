 const orangeModule = require('./orange')

 class OrangeTree {
  constructor(age, height) {
    this.age = age; 
    this.height = height;
    this.oranges = [];
  }

  passGrowingSeason() {
    
      if(this.isMature()) {
        if(this.hasOranges()){
          this.oranges = [];
        }
        let random = Math.floor(Math.random() * (300 - 100) + 100); 
        for(let i = 0; i <= random; i++) {
            this.oranges.push(new orangeModule());
        }
      }
      this.age++;
      if(this.height <= 22.5){
        this.height += 2.5 
      } return this.oranges
  }

  // averageOrangeDiameter() {
    
  //   let averageDiameter = 0;
  //   for(let i = 0; i < this.oranges.length; i++) {
  //     averageDiameter += this.oranges[i].diameter;
  //   }

    
  //   averageDiameter = averageDiameter / this.oranges.length;
    
  //   return averageDiameter
  // }





  //  Returns true if the tree is old enough to bear fruit (6), false otherwise
  isMature(){
    if (this.age >= 6) {
      return true
    } else {
      return false
    }

  }

  isDead() {
    if(this.age >= 100) {
      return true;
    } 
      return false
  }

  //  Returns +true+ if there are any oranges on the tree, +false+ otherwise
  hasOranges(){
    if (this.isMature()) {
      if (this.oranges.length > 0) {
        return true
      } 
    } 
    return false;
  }


  //  Returns an Orange if there are any
  //  Raises a NoOrangesError otherwise
  pickAnOrange() {
    if(!this.hasOranges()){
      return "This tree has no oranges"
    } else {
      return this.oranges.shift();
      
    }
  }

    //  orange-picking logic goes here

}

module.exports = OrangeTree;
