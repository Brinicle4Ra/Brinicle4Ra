Sebutkan dan jelaskan minimal 3 struktur data (generic) yang Anda ketahui ?

    1. Array, kumpulan data dengan tipe data yang sama dan memiliki index.
    2. Queue, kumpulan data yang mana penghapusan data dilakukan pada index pertama dan penambahan data pada index terakhir.
    3. Stack, kumpulan data yang mana penghapusan dan penambahan data hanya dapat dilakukan pada index terakhir.


Apa perbedaan abstract class dengan interface ?
    
    Abstract class merupakan deklarasi method dan implementasi secara langsung.
    Interface merupakan deklarasi method tanpa implementasi secara langsung.


Jelaskan perbedaan antara encrypt, encode dan hash. Di antara ketiga hal tersebut yang manakah yang paling ideal untuk menyimpan password ?

    Encrypt, pengubahan data menjadi kode menggunakan algorithm key, yang mana ketika melakukan Decryption diperlukan algorithm key lagi.
    Encode, pengubahan sebuah data dengan sebuah algorithm menjadi sebuah code agar dapat dipahami device penerima.
    Hash, pengubahan data menjadi String unik dengan panjang tertentu menggunakan hash algorithm yang dapat berubah sesuai dengan data masukan.

    Hash, karena dengan metode ini perbedaan sedikit apapun pada inputan pengguna dapat membuat String hasil hashing berubah drastis(unik), sehingga dapat terlihat jelas perbedaan antara password pengguna yang telah tersimpan di database dengan inputan yang baru dilakukan.


Apa yang Anda ketahui tentang Inversion of Control (IoC) / Dependency Injection (DI) ?  *
    
    DI adalah metode dimana class(interface) diinject pada class(implements) lain, sehingga jika dimasukkan ke dalam parameter pada sebuah class(di constructor nya) maka classnya dapat menjadi dinamis (tidak perlu mengubah class lagi jika ingin melakukan perubahan variable di dalamnya karena sudah diinject cengan class interface).

Query 1
    
    SELECT nik, nama
    FROM table
    ORDER BY (total_pembelian_2020 + total_pembelian_2021) DESC
    LIMIT 1 OFFSET 2;


Query 2

    SELECT SUM(total_pembelian_2021)
    FROM table
    WHERE pulau <> "Jawa";