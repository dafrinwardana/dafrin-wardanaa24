// Mendapatkan elemen-elemen yang dibutuhkan
const productForm = document.getElementById('productForm');
const productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];

// Fungsi untuk menambahkan produk ke dalam tabel
function addProduct(event) {
    event.preventDefault();  // Mencegah form untuk melakukan refresh otomatis

    // Mengambil nilai dari input form
    const productName = document.getElementById('productName').value.trim();
    const productDescription = document.getElementById('productDescription').value.trim();
    const productPrice = document.getElementById('productPrice').value.trim();
    const productImage = document.getElementById('productImage').value.trim();

    // Validasi form input
    if (productName && productDescription && productPrice && productImage) {
        // Membuat baris baru untuk tabel
        const row = productTable.insertRow();

        // Menambahkan data produk ke dalam kolom tabel
        const cellImage = row.insertCell(0);
        const cellName = row.insertCell(1);
        const cellDescription = row.insertCell(2);
        const cellPrice = row.insertCell(3);
        const cellActions = row.insertCell(4);

        // Menambahkan gambar produk
        const imgElement = document.createElement('img');
        imgElement.src = productImage;
        cellImage.appendChild(imgElement);

        // Menambahkan nama produk
        cellName.textContent = productName;

        // Menambahkan deskripsi produk
        cellDescription.textContent = productDescription;

        // Menambahkan harga produk
        cellPrice.textContent = `Rp ${productPrice}`;

        // Menambahkan tombol hapus
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.classList.add('delete');
        deleteButton.onclick = function() {
            row.remove();
        };

        cellActions.appendChild(deleteButton);

        // Mengosongkan form setelah menambah produk
        productForm.reset();
    } else {
        alert('Semua kolom harus diisi!');
    }
}

// Menambahkan event listener untuk menangani form submit
productForm.addEventListener('submit', addProduct);
