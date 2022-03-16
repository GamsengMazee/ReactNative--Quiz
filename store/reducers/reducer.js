const initialState = 0;


const scoreState = (state = initialState, action) => {
     switch(action.type){
         case "SCORE_INCREMENT" : return state + 5;
       
         case "SCORE_RESET": return initialState;
       
         default:
             return state;

     }
}

export default scoreState;