CREATE TABLE IF NOT EXISTS barang(
      id_barang VARCHAR(255) NOT NULL PRIMARY KEY,
      nama_barang varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS user(
      id_user VARCHAR(255) NOT NULL PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
);