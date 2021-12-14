import { Component, OnInit } from '@angular/core';
import { Meme } from "../meme/meme.model";
import { MemeService } from '../meme.service';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit {

  memes: Meme[] = [];
  savedMemes: Meme[] = [];
  
  constructor(private memeService: MemeService) { }

  ngOnInit(): void {
    this.memeService.getMemes().subscribe(payload => {
      this.memes = payload.data.memes;
      console.log("PAYLOAD:",payload.data.memes)
    })
  }

  onShow(event: any){
    // alert(event.target.value)
    let imgId = event.target.id;
    console.log(imgId);
   
    for(let i = 0; i < this.memes.length; i++) {
      if (this.memes[i] === imgId) {
        this.savedMemes.push(this.memes[i]) 
      }
    } 
    console.log("SAVED MEMES",this.savedMemes);
  
   
  }

}
