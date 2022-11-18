import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from "gsap";

@Component({
  selector: 'app-link-frame',
  templateUrl: './link-frame.component.html',
  styleUrls: ['./link-frame.component.scss']
})
export class LinkFrameComponent implements OnInit {

  tl = gsap.timeline()
  closevideo=true

  constructor() { }

  ngOnInit(): void {

  }
  Elem: any;

  play: any;

hide=false

showcontent=true



  @ViewChild('Playernew', { static: false })

  Playernew!: ElementRef;

  playvid() {

    this.play();



  }
  blinkitem = [false,false,false]

blinkOff(n:any){
  this.blinkitem[n] = true
  console.log(this.blinkitem)

  if(n=1){
    this.tl.fromTo (".zoom",{opacity:0,scale:1.5},{opacity:1,scale:1,duration:0.5,delay:0.2})  
  }
}
close(){
  this.closevideo = false

}
}
