let id = 3;
const initialState = [
  {
    id: 1,
    title: 'Acheter du beurre',
    completed: false
  },
  {
    id: 2,
    title: 'Faire chauffer la poêle'
    ,
    completed: false
  },
  {
    id: 3,
    title: 'Ajouter des oeufs',
    completed: false
  },
  {
    id: 4,
    title: 'Ne pas oublier la farine',
    completed: false
  },

]

export const ADD_TODO_ACTION = 'ADD_TODO_ACTION'
export const UPDATE_TODO_ACTION = 'UPDATE_TODO_ACTION'
// Pour le toggle de 



export default function TodosReducer(state = initialState, action){

    switch(action.type){
      case ADD_TODO_ACTION: 
      // Ici on doit faire un nouvel état, on ne peut pas faire state.push()
      return[...state, 
        {  id: id++, completed: false, ...action.payload}
    ]

    case UPDATE_TODO_ACTION:
    // On ne peut pas faire de mutation, il faut parcourir l'ensemble des éléments (map) et trouver l'élément dans le payload 
    return state.map(todo => {
        // si todo id 
        if(todo.id == action.payload.id){
            // retourne un objet qui contient ce qu'on a dans le store et ce qu'on a dans le payload
            return {...todo, ...action.payload}
        } else{
            // sinon renvoyer le simple todo
            return todo
        }
        // Maintenant il va falloir connecter ça à notre store
    })
      default: return state
    }
  
  }
  // Le reducer va se charger des actions et des traitements à apporter aux différents composants