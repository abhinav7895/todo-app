// todo
export interface Todo {
  todoID: string;
  createdAt: string;
  title: string;
  subTodos: SubTodo[];
}

export interface SubTodo {
  title: string;
  createdAt: string;
  isCompleted: boolean;
}

export interface TodoData {
  _id: string;
  title: string;
  author: string;
  user_id: string;
  subTodos: string[];
  createdAt: string;
}

export interface SubTodoData {
  _id: string;
  todoName: string;
  isCompleted: boolean;
  todo: string;
}


export interface User {
  _id : string, 
  fullName : string,
  email : string
}