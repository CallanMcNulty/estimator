function createOptionEditor(questions) {
  let el = $(`<div id="editor" class="question-container"></div>`);
  let span = $(`<span id="edit-collapse" value="hidden">Show parameters <i class="fa fa-angle-down"></i></span>`);
  span.click(() => {
    let val = span.attr("value");
    if(val==="hidden") {
      $(".editor-question").show();
      span.attr("value", "showing");
      span.text("Hide parameters ");
      span.append($('<i class="fa fa-angle-up"></i>'));
    } else {
      $(".editor-question").hide();
      span.attr("value", "hidden");
      span.text("Show parameters ");
      span.append($('<i class="fa fa-angle-down"></i>'));
    }
  });
  el.append(span);
  questions.forEach((q,i) => {
    let questionContainer = $(`
      <div class="editor-question">
        <h3>${i+1}. ${q.text}</h3>
        <hr>
      </div>
    `);
    q.options.forEach(o => {
      let option = $(`
        <div>
          <span>${o.text}</span>
        </div>
      `);
      let input = $(`<input type="number" value="${o.days!==undefined?o.days:o.percentage}"/>`);
      input.change(() => {
        let newVal = parseInt(input.val());
        if(o.days!==undefined) {
          o.days = newVal;
        } else {
          o.percentage = newVal;
        }
        $("#result-display").remove();
        updateResult();
      });
      option.append(input);
      questionContainer.append(option);
      questionContainer.append($("<hr>"));
    });
    el.append(questionContainer);
  });
  return el;
}
