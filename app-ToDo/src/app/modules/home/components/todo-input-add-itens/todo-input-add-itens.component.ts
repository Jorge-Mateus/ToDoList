import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskList } from 'src/app/modules/model/task-list';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskLista: string = "";

  constructor() { }



  ngOnInit(): void {
  }

  public submitItemTaskList(){

    this.addItemTaskLista = this.addItemTaskLista.trim();

    if(this.addItemTaskLista){
      this.emitItemTaskList.emit(this.addItemTaskLista);
      this.addItemTaskLista = "";
    }
  }

}
