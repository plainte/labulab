
document.addEventListener("DOMContentLoaded", () => {
  const isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i);
  if(isMobile)  {
    $(".grid__item").removeClass('one-half');
    $(".grid__item").addClass('one-whole');
  }
});
