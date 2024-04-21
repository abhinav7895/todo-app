// todo

export interface ITaskData {
  taskName: string;
  createdAt: string;
  isCompleted: boolean;
  todo : string
}

export interface ITodoData {
  _id: string;
  createdAt : string,
  updatedAt : string,
  title : string
}


export interface User {
  _id : string, 
  fullName : string,
  email : string
}

export interface ErrorInterface {
  isLetterError: boolean;
  isCharactersError: boolean;
  isNumAndSpecialCharError: boolean;
}
