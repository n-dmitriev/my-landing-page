$(function () {
	const $div = document.querySelector('#scriptGallery')
	for (let i = 1; i < 26; i++) {
		let box = document.createElement('div')
		box.classList.add('text-center', 'col-12', 'col-sm-4', 'col-md-3', 'col-xl-2', 'thumb')
		box.innerHTML = `<a data-fancybox="gallery" href="img/gallery/Art${i}.jpg"><img class="img-fluid" src="img/gallery/Art${i}.jpg"></a>`
		$div.insertAdjacentElement('afterbegin', box)
	}
})
// $(function () {
// 	const $loader = document.querySelector('#loader')
// 	const $div = document.querySelector('#scriptGallery')
// 	$loader.classList.remove('hide')
// 	$div.classList.add('hide')
// 	for (let i = 1; i < 26; i++) {
// 		let $img = new Image()
// 		$img.src = `img/gallery/Art${i}.jpg`
// 		$img.onload = () => {
// 			let box = document.createElement('div')
// 			box.classList.add('text-center', 'col-12', 'col-sm-4', 'col-md-3', 'col-xl-2', 'thumb')
// 			box.innerHTML = `<a data-fancybox="gallery" href="${$img.src}"><img class="img-fluid" src="${$img.src}"></a>`
// 			$div.insertAdjacentElement('afterbegin', box)
// 		}
// 	}
// })
