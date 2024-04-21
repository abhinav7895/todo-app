import { useSelector } from 'react-redux'
import { ITodoData } from '../../types';
import TodosList from './TodosList';
import { v4 as uuidv4 } from 'uuid';

const Todos = () => {
    const { todoData, tasksData } = useSelector((store : any) => store.todos);
    
    return (
        todoData.map((todo : ITodoData) => <TodosList key={uuidv4()} todo={todo}/>)
    )
}

export default Todos