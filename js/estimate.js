function estimate(data) {
  let days = 0;
  let designMultiplier = 0;
  data.questions.forEach(q => {
    q.options.forEach(o => {
      if(o.selected || !q.displayed) {
        if(o.days) {
          days+=o.days;
        }
        if(o.percentage) {
          designMultiplier = o.percentage/100;
        }
      }
    });
  });
  let designerDays = Math.ceil(days*designMultiplier);
  return {
    devDays: days,
    designDays: designerDays,
    cost: days*data.developerDayRate + designerDays*data.designerDayRate
  };
}
