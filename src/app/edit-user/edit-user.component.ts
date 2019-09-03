import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AvatarDialogComponent } from "../avatar-dialog/avatar-dialog.component";
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  exampleForm: FormGroup;
  item: any;

  validation_messages = {
    'name': [
      { type: 'required', message: 'Nombres es requerido.' }
    ],
    'surname': [
      { type: 'required', message: 'Apellidos es requerido.' }
    ],
    'carrera': [
      { type: 'required', message: 'Carrera es requerido.' }
    ],
    'age': [
      { type: 'required', message: 'Edad es requerido.' },
    ],
    'email': [
      { type: 'required', message: 'Email  es requerido.' },
    ],
    'celular': [
      { type: 'required', message: 'Celular  es requerido.' },
    ],
    'categoria': [
      { type: 'required', message: 'categoria  es requerido.' },
    ],
    'fecha': [
      { type: 'required', message: 'fecha  es requerido.' },
    ],
    'evento_logro': [
      { type: 'required', message: 'Evento logro  es requerido.' },
    ],
    'fecha_logro': [
      { type: 'required', message: 'Fecha logro  es requerido.' },
    ],
    'puesto_logro': [
      { type: 'required', message: 'Puesto logro  es requerido.' },
    ]
 };

  constructor(
    public firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.createForm();
      }
    })
  }

  createForm() {
    this.exampleForm = this.fb.group({
      name: [this.item.name, Validators.required],
      surname: [this.item.surname, Validators.required],
      carrera: [this.item.carrera, Validators.required],
      age: [this.item.age, Validators.required],
      email: [this.item.email, Validators.required],
      celular: [this.item.celular, Validators.required],
      nameproy: [this.item.nameproy],
      link: [this.item.link],
      descripcion: [this.item.descripcion],
      categoria: [this.item.categoria, Validators.required],
      fecha: [this.item.fecha, Validators.required],

      evento_logro: [this.item.evento_logro, Validators.required],
      fecha_logro: [this.item.fecha_logro, Validators.required],
      puesto_logro: [this.item.puesto_logro, Validators.required],
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AvatarDialogComponent, {
      height: '400px',
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.item.avatar = result.link;
      }
    });
  }

  onSubmit(value){
    value.avatar = this.item.avatar;
    value.age = Number(value.age);
    this.firebaseService.updateUser(this.item.id, value)
    .then(
      res => {
        this.router.navigate(['/home']);
      }
    )
  }

  delete(){
    this.firebaseService.deleteUser(this.item.id)
    .then(
      res => {
        this.router.navigate(['/home']);
      },
      err => {
        console.log(err);
      }
    )
  }

  cancel(){
    this.router.navigate(['/home']);
  }

}
