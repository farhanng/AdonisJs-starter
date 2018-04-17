# Starter AdonisJS

Apa itu Adonis?
Adonis adalah salah satu framework nodeJS, yang sudah banyak orang memakainya. Jadi ini framework sudah banyak yang pakai, so pasti dokumentasi dan cara-cara fixing bug nya sudah banyak bertebaran di [stackoverflow](https://stackoverflow.com/).
Terima kasih stackoverflow :D
Detail tentang [AdonisJS](https://adonisjs.com/docs/4.1/installation)

## Getting Started

Untuk memulai nya bisa di awali dengan membaca doa terlebih dahulu, lalu membaca readme ini hingga tuntas, setelah itu lakukan clone starter ini.
Jangan lupa untuk dicoba, karena jika tak dicoba maka tak say... bisa!
Jangan lupa untuk improve atau menambahkan sesuatu yang memang dirasa harus ada di dalam starter ini!

### Prerequisites

Google translate : Prerequisites => syarat
Syarat nya apa ya?
1. semangat
2. riang
3. bahagia
.
. (Hal - hal yang membuat kalian bahagia dalam coding. Pokoknya GITS - Superfun!)
.
100. Memahami [JavaScript](https://www.w3schools.com/js/default.asp)  atau [ECMAScript](http://es6-features.org)
101. Memahami ORM [Sequelize](http://docs.sequelizejs.com/) atau Query Builder [Knex](http://knexjs.org/#changelog)
101. Memahami konsep Controller, Service, Model
102. Mengerti Database (min. mysql)
103. Tidak mesti menggunakan ARCH - LINUX (*Optional)
104. Membaca dokumentasi [Adonis](https://adonisjs.com/docs/4.1/installation)
105. Meng-install Adonis - CLI untuk memudahkan

### Installing

Point 4 ~ 6 bisa teman-teman skip, jika menggunakan starter ini

1. Install NodeJs & NPM
2. Install Adonis CLI = npm i -g @adonisjs/cli
3. Kalau bingung bisa = adonis --help
4. Menambahkan Model = adonis make:model [nama model]
5. Menambahkan Controller = adonis make:controller [nama controller] setelah itu pilih http-request
6. Menambahkan Middleware = adonis make:middleware [nama middleware] seletah itu pilih both .....

7. Lakukan NPM Install untuk instalasi module-module yang akan digunakan.

8. Jangan lupa configuration .env nya guys, ada dua sample, sample versi Adonis dan sample versi YS

9. Create membuat migration tabel baru = adonis make:migration [nama tabel]

Output = 
✔ create  database/migrations/1502691651527_users_schema.js

10. Membuat tabel di database = adonis migration:run

Output = 
migrate: 1502691651527_users_schema.js
Database migrated successfully in 117 ms

11. Migration status = adonis migration:status

12. Cara menjalankan aplikasi di localhost = adonis serve --dev

13. Cara menjalankan aplikasi di server/production = adonis serve

14. Untuk Controller, Middleware, Model, Service ada di dalam folder app

15. Untuk Routes ada di dalam folder start

## Running the tests

Untuk automated test masih belum ditambahkan.
Kalau ada ide menggunakan test apa boleh di tambahkan. 

### Coding style

Coding style merujuk ke [ECMAScript](http://es6-features.org) ya guys.
Biasakan menggunakan Promise, karena janji-janji politik itu sangat berarti *eeh!

## Deployment

Untuk fitur simple deployment belum ditambahkan ke dalam starter ini.

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management

Selain itu pada starter ini sudah saya tambahkan beberapa module yang akan di gunakan selama proses developing
* [JWT](https://www.npmjs.com/package/jsonwebtoken)
* [MySQL](https://www.npmjs.com/package/mysql)
* [MSSQL](https://www.npmjs.com/package/mssql)
* [PostgresSQL](https://www.npmjs.com/package/pg)
* [KnexJs](http://knexjs.org/#changelog)
* [SequelizeJs](http://docs.sequelizejs.com/)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

Untuk versioning menggunakan semantic versioning

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)
* Di modifikasi oleh **Reza Maskadi** [rezamaskadi@gits.co.id](rezamaskadi@gits.co.id) @ [GITS INDONESIA](http://gits.co.id)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

Lisensi nya darimana ya?
MIT License, all hail Open - Source!!
Untuk detail bisa dilihat di [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Ucapan terima kasih nih, ke siapa ya?
1. [Adonis](https://adonisjs.com/docs/4.1/installation)
2. GITS Indonesia yang selalu mem fasilitasi saya untuk berkembang
3. Mas Sudar sebagai bapak-nya developer GITS Indonesia
4. Semua Developers GITS Indonesia yang selalu saling support
5. Untuk semua kawan-kawan satu divisi Web yang saya banggakan.. cayoo..