const mushroomMaker = (mushroom) => {
  const domString = `
    <div class="col-3">
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">${mushroom.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${mushroom.location}</h6>
      <p class="card-text">This mushroom is ${mushroom.size} and ${mushroom.weight}</p>
    </div>
  </div>
  </div>`;
  return domString;
};

export default { mushroomMaker };
