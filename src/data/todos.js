export let todosArray = [

    {
        title: "Buy a new car",
        isComplited: true,
        taskId: 1,
    }, {
        title: "Buy a new jet",
        taskId: 2,
        isComplited: false,
    }, {
        title: "Buy a new moto",
        taskId: 3,
        isComplited: false,
    }, {
        title: "Buy a new house",
        taskId: 4,
        isComplited: false,
    }
]


export const setNewTodos = (todos) => {
    todosArray = [...todos]
}
