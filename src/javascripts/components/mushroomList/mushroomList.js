import mushroomData from '../../helpers/data/mushroomData';
import utils from '../../helpers/utils';
import mushroomComponent from '../mushroom/mushroom';

const removeShroomEvent = (e) => {
  const mushroomId = e.target.closest('.card').id;

  mushroomData.deleteMushroom(mushroomId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildForest();
    })
    .catch((err) => console.error('could not delete mushroom', err));
};

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((mushrooms) => {
      let domString = `
        <h2 class="text-center">Forest</h2>
        <div class="d-flex flex-wrap justify-center">`;

      mushrooms.forEach((mushroom) => {
        domString += mushroomComponent.mushroomMaker(mushroom);
      });

      domString += '</div>';

      utils.printToDom('#forest', domString);
      $('body').on('click', '.delete-shroom', removeShroomEvent);
    })
    .catch((err) => console.error('got mushrooms broke', err));
};

export default { buildForest };
