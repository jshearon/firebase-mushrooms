const mycologistMaker = (mycologist) => {
  const domString = `
    <div class="col-3">
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">${mycologist.name}</h5>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
  </div>`;
  return domString;
};

export default { mycologistMaker };
