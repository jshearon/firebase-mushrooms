import mycologistComponent from '../mycologists/mycologistComponent';
import utils from '../../helpers/utils';
import mycologistData from '../../helpers/data/mycologistData';
import singleMycologist from '../singleMycologist/singleMycologist';

const buildMycologistList = () => {
  mycologistData.getMycologists()
    .then((mycologists) => {
      let domString = `
      <div class="hut">
      <h2 class="text-center">Mycologist Hut</h2>
      <div class="d-flex flex-wrap">`;

      mycologists.forEach((mycologist) => {
        domString += mycologistComponent.mycologistMaker(mycologist);
      });

      domString += '</div></div>';

      utils.printToDom('#hut', domString);
      $('body').on('click', '.myco-card', singleMycologist.buildMycologist);
    })
    .catch((err) => console.error('no mycologists', err));
};

export default { buildMycologistList };
