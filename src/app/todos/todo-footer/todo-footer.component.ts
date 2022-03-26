import { Component, OnInit } from '@angular/core';
import { validateFilter, setFilter } from '../../filter/filtro.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { deleteCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  filtroActual: validateFilter;
  // para colocarlo en el html
  filtros: validateFilter[] = ['todos', 'completados', 'pendientes'];
  pendientes: number = 0;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // extraer lo que esta en el store en la parte de filter reduce
    // this.store.select('filter').subscribe((filtro) => (this.filtroActual = filtro));
    // asi obtengo todo el store con el todo y filter los dos
    this.store.subscribe(({ todos, filter }) => {
      this.filtroActual = filter;
      // me devuelve un arreglo donde estan los valores que no esten completadoss!! el .length saca el tamaño
      // por  lo tanto me devuelve un numero con los que filtro
      this.pendientes = todos.filter((todo) => !todo.completado).length;
    });
  }

  cambiarFiltro(filtro: validateFilter): void {
    console.log('click');
    this.store.dispatch(setFilter({ filter: filtro }));
  }

  limpiarCompletados():void{
    this.store.dispatch(deleteCompleted());
  }
}
