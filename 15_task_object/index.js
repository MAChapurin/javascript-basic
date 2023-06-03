'use strict';

const ToDoList = {
  taskStore: [],
  addTask(title, id, priority) {
    this.taskStore.push({ title, id, priority });
  },
  deleteTaskById(id) {
    this.taskStore = this.taskStore.filter((task) => task.id !== id);
  },
  updateTask(prop, id, value) {
    // if (!['title', 'priority'].includes(prop)) return false;
    const newObj = {
      [prop]: value,
    };
    this.taskStore = this.taskStore.map((el) => {
      return el.id === id ? { ...el, ...newObj } : el;
    });
  },
  sortByPriority() {
    this.taskStore = this.taskStore.sort((a, b) => a.priority - b.priority);
  },
};

console.log('Добавим несколько задач')
ToDoList.addTask('Первая задача', 1, 1);
ToDoList.addTask('Second task', 2, 3);
ToDoList.addTask('Third task',3,2);
ToDoList.addTask('Four task',4,2);
console.log(ToDoList.taskStore);
console.log('Теперь отсортируем по приоритету')
ToDoList.sortByPriority();
console.log(ToDoList.taskStore);
console.log('Изменим заголовок у первой таски');
ToDoList.updateTask('title',1, 'First task');
console.log(ToDoList.taskStore);
console.log('Теперь удалим третью');
ToDoList.deleteTaskById(3);
console.log(ToDoList.taskStore);


