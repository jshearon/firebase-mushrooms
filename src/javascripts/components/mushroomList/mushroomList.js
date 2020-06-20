import mushroomData from '../../helpers/data/mushroomData';

// import utils from '../../helpers/utils';

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((response) => console.warn('Get Mushrooms worked!', response.data))
    .catch((err) => console.error('got mushrooms broke', err));
  // const domString = '<h1>It does Work</h1>';
  // utils.printToDom('#forest', domString);
};

export default { buildForest };
