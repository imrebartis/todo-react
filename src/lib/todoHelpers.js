// this will pass only the first test (addTodo should add the passed todo to the list)
// export const addTodo = (list, item) => {
//     list.push(item);
//     return list;
// }


// export const addTodo = (list, item) => list.concat(item)

// another way to make sure we add todos to an array of its own (it doesn't change the startTodos array):
export const addTodo = (list, item) => [...list, item];

export const generateId = () => Math.floor(Math.random()*100000);

export const findById = (id, list) => list.find(item => item.id === id);

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete});

export const updateTodo = (list, updated) => {
  const updatedIndex = list.findIndex(item => item.id === updated.id)
  return [
    ...list.slice(0, updatedIndex),
    updated,
    ...list.slice(updatedIndex+1)
  ]
};