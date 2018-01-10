function updateResult() {
  $(".result-display").remove();
  $("body").prepend(createResultDisplay(data));
  let real = createResultDisplay(data);
  real.attr("id", "current-result-display");
  $("body").append(real);
}
function changeViewedEstimate(index) {
  selectedDataIndex = index;
  updateResult();
  $("#content").remove();
  $("#editor").remove();
  $("body").append(createQuestionsDisplay(data[selectedDataIndex].questions));
  $("body").append(createOptionEditor(data[selectedDataIndex].questions));
  $("#app-type").text(data[selectedDataIndex].name+" - "+data[selectedDataIndex].description);
}
