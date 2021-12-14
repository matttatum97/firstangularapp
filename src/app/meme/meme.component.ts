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
  
  constructor(private memeService: MemeService) { }

  ngOnInit(): void {
    this.memeService.getMemes().subscribe(payload => {
      this.memes = payload.data.memes;
      console.log("PAYLOAD",payload.data.memes)
    })
  }

}
