import $ from 'jquery';

import {
  indexTasks,
  postTask,
  deleteTask,
  markTaskComplete,
  markTaskActive
} from "./requests.js";

function updateTasksList() {
  indexTasks(function (response) {
    var htmlString = response.tasks.map(function(task) {
      return "<div class='col-12 mb-3 p-2 border rounded task' data-id='" + task.id + "'> \
      <div class='form-check'> \
        <input class='form-check-input task-checkbox' type='checkbox' " + (task.completed ? 'checked' : '') + "> \
        <label class='form-check-label'>" + task.content + "</label>\
        <button class='btn btn-danger btn-sm delete-btn float-end'>Supprimer</button>\
      </div>\
      </div>";
    });

    $("#tasks").html(htmlString);
  });
}

// Use $(document).ready() to execute code when DOM is ready
$(document).ready(function () {
  updateTasksList();
  
  $("#addTaskBtn").on("click", function () {
    console.log("Button clicked");
    var newTaskContent = $("#newTask").val();
  
    if (newTaskContent.trim() !== "") {
      postTask(newTaskContent, function () {
        updateTasksList();
        $("#newTask").val("");
      });
    }
  });
  
<<<<<<< HEAD
  $(document).on("click", ".delete-btn", function (){
    var taskId = $(this).closest('.task').data("id");
=======
  $("task").on("click", ".task", function (){
    var taskId = $(this).data("id");
>>>>>>> refs/remotes/origin/main
    deleteTask(taskId,function(){
      updateTasksList();
    } )
  });
  
<<<<<<< HEAD
  $(document).on("change", ".task-checkbox", function () {
=======
  $("#tasks").on("change", ".task-checkbox", function () {
>>>>>>> refs/remotes/origin/main
    var taskId = $(this).closest('.task').data("id");
  
    var isCompleted = $(this).prop("checked");
  
    if (isCompleted) {
      markTaskComplete(taskId, function () {
        updateTasksList();
      });
    } else {
      markTaskActive(taskId, function () {
        updateTasksList();
      });
    }
  });
});
