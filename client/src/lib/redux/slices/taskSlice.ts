import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITaskData, ITodoData } from "../../../../types";

export interface TodosState {
  taskData: { todoId: string; taskData: ITaskData[] }[];
}

const initialState: TodosState = {
  taskData: [],
};

const taskSlice = createSlice({
  name: "taskData",
  initialState: initialState,
  reducers: {
    setTask: (
      state,
      action: PayloadAction<{ todoId: string; taskData: ITaskData[] }>
    ) => {
      const { todoId, taskData } = action.payload;

      // Find the index of the todo item in taskData array
      const index = state.taskData.findIndex((item) => item.todoId === todoId);

      // If todo item is found, update its taskData. If not found, add a new item.
      const updatedTaskData =
        index !== -1
          ? [
              ...state.taskData.slice(0, index),
              { todoId, taskData },
              ...state.taskData.slice(index + 1),
            ]
          : [...state.taskData, { todoId, taskData }];

      return {
        ...state,
        taskData: updatedTaskData,
      };
    },

    // setStatusOfSubtodo: (state, action) => {
    //   const idx = state.subTodos.findIndex(
    //     (subTodo) => subTodo._id === action.payload
    //   );

    //   if (idx === -1) {
    //     return state;
    //   }

    //   return {
    //     ...state,
    //     subTodos: [
    //       ...state.subTodos.slice(0, idx),
    //       {
    //         ...state.subTodos[idx],
    //         isCompleted: !state.subTodos[idx].isCompleted,
    //       },
    //       ...state.subTodos.slice(idx + 1),
    //     ],
    //   };
    // },
    // addNewTodo : (state, action) => {
    //   const id = action.payload;
    //   const newTodo:TodoData = {
    //     _id : id,
    //     title : "",
    //     author : "Abhinav Yadav",
    //     subTodos : [],
    //     user_id : "1",
    //     createdAt : getCurrentDate()
    //   }

    //   state.todos.push(newTodo);
    // },
    // editTitle: (
    //   state,
    //   action: PayloadAction<{ id: string; title: string }>
    // ) => {
    //   const idx = state.todos.findIndex(
    //     (todo) => action.payload.id === todo._id
    //   );

    //   if (idx !== -1) {
    //     return {
    //       ...state,
    //       todos: [
    //         ...state.todos.slice(0, idx),
    //         {
    //           ...state.todos[idx],
    //           title: action.payload.title,
    //         },
    //         ...state.todos.slice(idx + 1),
    //       ],
    //     };
    //   } else {
    //     return state;
    //   }
    // },

    // editSubTodoName: (
    //   state,
    //   action: PayloadAction<{ id: string; subTodoName: string }>
    // ) => {
    //   const {id, subTodoName} = action.payload;
    //   const idx = state.subTodos.findIndex(
    //     (subTodo) => id === subTodo._id
    //   );

    //   if (idx !== -1) {
    //     return {
    //       ...state,
    //       subTodos: [
    //         ...state.subTodos.slice(0, idx),
    //         {
    //           ...state.subTodos[idx],
    //           todoName: subTodoName,
    //         },
    //         ...state.subTodos.slice(idx + 1),
    //       ],
    //     };
    //   } else {
    //     return state;
    //   }
    // },
    // addTodo: (
    //   state,
    //   action: PayloadAction<{ id: string; todoName: string }>
    // ) => {
    //   const subTodoId = uuidv4();
    //   const newTodo = {
    //     _id: subTodoId,
    //     todoName: action.payload.todoName,
    //     isCompleted: false,
    //     todo: action.payload.id,
    //   };

    //   const updatedSubTodos = [...state.subTodos, newTodo];

    //   const updatedTodos = state.todos.map((todo) => {
    //     if (todo._id === action.payload.id) {
    //       return {
    //         ...todo,
    //         subTodos: [...todo.subTodos, subTodoId],
    //       };
    //     } else {
    //       return todo;
    //     }
    //   });

    //   return {
    //     ...state,
    //     subTodos: updatedSubTodos,
    //     todos: updatedTodos,
    //   };
    // },

    // deleteTodo: (state, action: PayloadAction<string>) => {
    //   const idx = state.todos.findIndex((todo) => action.payload === todo._id);
    //   console.log(action.payload);

    //   const updatedTodos = [
    //     ...state.todos.slice(0, idx),
    //     ...state.todos.slice(idx + 1),
    //   ];

    //   const updatedSubtodos = state.subTodos.filter((subTodo) => {
    //     return subTodo.todo !== action.payload;
    //   });

    //   return {
    //     ...state,
    //     todos: updatedTodos,
    //     subTodos: updatedSubtodos,
    //   };
    // },
    // deleteSubtodo: (
    //   state,
    //   action: PayloadAction<{ todoId: string; subTodoId: string }>
    // ) => {
    //   console.log(action.payload);

    //   const { todoId, subTodoId } = action.payload;
    //   console.log(subTodoId);

    //   const subtodo_idx = state.subTodos.findIndex(
    //     (subtodo) => todoId === subtodo.todo
    //   );

    //   if (subtodo_idx !== -1) {
    //     const updatedTodos = state.todos.map((todo) => {
    //       if (todoId === todo._id) {
    //         return {
    //           ...todo,
    //           subTodos: todo.subTodos.filter((id) => id !== subTodoId),
    //         };
    //       } else {
    //         return todo;
    //       }
    //     });
    //     const updatedSubtodos = [
    //       ...state.subTodos.slice(0, subtodo_idx),
    //       ...state.subTodos.slice(subtodo_idx + 1),
    //     ];

    //     return {
    //       ...state,
    //       todos: updatedTodos,
    //       subTodos: updatedSubtodos,
    //     };
    //   }
    // },
  },
});

export const { setTask } = taskSlice.actions;

export default taskSlice.reducer;

/**
 * All possible Reducers :
 * + setData(take todo and subTodo data)
 * + editTitle(take the todo)
 * + deleteTodo(toke the todo)
 * + addTodo(todoData)
 * + setStatusOfSubtodo(take the subtodo)
 * + removeSubtodo(take the subtodo)
 * + editSubtodo(take the subtodo)
 * + addSubtodo(subTodoData)
 *
 */
