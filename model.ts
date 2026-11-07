type TaskStatus =  'todo'|'in-progress'|'done';

interface Task {
    id: number;
    title: string;
    status: TaskStatus;
}



let nextId = 1;

function addTask(tasks:Task[], title:string): Task[]{
    const newtask:Task = {id:nextId++ , title :title ,status : 'todo'};
return[...tasks,newtask];
}

function completeTask(tasks:Task[],id:number):Task[]{
    return tasks.map((t):Task => (t.id === id ?{...t , status:'done'}:t));
}

function filterbyStatus(tasks:Task[],status:'todo'|'in-progress'|'done'):Task[]{
    return tasks.filter((t) => (t.status === status));
}

let list :Task[] = [];
list = addTask(list,'lu2');
list = addTask(list,'lunch krte h bro')
list = addTask(list, "Milk");
list = addTask(list, "Gym");
list = addTask(list, "Study");
list = completeTask(list,2);
list = filterbyStatus(list,'done');


console.log(list)
