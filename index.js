const stepsForm = document.querySelector('.steps');
let toShow = 1;
//Get number of steps overall
let numberOfSteps = document.querySelectorAll('.steps_content-item').length;
//Loop through all form buttons
stepsForm.querySelectorAll('button').forEach(btn => {
  //Add event listeners
  btn.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target);
    //Depending on button classname, choose which action to implement
    if (btn.className === 'next-btn') {
      //To prevent clicks registered by pushing enter exceeding toShow over numberOfSteps
      toShow = toShow < numberOfSteps ? (toShow += 1) : 1;
    } else if (btn.className === 'prev-btn') {
      toShow -= 1;
    }
    //Reset active displays
    stepsForm
      .querySelectorAll('.step-active')
      .forEach(el => el.classList.remove('step-active'));
    stepsForm
      .querySelectorAll(`.step-${toShow}`)
      .forEach(el => el.classList.add('step-active'));
  });
});
