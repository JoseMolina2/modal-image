const img = document.getElementById('myImg');
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('img01');
const captionText = document.getElementById('caption');
const close = document.getElementById('close');

function showModal(img) {
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

function closeModal() {
  modal.style.display = "none";
}