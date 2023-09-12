document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task");
  const button = document.getElementById("log");
  const ul = document.getElementById("ul");
  const p = document.getElementById("wastedTime");
  const pp = document.getElementById("study");

  let time_wasted = 0; // Initialize time_wasted
  let studied = 0; // Initialize studied
  pp.textContent = studied;
  p.textContent = time_wasted;

  function logTime() {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
    const task = taskInput.value;

    if (task && task.trim() !== "") {
      // Check if task is not empty or just whitespace
      const connection = new XMLHttpRequest();

      connection.onreadystatechange = () => {
        if (connection.readyState == 4 && connection.status == 200) {
          const responseJson = JSON.parse(connection.responseText);

    for (let x = 0; x < responseJson.length; x++) {
          const li = document.createElement("li");
          const div1 = document.createElement("div");
          const div1_textContent = (div1.textContent = responseJson[x].task);
          const div2 = document.createElement("div");
          div2.textContent = responseJson[x].log_time;

          if (
            div1_textContent.startsWith("time") ||
            div1_textContent.startsWith("wasted") ||
            div1_textContent.startsWith("movie") ||
            div1_textContent.startsWith("nothing") ||
            div1_textContent.startsWith("eating") ||
            div1_textContent.startsWith("social")
          ) {
            time_wasted = time_wasted + 1;
            p.textContent = time_wasted;

            li.className = "wasted_li";
          } else if (
            div1_textContent.startsWith("study") ||
            div1_textContent.startsWith("project") ||
            div1_textContent.startsWith("work")
          ) {
            studied = studied + 1;
            pp.textContent = studied;
            li.className = "worked_li";
          } else {
            li.className = "li";
          }

          ul.appendChild(li);
          li.appendChild(div1);
          li.appendChild(div2);
        }
          taskInput.textContent = "";
        }
      };

      connection.open(
        "GET",
        "http://localhost/timetracker/api.php?task=" + encodeURIComponent(task),
        true
      ); // Use encodeURIComponent to handle special characters in task
      connection.send();
    }
  }

  // Add a click event listener to the "Log Time" button
  button.addEventListener("click", logTime);

  taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      logTime(); // Trigger the logTime function when "Enter" is pressed
    }
  });

  function onl() {
    const connection = new XMLHttpRequest();
    connection.onreadystatechange = () => {
      if (connection.readyState == 4 && connection.status == 200) {
        const responseJson = JSON.parse(connection.responseText);

        for (let x = 0; x < responseJson.length; x++) {
          const li = document.createElement("li");
          const div1 = document.createElement("div");
          const div1_textContent = (div1.textContent = responseJson[x].task);
          const div2 = document.createElement("div");
          div2.textContent = responseJson[x].log_time;

          if (
            div1_textContent.startsWith("time") ||
            div1_textContent.startsWith("wasted") ||
            div1_textContent.startsWith("movie") ||
            div1_textContent.startsWith("nothing") ||
            div1_textContent.startsWith("eating") ||
            div1_textContent.startsWith("social")
          ) {
            time_wasted = time_wasted + 1;
            p.textContent = time_wasted;
            li.className = "wasted_li";
          } else if (
            div1_textContent.startsWith("study") ||
            div1_textContent.startsWith("project") ||
            div1_textContent.startsWith("work")
          ) {
            studied = studied + 1;
            pp.textContent = studied;
            li.className = "worked_li";
          } else {
            li.className = "li";
          }

          ul.appendChild(li);
          li.appendChild(div1);
          li.appendChild(div2);
        }
      }
    };
    connection.open("GET", "http://localhost/timetracker/search.php", true);
    connection.send();
  }

  onl();
});

function reset() {
  const treu = confirm("Are You Sure to Delete the Whole Week data ?");
  if (treu) {
    const connection = new XMLHttpRequest();
    connection.onreadystatechange = () => {
      if (connection.readyState == 4 && connection.status == 200) {
        location.reload();
      }
    };
    connection.open("GET", "http://localhost/timetracker/delete.php", true);
    connection.send();
  }
}

function day() {
  const treu = confirm("Are You Sure to Delete the Today data ?");
  if (treu) {
    const connection = new XMLHttpRequest();
    connection.onreadystatechange = () => {
      if (connection.readyState == 4 && connection.status == 200) {
        location.reload();
      }
    };
    connection.open("GET", "http://localhost/timetracker/deleteday.php", true);
    connection.send();
  }
}


function undo (){
  const treu = confirm("Are You Sure to Undo ?");
  if (treu) {
    const connection = new XMLHttpRequest();
    connection.onreadystatechange = () => {
      if (connection.readyState == 4 && connection.status == 200) {
        location.reload();
      }
    };
    connection.open("GET", "http://localhost/timetracker/undo.php", true);
    connection.send();
  } 
}
// function weeki(weekid) {
//   const connection = new XMLHttpRequest();
//   connection.onreadystatechange = () => {
//     if (connection.readyState == 4 && connection.status == 200) {
//       const responseJson = JSON.parse(connection.responseText);
//       for (let x = 0; x < responseJson.length; x++) {
//         const li = document.createElement("li");
//         const div1 = document.createElement("div");
//         const div1_textContent = (div1.textContent = responseJson[x].task);
//         const div2 = document.createElement("div");
//         div2.textContent = responseJson[x].log_time;

//         if (
//           div1_textContent.startsWith("time") ||
//           div1_textContent.startsWith("wasted") ||
//           div1_textContent.startsWith("movie") ||
//           div1_textContent.startsWith("nothing") ||
//           div1_textContent.startsWith("eating") ||
//           div1_textContent.startsWith("social")
//         ) {
//           time_wasted = time_wasted + 1;
//           p.textContent = time_wasted;
//           li.className = "wasted_li";
//         } else if (
//           div1_textContent.startsWith("study") ||
//           div1_textContent.startsWith("project") ||
//           div1_textContent.startsWith("work")
//         ) {
//           studied = studied + 1;
//           pp.textContent = studied;
//           li.className = "worked_li";
//         } else {
//           li.className = "li";
//         }

//         ul.appendChild(li);
//         li.appendChild(div1);
//         li.appendChild(div2);
//       }
//       for (let x = 0; x < responseJson.length; x++) {
//         const li = document.createElement("li");
//         const div1 = document.createElement("div");
//         const div1_textContent = (div1.textContent = responseJson[x].task);
//         const div2 = document.createElement("div");
//         div2.textContent = responseJson[x].log_time;

//         if (
//           div1_textContent.startsWith("time") ||
//           div1_textContent.startsWith("wasted") ||
//           div1_textContent.startsWith("movie") ||
//           div1_textContent.startsWith("nothing") ||
//           div1_textContent.startsWith("eating") ||
//           div1_textContent.startsWith("social")
//         ) {
//           li.className = "wasted_li";
//         } else if (
//           div1_textContent.startsWith("study") ||
//           div1_textContent.startsWith("project") ||
//           div1_textContent.startsWith("work")
//         ) {
//           li.className = "worked_li";
//         } else {
//           li.className = "li";
//         }

//         ul.appendChild(li);
//         li.appendChild(div1);
//         li.appendChild(div2);
//       }
//     }
//   };
//   connection.open(
//     "GET",
//     "http://localhost/timetracker/searchweek.php?weekid=" +
//       encodeURIComponent(weekid),
//     true
//   );
//   connection.send();
// }
