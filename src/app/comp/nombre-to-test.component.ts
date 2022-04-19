
import { Component, Input, OnInit,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {ObjemitInterface} from '../objemit-interface';
import {isDivisible} from '../is-divisible';
import { nombreInfo } from './form.component';
import { interval, Observable,of } from 'rxjs';
import { take} from 'rxjs/operators';
@Component({
  selector: 'app-nombre-to-test',
  templateUrl: './nombre-to-test.component.html',
  styleUrls: ['./nombre-to-test.component.css']
})
export class NombreToTestComponent implements OnInit {
  @Output() choixJoueurEvent = new EventEmitter<ObjemitInterface>();
  @ Input() donnee: nombreInfo;
  divisable :boolean | null = null;
  choixJoueur : "divisabled" | "prime" | null = null;
  EnableBoutDivise = true;
  EnableBoutPrem = true;
  isStartPlay :boolean=false;
  endTimeShown : Observable<boolean>;
  // on veut que un time out apparaissent sur le jeux.
  // on veut que une fois repondu , le jeux disparaisse
  hideCompo:Observable<boolean>=of(true);
  pulse :Observable<any> = interval(1000);
  compteTo10 = this.pulse.pipe(take(10));
  compteSubsc : any;
  valeurTimer: Observable<number>;


  constructor() { }

  ngOnInit(): void {
    //  calcul si le chiffre est divisible
    /* on arrete l 'utilisation de la fn de calcul, on se fie au data*/
    //this.divisable = isDivisible(this.donnee.value); 
    this.divisable = this.donnee.divisible;

    console.log ("est factorisable: ",this.divisable);
    // souscrire au  timer
          

  }
  sayDivisible(val:boolean) {

    (val)? this.choixJoueur="divisabled": this.choixJoueur =  "prime";
    /* apresreponse du joueur : arreter le timer */
    this.compteSubsc.unsubscribe();
    /* bloquer les boutons de jeux */
    this.EnableBoutDivise = this.EnableBoutPrem = false;

    // // divisable == true et sayDivisible == true "oui, c'est divisible, show factor"
    // divisable == true et sayDivisible == false "C'etait divisible !"
    // divisable == false et sayDivisible == true  "non pas divisible"
    // divisable == false et sayDivisible == false "Oui, il est Premier"
      this.choixJoueurEvent.emit({valeur:this.donnee.value,choix: !!val});
      
   
  }
    startPlayComp(){
      this.compteSubsc = this.compteTo10.subscribe(x => { 
        this.valeurTimer = of(x) ;
        if (x == 10){
          this.hideCompo= of(true) ;
          
          this.endTimeShown = of(true) ;
      }
     } );
  this.isStartPlay =true;
  }
}
