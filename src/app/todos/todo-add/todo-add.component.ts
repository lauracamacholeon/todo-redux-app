import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  txtInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {}

  agregar(): void {
    if (this.txtInput.invalid) {
      return;
    }

    // si todo es correcto
    console.log(this.txtInput.value);
    console.log(this.txtInput.valid);
    // disparara la accion
    this.store.dispatch(actions.createTodo({ texto: this.txtInput.value }));
    // resetear el valor para que el campo quede nuevamente vacio
    this.txtInput.reset();
  }
}
