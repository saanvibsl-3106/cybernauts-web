// Explore Button
document.getElementById("Explore_Button").addEventListener("click", function() {
  const exploreButton = document.getElementById("Explore_Button");
  const extraProjects = document.querySelectorAll("#extra_project1, #extra_project2");
  const isShowing = exploreButton.classList.toggle("showing");

  extraProjects.forEach(project => {
    project.style.display = isShowing ? "block" : "none";
  });

  const moreIconTemplate = `
    <span class="button__icon-wrapper">
      <svg width="10" class="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
        <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
      </svg>
      <svg class="button__icon-svg button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
        <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
      </svg>
    </span>
  `;

  exploreButton.innerHTML = `${moreIconTemplate} ${isShowing ? "Show less" : "Explore All"}`;
});

/*----------------------------------------------------------------------------------------------------------------------------- */


















/*----------------------------------------------------------------------------------------------------------------------------- */
/* Animation of Amazing-Crazy-Cool */

function amazingCrazyCool() { // Recursive call for continuous loop
  amazing();
  setTimeout(crazy, 550); // Delay next function call by 1 second
}

function amazing() {
  document.getElementById("Animation-a-c-c-a").innerHTML = 'Amazing';
}

function crazy() {
  document.getElementById("Animation-a-c-c-a").innerHTML = 'Crazy';
  setTimeout(cool, 550); // Delay next function call by 1 second
}

function cool() {
  document.getElementById("Animation-a-c-c-a").innerHTML = 'Cool';
  setTimeout(awesome, 550); // Delay next function call by 1 second
}

function awesome() {
  document.getElementById("Animation-a-c-c-a").innerHTML = 'Awesome';
  setTimeout(amazingCrazyCool, 550); // Call back to start over
}

// Call the animation function once to initiate the loop
amazingCrazyCool();

/* Animation of Amazing-Crazy-Cool */
/*----------------------------------------------------------------------------------------------------------------------------- */
