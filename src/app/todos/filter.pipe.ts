import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { validateFilter } from '../filter/filtro.actions';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  // value es lo que recibo el arreglo, y argumentos el filtro que quiero poner
  transform(todos: Todo[], filtro: validateFilter): Todo[] {
    // console.log(todos);
    switch (filtro) {
      case 'completados':
        // me retornara todos los que completado esta checkeado
        return todos.filter((todos) => todos.completado);
      case 'pendientes':
        return todos.filter((todos) => !todos.completado);
      case 'todos':
        return todos;
    }
  }
}
