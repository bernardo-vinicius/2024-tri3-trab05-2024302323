document.querySelectorAll('main img').forEach(img => {
  img.addEventListener('click', () => {
    const fotos = document.querySelector('.modal-fotos')
    fotos.showModal()
  })
})

const modalGaleriasImg = document.querySelector('.modal-fotos')
const galleryBtClose = modalGaleriasImg.querySelector('.bt-close')

galleryBtClose.addEventListener('click', () => {
  modalGaleriasImg.close()
})