import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  mark: string = "";
  message: string = "";
  games: any[] = [];
  moves:any = [];
  gameOver: boolean = false;
constructor(){
  this.newGame();
}


  setMark(index: number) {
    if(this.games[index].mark=="" && !this.gameOver){
    this.games[index].mark = this.mark;
    this.moves.push([...this.games]);
    this.isGameOver();
    if(this.gameOver){
      this.message = "Oyun bitti. Kazanan: "+ this.mark ; 
      return;
    }
    
    else{
      if (this.mark == "X") {
        this.mark = "O";
      }
      else {
        this.mark = "X"
      }
      //this.message = "Sıradaki " + this.mark ; 
      this.message = `Sıradaki: ${this.mark}`
    }
    this.drawControl();
  }
  }
  newGame() {
    this.mark = "X";
    this.message = "Sıradaki X";
    this.games = [
      {mark:"", winner:false},
      {mark:"", winner:false},
      {mark:"", winner:false},
      {mark:"", winner:false},
      {mark:"", winner:false},
      {mark:"", winner:false},
      {mark:"", winner:false},
      {mark:"", winner:false},
      {mark:"", winner:false}
    ];
      this.moves = [];
      this.gameOver = false;

  }

  isGameOver(){
    for (let i = 0; i < 3; i++) {
      if (this.games[i * 3].mark !== "" &&
          this.games[i * 3].mark === this.games[i * 3 + 1].mark &&
          this.games[i * 3 + 1].mark === this.games[i * 3 + 2].mark) {
        this.gameOver = true;
        this.games[i*3].winner = true;
        this.games[i*3+1].winner = true;
        this.games[i*3+2].winner = true;
      }
    }
  
    // Sütun kontrolü
    for (let i = 0; i < 3; i++) {
      if (this.games[i].mark !== "" &&
          this.games[i].mark === this.games[i + 3].mark &&
          this.games[i + 3].mark === this.games[i + 6].mark) {
       this.gameOver = true;
       this.games[i].winner = true;
       this.games[i+3].winner = true;
       this.games[i+6].winner = true;
      }
    }
  
    // Çapraz kontrolü
    if (this.games[0].mark !== "" &&
        this.games[0].mark === this.games[4].mark &&
        this.games[4].mark === this.games[8].mark) {
          this.gameOver = true;
          this.games[0].winner = true;
          this.games[4].winner = true;
          this.games[8].winner = true;
    }
  
    if (this.games[2].mark !== "" &&
        this.games[2].mark === this.games[4].mark &&
        this.games[4].mark === this.games[6].mark) {
          this.gameOver = true;
          this.games[2].winner = true;
          this.games[4].winner = true;
          this.games[6].winner = true;
    }

    return false;
  }
  changeWinnerButtonClass(winner:boolean){
    if(winner){
      return "btn-success"
    }
    else{
      return "btn-warning"
    }
      
  }
  returnSelectMove(index:number){
    this.games = this.moves[index];
  }
  drawControl(){
    if(!this.gameOver){
      let control: number = 0;
      for(let i=0 ; i<9;i++){
      if(this.games[i].mark !==""){
        control++;
      }
      else{
        control = 0;
       
      }
      if(control === 9){
        this.message = "Oyun berabere";
      }
      
      }
    
    }
  }

}

