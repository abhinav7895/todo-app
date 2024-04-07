// todo 
export interface Todo {
    todoID: string;
    createdAt : string
    title: string;
    subTodos: SubTodo[];
}

export interface SubTodo {
    title: string;
    createdAt: string;
    isCompleted: boolean;
}
