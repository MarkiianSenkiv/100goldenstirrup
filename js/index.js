$(".js-faq").on("click", function (e) {
  $(this).parents(".faq__item").toggleClass("active");
});

jQuery(function ($) {
  var popup_once = sessionStorage.getItem("popupOnce") !== "true";
  var popup_time = localStorage.getItem("popupTime") || 0;
  var popup_disable = localStorage.getItem("popupDisable") === "true";
  var now = Math.floor(Date.now() / 1000);
  var scrollTimer;
  var popupOpened = false;

  function showPopup() {
    if (!popupOpened) {
      popupOpened = true;
      $(".popup").fadeIn(1000);
      $("html").addClass("no-scroll");
      sessionStorage.setItem("popupOnce", "true");
      localStorage.setItem("popupTime", now);
    }
  }

  if (!popup_disable && popup_once && now - popup_time > 180) {
    $(window).one("scroll", function () {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(showPopup, 1000);
    });
  }

  $(".popup__clone").click(function () {
    $(".popup").fadeOut(1000);
    $("html").removeClass("no-scroll");
  });
});

function onSubmitPopupHandler(el) {
  jQuery(".popup").fadeOut(300);
  localStorage.setItem("popupDisable", "true");
  iqbClickHandler(el);
  return false;
}
