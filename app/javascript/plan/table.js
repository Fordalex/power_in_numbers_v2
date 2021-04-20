console.log('connected')

var exerciseFormContainer = document.getElementById("exerciseFormContainer");
var addExerciseButtonTimed = document.getElementById("addExerciseButtonTimed");
var addExerciseButtonReps = document.getElementById("addExerciseButtonReps");
var exerciseCount = 0;

function addExerciseRow() {
    console.log('button pressed')

  exerciseCount++;

  var exerciseForm = `<div>
        <div class="form-group">
            <label>Exercise</label>
            <input type="text" name="exercise-${exerciseCount}">
        </div>
        <div class="form-group">
            <label>Timed</label>
            <input type="text" name="timed-or-reps-${exerciseCount}">
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
        <hr/>
        </div>`;

  exerciseFormContainer.innerHTML = exerciseForm;

  var timedButton = document.getElementById(`timedbutton-${exerciseCount}`);
  var repsButton = document.getElementById(`repsbutton-${exerciseCount}`);

  timedButton.addEventListener("onclick", updateFormInput());
  repsButton.addEventListener("onclick", updateFormInput());
}

function updateFormInput() {
  var timedButton = document.getElementById(`timedButton-${exerciseCount}`);
  var repsButton = document.getElementById(`repsButton-${exerciseCount}`);
}

addExerciseButtonReps.addEventListener("onclick", addExerciseRow());
addExerciseButtonTimed.addEventListener("onclick", addExerciseRow());
