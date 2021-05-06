import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  itemRef: any;
  
  listadoSubastas = [] ;

  constructor(
    private db : AngularFireDatabase) {
      
    }

  ngOnInit(){    
    this.itemRef = this.db.object('subastasViviendas/');
    this.itemRef.snapshotChanges().subscribe(action => {
      let data = action.payload.val();
      for(let key in data){
        let valor = data[key];  
        console.log(valor);      
        this.listadoSubastas.push(valor);
      }
    });
  }


}
