import mushroomData from '../../helpers/data/mushroomData';
import utils from '../../helpers/utils';

// import utils from '../../helpers/utils';

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((mushrooms) => {
      console.error('Get Mushrooms worked!', mushrooms);
      let domString = `
        <h2 class="text-center">Forest</h2>
        <div class="d-flex flex-wrap justify-center">`;

      mushrooms.forEach((mushroom) => {
        domString += `<p>${mushroom.name}</p>`;
      });

      domString += '</div>';

      utils.printToDom('#forest', domString);
    })
    .catch((err) => console.error('got mushrooms broke', err));
  // const domString = '<h1>It does Work</h1>';
  // utils.printToDom('#forest', domString);
};

export default { buildForest };
