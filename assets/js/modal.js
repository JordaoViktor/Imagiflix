import { getTitleInfo } from './getters';
import { $id, $class} from './utils';

export const openModal = elData =>{
  getTitleInfo(elData)
  $id('modal').style.display = 'grid';
  setTimeout(()=> {
    $id('modal').style.opacity = 1;
  }, 100);
  
}; 

export const closeModal = () => {
  $id('modal').style.opacity = 0;
  setTimeout(() => {
    $id('modal').style.display = 'none';
  },300)
}

export const setModalListeners = () =>{
  $class('modal__close').addEventListener('click', () => {
  closeModal();
  });
};
