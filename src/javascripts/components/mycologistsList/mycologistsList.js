import mycologistComponent from '../mycologists/mycologistComponent';
import utils from '../../helpers/utils';
import mycologistData from '../../helpers/data/mycologistData';

const buildMycologistList = () => {
  mycologistData.getMycologists()
    .then((mycologists) => {
      let domString = `
        <h2 class="text-center">Mycologists</h2>
        <div class="d-flex flex-wrap justify-center">`;

      mycologists.forEach((mycologist) => {
        domString += mycologistComponent.mycologistMaker(mycologist);
      });

      domString += '</div>';

      utils.printToDom('#mycos', domString);
    })
    .catch((err) => console.error('no mycologists', err));
};

export default { buildMycologistList };
