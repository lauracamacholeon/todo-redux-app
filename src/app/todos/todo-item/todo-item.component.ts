import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as action from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  checkCompleted: FormControl;
  txtEdit: FormControl;
  edit = false;
  // lo que esta en parentesis es el mismo nombre que puse en el html
  @ViewChild('inputFisico') inputFisico: ElementRef;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // console.log("completado" in this.todo);
    this.checkCompleted = new FormControl(this.todo.completado);
    this.txtEdit = new FormControl(this.todo.texto, Validators.required);

    this.checkCompleted.valueChanges.subscribe((changes) => {
      console.log(changes);
      this.store.dispatch(action.toggleTodo({ id: this.todo.id }));
    });
  }

  editar(): void {
    this.edit = true;
    this.txtEdit.setValue(this.todo.texto);
    // para que se alcance a notar se usa el set time out
    setTimeout(() => {
      this.inputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion(): void {
    this.edit = false;

    // esto se dispara cuando se quite el blur
    // console.log(this.txtEdit.value);
    if (this.txtEdit.invalid || this.txtEdit.value === this.todo.texto) {
      return;
    }

    this.store.dispatch(
      action.editTodo({ id: this.todo.id, texto: this.txtEdit.value })
    );
  }

  borrar(): void {
    // console.log(this.todo.id);
    this.store.dispatch(action.deleteTodo({ id: this.todo.id }));
  }
}
