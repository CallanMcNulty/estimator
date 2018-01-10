function createQuestionsDisplay(questions) {
  let el = $(`<div id="content"></div>`);
  questions.forEach((q,i) => {
    if(q.displayed) {
      let questionContainer = $(`
        <div class="question-container">
          <h2>${i+1}. ${q.text}</h2>
        </div>
      `);
      let optionsContainer = $(`<div class="options-container"></div>`);
      q.options.forEach(o => {
        let option = $(`
          <div class="option">
            <span>${o.text}</span>
          </div>
        `);
        let circle = $(`
          <div class="option-circle">
            <i ${o.iconType==="mat"? 'class="material-icons">'+o.icon : 'class="fa fa-'+o.icon+'"'}</i>
          </div>
        `);
        circle.click(function() {
          if(q.selection==="single") {
            optionsContainer.find(".option-circle").removeClass("selected-option");
            q.options.forEach(dataOption => dataOption.selected = false);
          }
          if(!$(this).hasClass("selected-option")) {
            $(this).addClass("selected-option");
            o.selected = true;
          } else {
            $(this).removeClass("selected-option");
            o.selected = false;
          }
          $("#result-display").remove();
          updateResult();
        });
        option.append(circle);
        optionsContainer.append(option);
      });
      questionContainer.append(optionsContainer);
      el.append(questionContainer);
    }
  });
  return el;
}
