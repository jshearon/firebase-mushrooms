const mushroomMaker = (mushroom) => {
  const domString = `
    <div class="col-3">
    <div class="card" id="${mushroom.id}">
    <div class="card-body">
      <h5 class="card-title">${mushroom.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${mushroom.location}</h6>
      <p class="card-text">This mushroom is ${mushroom.size} and ${mushroom.weight}</p>
      <button class="btn btn-danger delete-shroom"><i class="far fa-trash-alt"></i>Delete Shroom</button>
    </div>
  </div>
  </div>`;
  return domString;
};

export default { mushroomMaker };
