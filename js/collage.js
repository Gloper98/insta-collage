onload = (() => {
  $('.pictures').draggable({
    addClasses: false
  });

  $('.pictures').draggable(
    {
      containment: "#picture-gallery",
      opacity: 0.35,
    }
  );
})();