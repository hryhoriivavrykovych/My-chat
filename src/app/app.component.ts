import { Component, OnInit } from '@angular/core';
import { JokesService } from './jokes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public message
  public conversation = []
  jokes: any[] = [];
  
  constructor(
    private jokesService: JokesService
  ) {}

  ngOnInit() {
}
  sendMessage()
  {
    console.log(this.message)
    this.conversation.push(this.message)
    this.message=""
    this.jokesService.getRandomJoke()
    .subscribe(joke => 
    this.jokes.push(joke));
  }

  title = 'my-chat';

  public show:boolean = false;
  public show2:boolean = false;
  public show3:boolean = false;
  public classmessages1: any = 'Show';
  public classmessages2: any = 'Show2';
  public classmessages3: any = 'show3';

  messages1() {
  this.show = !this.show 


  if(this.show)
  this.classmessages1 = "Hide"
  else
  this.classmessages1 = "Show"
  }

  messages2() {
  this.show2 = !this.show2;


  if(this.show2)
  this.classmessages2 = "Hide"
  else
  this.classmessages2 = "Show"
  }

  messages3() {
  this.show3 = !this.show3;


  if(this.show3)
  this.classmessages3 = "Hide"
  else
  this.classmessages3 = "Show"
  }

}
