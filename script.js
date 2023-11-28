document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const newActivityButton = document.getElementById("newActivityButton");
    const moreInfoButton = document.getElementById("moreInfoButton");
    const activityDetails = document.getElementById("activityDetails");

    startButton.addEventListener("click", getRandomActivity);
    newActivityButton.addEventListener("click", getRandomActivity);
    moreInfoButton.addEventListener("click", searchOnGoogle);

    function getRandomActivity() {
        fetch("http://www.boredapi.com/api/activity")
            .then(response => response.json())
            .then(data => {
                displayActivity(data);
                hideStartButton();
            });
    }

    function displayActivity(activity) {
        activityDetails.innerHTML = `
            <p><strong>Activity:</strong> ${activity.activity}</p>
            <p><strong>Type:</strong> ${activity.type}</p>
            <p><strong>Participants:</strong> ${activity.participants}</p>
            <p><strong>Link:</strong> <a href="${activity.link}" target="_blank">${activity.link}</a></p>
        `;
    }

    function hideStartButton() {
        startButton.style.display = "none";
    }

    function searchOnGoogle() {
        const activity = activityDetails.innerText;
        window.open(`https://www.google.com/search?q=${encodeURIComponent(activity)}`, "_blank");
    }
});
