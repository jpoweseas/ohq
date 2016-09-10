require(['https://cdn.firebase.com/js/client/2.4.2/firebase.js'], function (firebase) {});

var temp = rootRef.child("filler");

$(document).ready(function () {
	temp.set({title: "", text: ""});
	console.log("temp set");
});

rootRef.limitToLast(50).on("value", function (snapshot) {
  var data = snapshot.val();
  console.log(data.name);
  var name = data.name;
  var issue = data.issue;
  var time = Math.floor((Date.now() - data.timestamp) / 60000);
  var category = data.category;
  var rowElem = $("<tr>");
  var nameElem = $("<td>");
  var categoryElem = $("<td>");
  var issueElem = $("<td>");
  var timeElem = $("<td>");
  var doneButton = $("<button type=\"button\" class=\"btn btn-default\">");
  var helpButton = $("<button type=\"button\" class=\"btn btn-default\">");
  doneButton.append("<img src=source.png width=\"20px\"/>");
  helpButton.append("<img src=source.png width=\"20px\"/>");
  nameElem.text(name);
  categoryElem.text(category);
  issueElem.text(issue);
  timeElem.text(time + " minutes");
  rowElem.append(nameElem);
  rowElem.append(categoryElem);
  rowElem.append(issueElem);
  rowElem.append(timeElem);
  rowElem.append(doneButton);
  rowElem.append(helpButton);
  if (time) {
    $("#queueElem").last().append(rowElem);
  }
});

rootRef.limitToLast(50).on("child_added", function (snapshot) {
  var data = snapshot.val();
  console.log(data.name);
  var name = data.name;
  var issue = data.issue;
  var time = Math.floor((Date.now() - data.timestamp) / 60000);
  var category = data.category;
  var rowElem = $("<tr>");
  var nameElem = $("<td>");
  var categoryElem = $("<td>");
  var issueElem = $("<td>");
  var timeElem = $("<td>");
  var doneButton = $("<button type=\"button\" class=\"btn btn-default\">");
  var helpButton = $("<button type=\"button\" class=\"btn btn-default\">");
  doneButton.append("<img src=source.png width=\"20px\"/>");
  helpButton.append("<img src=source.png width=\"20px\"/>");
  nameElem.text(name);
  categoryElem.text(category);
  issueElem.text(issue);
  timeElem.text(time + " minutes");
  rowElem.append(nameElem);
  rowElem.append(categoryElem);
  rowElem.append(issueElem);
  rowElem.append(timeElem);
  rowElem.append(doneButton);
  rowElem.append(helpButton);
  if (time) {
    $("#queueElem").last().append(rowElem);
  }
});

var nameField = $("#nameInput");
var issueField = $("#issueInput");
var otherDescrip = $("#otherDescrip");

$("#issueForm").on("submit", function (e) {
  var name = nameField.val();
  var issue = issueField.val();
  var category = otherDescrip.val();
  rootRef.push({name: name, issue: issue, category: category, timestamp: Date.now()});
  nameField.val('');
  issueField.val('');
  category.val('');
  technical.prop('checked', false);
  conceptual.prop('checked', false);
  other.prop('checked', false);
  e.preventDefault();
});

 $("#button").click(function() {
      $("#issueForm").submit();

    });
