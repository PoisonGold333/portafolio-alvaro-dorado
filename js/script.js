const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.16,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

const profileCard = document.querySelector(".profile-card");

document.addEventListener("mousemove", (event) => {
  if (!profileCard) return;

  const rect = profileCard.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const rotateY = (x / rect.width - 0.5) * 8;
  const rotateX = (y / rect.height - 0.5) * -8;

  profileCard.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

document.addEventListener("mouseleave", () => {
  if (!profileCard) return;

  profileCard.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
});