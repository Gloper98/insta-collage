onload = (() => {
	let acquire = $;
	let pic ='.pictures';
	/*let pictures = document.getElementsByClassName('pictures');
	console.log([...pictures]);*/
  acquire(pic).draggable({
    addClasses: false
  });

  acquire(pic).draggable({
			opacity: 0.20,
      containment: "#picture-gallery",
    });
})();