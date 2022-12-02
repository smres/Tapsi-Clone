const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", (e) => {
  console.log("clicked");
  navbar.classList.toggle("nav__expanded");
});

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    console.log(tab.dataset.tabTarget);
    const targetTabContent = document.querySelector(
      `#${tab.dataset.tabTarget}`
    );

    // REMOVE PREVIOUS ACTIVED CLASSES
    tabs.forEach((tab1) => tab1.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    // ADD NEW ACTIVE CLASSES
    tab.classList.add("active");
    targetTabContent.classList.add("active");
  });
});

const accordionHeaders = document.querySelectorAll(".accordion__header");
const accordion = document.querySelector(".accordion");
accordionHeaders.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.parentElement);
    e.target.parentElement.classList.toggle("accordion__expanded");
  });
});
