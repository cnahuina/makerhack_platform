import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  getAvatars() {
    return this.db.collection('/avatar').valueChanges()
  }


  getUser(userKey) {
    return this.db.collection('users').doc(userKey).snapshotChanges();
  }
  //  ########### Functions ################ //

  updateUser(userKey, value) {
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('users').doc(userKey).set(value);
  }

  deleteUser(userKey) {
    return this.db.collection('users').doc(userKey).delete();
  }


  getUsers() {
    return this.db.collection('users').snapshotChanges();
  }

  //  ########### Filtros ################ //
  searchUsers(searchValue) {
    return this.db.collection('users', ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchUsersByAge(value) {
    return this.db.collection('users', ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }
  //  #################################### //

  createUser(value, avatar) {
    return this.db.collection('users').add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      surname: value.surname,
      carrera: value.carrera,
      age: parseInt(value.age),
      email: value.email,
      celular: value.celular,
      avatar: avatar,

      nameproy: value.nameproy,
      link: value.link,
      descripcion: value.descripcion,

      categoria: value.categoria,
      fecha: value.fecha,

      evento_logro: value.evento_logro,
      fecha_logro: value.fecha_logro,
      puesto_logro: value.puesto_logro,

    });
  }
}
