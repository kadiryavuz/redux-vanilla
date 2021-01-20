import { selectError } from './reducers/playerReducer';
import store from './store';


export const handleError = () => {
    const errors = selectError(store.getState()).filter(s => s.display === true);
    if(errors.length > 0) {
        const error = errors[0];
        const parentX = document.getElementsByTagName('video')[0].parentElement;
       
        const errContainer = document.createElement('div');
        errContainer.classList.add('err-container');

        const titleError = document.createElement('h2');
        titleError.classList.add('err-title');
        titleError.textContent = `${error.title}: ${error.errorId} - ${error.ts}`;

        const errText = document.createElement('p');
        errText.classList.add('err-content');
        errText.textContent = error.content;

        errContainer.appendChild(titleError);
        errContainer.appendChild(errText);
        parentX.appendChild(errContainer);

       

    }
    
}