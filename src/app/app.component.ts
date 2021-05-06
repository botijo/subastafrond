import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { SubastaService } from './services/subasta.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  // itemRef: any;
  
  constructor(  
    // private db : AngularFireDatabase,
    private auth : AngularFireAuth,
    private router : Router,    
  ) { 
  }

  ngOnInit(){
    this.verifyCurrentUser();
    // this.itemRef = this.db.object('subastasViviendas');
    // this.itemRef.snapshotChanges().subscribe(action => {
    //   console.log(action.type);
    //   console.log(action.key)
    //   console.log(action.payload.val())
    // });
  }

  //ESTA ATENTO AL SUBSCRIBE DE MANERA QUE SI NO ESTAS
  //LOGEADO, TE MANDA SIEMPRE A LOGIN. EN CASO CONTRARIO
  //A LA LISTA.
  verifyCurrentUser(){
    this.auth.authState.subscribe(e=> {
      // console.log(e);
      if(e==null){
        this.router.navigate(['/login']);  
      }else{
        this.router.navigate(['/'], {replaceUrl:true})
      }      
    })
  }

}
