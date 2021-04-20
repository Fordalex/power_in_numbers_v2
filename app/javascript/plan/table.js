var exerciseFormContainer = document.getElementById('exerciseFormContainer');
var addExerciseButton = document.getElementById('addExerciseButton');
var exerciseCount = 0;

function updateFormInput() {
    console.log('button pressed')
    var timedButton = document.getElementById(`timedButton-${exerciseCount}`);
    var repsButton = document.getElementById(`repsButton-${exerciseCount}`); 
}

function addExerciseRow() {

    console.log('addExerciseRow function');

    exerciseCount++;

    var exerciseForm = `<div>
    <div class="form-group">
        <label>Exercise</label>
        <input type="text" name="exercise-${exerciseCount}">
    </div>
    <div id="timedOrRepsContainer">
        <div class="d-flex justify-content-center my-3">
            <button class="secondary-button" type="button" id="timedbutton-${exerciseCount}">Timed</button>
            <button class="main-button ml-2" type="button" id="repsbutton-${exerciseCount}">Reps</button>
        </div>
    </div>
    <div class="d-flex justify-content-between">
        <div class="form-group">
            <label>Sets</label>
            <input type="number" name="sets-${exerciseCount}">
        </div>
        <div class="form-group ml-2">
            <label>Weight</label>
            <input type="number" name="weight-${exerciseCount}">
        </div>
        <div class="form-group ml-2">
            <label>Unit</label>
            <select name="unit-${exerciseCount}" class="form-control" style="width:90px">
                <option value="kg">KG</option>
                <option value="lb">LB</option>
            </select>
        </div>
    </div>

    <div class="form-group">
        <label>Rest</label>
        <input type="number" name="rest-${exerciseCount}">
    </div>
    <b>Column: ${exerciseCount}</b>
    </div>`;

    exerciseFormContainer.innerHTML = exerciseForm;


    var timedButton = document.getElementById(`timedbutton-${exerciseCount}`);
    var repsButton = document.getElementById(`repsbutton-${exerciseCount}`);

    console.log('working')
    console.log(timedButton, repsButton)

    timedButton.addEventListener('click', updateFormInput);
    repsButton.addEventListener('click', updateFormInput);


}

addExerciseButton.addEventListener('click', addExerciseRow)
