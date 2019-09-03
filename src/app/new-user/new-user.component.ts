import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AvatarDialogComponent } from "../avatar-dialog/avatar-dialog.component";
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  exampleForm: FormGroup;

  avatarLink: string = "https://www.loginradius.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png";

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
      { type: 'required', message: 'Nombre de Evento  es requerido.' },
    ]
    ,
    'fecha_logro': [
      { type: 'required', message: 'Fecha de Evento es requerido.' },
    ]
    ,
    'puesto_logro': [
      { type: 'required', message: 'Puesto del logro es requerido.' },
    ]
  };

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      carrera: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
      celular: ['', Validators.required],

      nameproy: ['', Validators.required],
      descripcion: ['', Validators.required],
      link: ['', Validators.required],

      categoria: ['', Validators.required],
      fecha: ['', Validators.required],

      evento_logro: ['', Validators.required],
      fecha_logro: ['', Validators.required],
      puesto_logro: ['', Validators.required],
    });


  }

  openDialog() {
    const dialogRef = this.dialog.open(AvatarDialogComponent, {
      height: '400px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.avatarLink = result.link;
      }
    });
  }

  resetFields() {
    this.avatarLink = "https://www.loginradius.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png";

    this.exampleForm = this.fb.group({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      carrera: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      celular: new FormControl('', Validators.required),
      nameproy: new FormControl(''),
      descripcion: new FormControl(''),
      link: new FormControl(''),
      categoria: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),

      evento_logro: new FormControl('', Validators.required),
      fecha_logro: new FormControl('', Validators.required),
      puesto_logro: new FormControl('', Validators.required),


    });
    

  }

  onSubmit(value) {
    this.firebaseService.createUser(value, this.avatarLink)
      .then(
        res => {
          this.resetFields();
          this.router.navigate(['/home']);
        }
      )
  }

}
