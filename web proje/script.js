// Simüle edilmiş araç verileri
const carData = [
  { id: 1, name: 'Audi A4', price: 100 },
  { id: 2, name: 'BMW 3 Series', price: 120 },
  { id: 3, name: 'Mercedes C-Class', price: 110 },
  // Diğer araçlar buraya eklenebilir
];

// Araç listesini oluştur
function renderCarList() {
  const carListSection = document.getElementById('car-list');
  carData.forEach(car => {
    const option = document.createElement('option');
    option.value = car.id;
    option.text = `${car.name} - ${car.price}tl`;
    document.getElementById('carSelect').appendChild(option);
  });
}

// Rezervasyon yap
function makeReservation() {
  const carSelect = document.getElementById('carSelect');
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;

  const selectedCarId = carSelect.value;
  const selectedCar = carData.find(car => car.id == selectedCarId);

  if (selectedCar && startDate && endDate) {
    const totalPrice = calculateTotalPrice(startDate, endDate, selectedCar.price);
    alert(`Rezervasyon yapıldı!\nToplam Tutar: ${totalPrice}tl`);
  } else {
    alert('Lütfen tüm alanları doldurun.');
  }
}

// Toplam fiyatı hesapla
function calculateTotalPrice(startDate, endDate, dailyPrice) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const days = Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;
  return days * dailyPrice;
}

// Sayfa yüklendiğinde araç listesini oluştur
document.addEventListener('DOMContentLoaded', () => {
  renderCarList();
});