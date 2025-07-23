function scrollToBio() {
  document.getElementById('bio').scrollIntoView({ behavior: 'smooth' });
}
function scrollToBio() {
  document.getElementById("bio").scrollIntoView({ behavior: "smooth" });
}

// Show button after scrolling 300px
window.onscroll = function () {
  const btn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function addPledge() {
  const nameInput = document.getElementById("pledgeName");
  const name = nameInput.value.trim();
  const wall = document.getElementById("gratitudeWall");
  const diya = document.getElementById("diyaAnimation");

  if (name !== "") {
    // Add to wall
    const listItem = document.createElement("li");
    listItem.textContent = `🕯️ ${name} has pledged`;
    wall.appendChild(listItem);

    // Show diya
    diya.innerHTML = "🪔 Thank you for your pledge!";
    diya.style.display = "block";

    // Clear input
    nameInput.value = "";
  } else {
    alert("Please enter your name.");
  }
}
const music = document.getElementById("bgMusic");

// Play music on first user interaction
function startMusicOnce() {
  music.play();
  document.removeEventListener("click", startMusicOnce);
  document.removeEventListener("scroll", startMusicOnce);
  document.removeEventListener("mousemove", startMusicOnce);
}
document.addEventListener("click", startMusicOnce);
document.addEventListener("scroll", startMusicOnce);
document.addEventListener("mousemove", startMusicOnce);




