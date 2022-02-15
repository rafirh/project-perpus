const { add, get, getId, update, del } = require("./pinjam.service");
module.exports = {
 controllerAdd: (req, res) => {
   var now = new Date();
   var jsonDate = now.toJSON();
   var then = new Date(jsonDate);
   // console.log(now);
   var durasi = req.body.durasi;
   var kembali = new Date(
     now.getFullYear(),
     now.getMonth(),
     then.getDate() + durasi,
     now.getHours(),
     now.getMinutes(),
     now.getSeconds()
   );
   // console.log(kembali);
   // console.log(now.getUTCDate());
   data_pinjam = {
     no_pinjam: req.body.no_pinjam,
     kd_buku: req.body.kd_buku,
     kd_anggota: req.body.kd_anggota,
     kd_petugas: req.body.kd_petugas,
     tgl_pinjam: then,
     tgl_balik: kembali,
   };
   // console.log(data_pinjam);
   add(data_pinjam, (err, results) => {
     if (err) {
       if (err === "BNF") {
         // console.log("tidak ada");
         return res.json({
           message: "Book Not Found",
         });
       }
       if (err === "Habis") {
         // console.log("tidak ada");
         return res.json({
           message: "Book All Over",
         });
       }
       if (err === "ANF") {
         // console.log("tidak ada");
         return res.json({
           message: "Members Not Found",
         });
       }
       if (err === "PNF") {
         // console.log("tidak ada");
         return res.json({
           message: "Employee Not Found",
         });
       }
       console.log(err);
       return;
     } else {
       return res.json({
         success: 1,
         data: results,
       });
     }
   });
 },
 
 controllerGet: (req, res) => {
   get((err, results) => {
     if (err) {
       console.log(err);
       return;
     } else {
       return res.json({
         success: 1,
         data: results,
       });
     }
   });
 },
 
 controllerGetId: (req, res) => {
   const body = req.body.no_pinjam;
   getId(body, (err, results) => {
     if (err) {
       console.log(err);
       return;
     } else if (!results) {
       return res.json({
         success: 0,
         message: "Not Found",
       });
     } else {
       return res.json({
         success: 1,
         data: results,
       });
     }
   });
 },
 
 controllerUpdate: (req, res) => {
   const data_pinjam = {
     kd_pinjam: req.body.kd_pinjam,
     nm_pinjam: req.body.nm_pinjam,
     jabatan: req.body.jabatan,
     tlpn_pinjam: req.body.tlpn_pinjam,
   };
 
   update(data_pinjam, (err, results) => {
     if (err) {
       console.log(err);
       return;
     } else if (!results) {
       return res.json({
         success: 0,
         message: "Not Found",
       });
     } else {
       return res.json({
         success: 1,
         data: results,
       });
     }
   });
 },
 
 controllerDelete: (req, res) => {
   const body = {
     no_pinjam: req.body.no_pinjam,
     // stok: req.body.stok,
     kd_buku: req.body.kd_buku,
   };
   del(body, (err, results) => {
     if (err) {
       console.log(err);
       return;
     } else if (!results) {
       return res.json({
         success: 0,
         message: "Not Found",
       });
     } else {
       return res.json({
         success: 1,
         message: "Delete Success",
       });
     }
   });
 },
};
