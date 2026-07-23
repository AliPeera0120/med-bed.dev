/* MedBed — site interactions (vanilla JS, no dependencies) */
(function () {
  "use strict";

  /* ---- mobile menu ---- */
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.querySelector(".mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---- scroll reveal ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- current year in footer ---- */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- contact form: preselect inquiry type from ?type= and handle submit ---- */
  var params = new URLSearchParams(window.location.search);
  var typeParam = params.get("type");
  var inquiry = document.getElementById("inquiry");
  if (inquiry && typeParam) {
    Array.prototype.forEach.call(inquiry.options, function (opt) {
      if (opt.value.toLowerCase() === typeParam.toLowerCase()) inquiry.value = opt.value;
    });
  }

  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (ev) {
      // No backend wired yet — show a friendly success state.
      // To go live, set the form's action to your email/Formspree endpoint and remove preventDefault.
      if (form.getAttribute("data-live") !== "true") {
        ev.preventDefault();
        if (!form.checkValidity()) { form.reportValidity(); return; }
        var ok = document.getElementById("form-success");
        form.style.display = "none";
        if (ok) { ok.classList.add("show"); ok.setAttribute("tabindex", "-1"); ok.focus(); }
      }
    });
  }
})();
