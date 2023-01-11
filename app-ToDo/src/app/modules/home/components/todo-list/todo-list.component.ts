import { Component, OnInit, EventEmitter, DoCheck } from '@angular/core';

//interface
import { TaskList } from 'src/app/modules/model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]') ;


  constructor() { }

  ngDoCheck(){
    this.setLocalStorage();
  }

  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
      localStorage.setItem("list", JSON.stringify(this.taskList));
     }
  }
  public deleteItemListTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false});
  }

  public deleteAllTaslLista(){
    const confirm = window.confirm("Você deseja deletar tudo?");
    if(confirm){
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number){

    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja deletar?");

      if(confirm){
        this.deleteItemListTaskList(index);
      }
    }
  }

}
