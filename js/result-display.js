function createResultDisplay(data) {
  let result = [];
  let total = 0;
  let sel = $(`<select></select>`);
  data.forEach((d,i) => {
    let r = estimate(d);
    result.push(r);
    total += r.cost;
    sel.append(`<option value="${i}"${i===selectedDataIndex?" selected":""}>${d.name}</option>`);
  });
  sel.change(() => changeViewedEstimate(parseInt(sel.val())));
  let subCost = $(`<h3> Cost: $${result[selectedDataIndex].cost}</h3>`);
  subCost.prepend(sel);
  let el = $(`
    <div class="result-display question-container">
      <div>
      <span>${result[selectedDataIndex].designDays} Designer days</span>
      <br>
      <span>${result[selectedDataIndex].devDays} Developer days</span>
      </div>
      <h1>Total Cost: $${total}</h1>
    </div>
  `);
  el.prepend(subCost);
  return el;
}
