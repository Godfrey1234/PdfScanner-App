import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  title = 'frontend';

  trigger: Subject<void> = new Subject<void>();
  image!: string;
  imageDataUrl!: string;


  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.image = webcamImage.imageAsDataUrl;
  }

  public triggerSnapshot(): void {
    this.trigger.next();
    console.log(this.image)

    const doc = new jsPDF();
    doc.addImage(this.image, 'PNG', 0, 0, 230, 300);
    doc.save('image.pdf');
  }


  
  
  ngOnInit(): void {
  }
}
