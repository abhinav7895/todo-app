import { Todo } from "../../types/index";

export const todos: Todo[] = [
  {
    todoID: "todo01",
    title: "Grocery",
    createdAt: "5 April 2024",
    subTodos: [
      {
        title: "Banana",
        createdAt: "5 April 2024",
        isCompleted: false,
      },
      {
        title: "Jogging",
        createdAt: "6 April 2024",
        isCompleted: false,
      },
      {
        title: "Stretching",
        createdAt: "6 April 2024",
        isCompleted: true,
      },
    ],
  },
  {
    todoID: "todo02",
    title: "Workout",
    createdAt: "5 April 2024",
    subTodos: [
      {
        title: "Jogging",
        createdAt: "6 April 2024",
        isCompleted: false,
      },
      {
        title: "Stretching",
        createdAt: "6 April 2024",
        isCompleted: true,
      },
    ],
  },
  {
    todoID: "todo03",
    title: "Study",
    createdAt: "5 April 2024",
    subTodos: [
      {
        title: "Read a book",
        createdAt: "7 April 2024",
        isCompleted: false,
      },
      {
        title: "Take notes",
        createdAt: "7 April 2024",
        isCompleted: false,
      },
    ],
  },
  {
    todoID: "todo04",
    title: "Household chores",
    createdAt: "5 April 2024",
    subTodos: [
      {
        title: "Dishes",
        createdAt: "8 April 2024",
        isCompleted: false,
      },
      {
        title: "Laundry",
        createdAt: "8 April 2024",
        isCompleted: false,
      },
    ],
  },
  {
    todoID: "todo05",
    title: "Work",
    createdAt: "5 April 2024",
    subTodos: [
      {
        title: "Meeting",
        createdAt: "9 April 2024",
        isCompleted: false,
      },
      {
        title: "Report",
        createdAt: "9 April 2024",
        isCompleted: false,
      },
    ],
  },
  {
    todoID: "todo06",
    title: "Exercise",
    createdAt: "5 April 2024",
    subTodos: [
      {
        title: "Push-ups",
        createdAt: "10 April 2024",
        isCompleted: false,
      },
      {
        title: "Sit-ups",
        createdAt: "10 April 2024",
        isCompleted: false,
      },
    ],
  },
  {
    todoID: "todo07",
    title: "Shopping",
    createdAt: "5 April 2024",
    subTodos: [
      {
        title: "Groceries",
        createdAt: "11 April 2024",
        isCompleted: false,
      },
      {
        title: "Clothes",
        createdAt: "11 April 2024",
        isCompleted: false,
      },
    ],
  },
  {
    todoID: "todo08",
    title: "Project",
    createdAt: "5 April 2024",
    subTodos: [
      {
        title: "Research",
        createdAt: "12 April 2024",
        isCompleted: false,
      },
      {
        title: "Plan",
        createdAt: "12 April 2024",
        isCompleted: false,
      },
    ],
  },
  {
    todoID: "todo09",
    title: "Cleaning",
    createdAt: "5 April 2024",
    subTodos: [
      {
        title: "Living room",
        createdAt: "13 April 2024",
        isCompleted: false,
      },
      {
        title: "Bedroom",
        createdAt: "13 April 2024",
        isCompleted: false,
      },
    ],
  },
  {
    todoID: "todo10",
    title: "Appointment",
    createdAt: "5 April 2024",
    subTodos: [
      {
        title: "Dentist",
        createdAt: "14 April 2024",
        isCompleted: false,
      },
      {
        title: "Doctor",
        createdAt: "14 April 2024",
        isCompleted: false,
      },
    ],
  },
];

// Fake todos data
export const todosData = [
  {
    _id: "1",
    title: "Complete project proposal",
    author: "Abhinav",
    user_id: "1",
    subTodos: ["1", "2", "3", "4", "5"],
    createdAt : "8 April 2024"
  },
  { 
    _id: "5",
    title: "Prepare for exam",
    author: "Bob",
    user_id: "2",
    subTodos: ["1", "2", "3", "4", "5"],
    createdAt : "8 April 2024"
  },
  {
    _id: "2",
    title: "Grocery shopping",
    author: "Charlie",
    user_id: "3",
    subTodos: ["1", "2", "3", "4", "5"],
    createdAt : "8 April 2024"
  },
  {
    _id: "3",
    title: "Grocery shopping",
    author: "Charlie",
    user_id: "3",
    subTodos: ["1", "2", "3", "4", "5"],
    createdAt : "8 April 2024"
  },
  {
    _id: "4",
    title: "Grocery shopping",
    author: "Charlie",
    user_id: "3",
    subTodos: ["1", "2", "3", "4", "5"],
    createdAt : "8 April 2024"
  },
];

export const subTodosData = [
  {
    _id : "1",
    todoName : "Buy Apple",
    isCompleted : false,
    todo : "1"
  },
  {
    _id : "2",
    todoName : "Buy Apple",
    isCompleted : false,
    todo : "2"
  },
  {
    _id : "3",
    todoName : "Buy Apple",
    isCompleted : false,
    todo : "3"
  },
  {
    _id : "4",
    todoName : "Buy Apple",
    isCompleted : false,
    todo : "4"
  },
  {
    _id : "5",
    todoName : "Buy Apple",
    isCompleted : false,
    todo : "1"
  },
]

console.log("Todos:", todos);
