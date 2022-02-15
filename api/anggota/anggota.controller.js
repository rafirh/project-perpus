const {
    add,
    get,
    getId,
    update,
    del
} = require('./anggota.service')
module.exports = {
    controllerAdd:(req,res)=>{
        const data_anggota = {
            kd_anggota : req.body.kd_anggota,
            nm_anggota : req.body.nama,
            alamat : req.body.alamat,
            tlpn : req.body.tlpn
        }
        add(data_anggota,(err,results)=>{
            if(err){
                console.log(err);
                return
            }else{
                return res.status(200).json({
                    success : 1,
                    data : results,
                    data_anggota
                })
            }
        })
    },
    controllerGet:(req,res)=>{
        get((err,results)=>{
            if(err){
                console.log(err)
                return
            }else{
                return res.json({
                    success:1,
                    data:results
                })
            }
        })
    },
    controllerGetId:(req,res)=>{
        const body = req.body.kd_anggota
        getId(body,(err,results)=>{
            if(err){
                console.log(err)
                return
            }else{
                return res.json({
                    success:1,
                    data:results
                })
            }
        })
    },
    controllerUpdate:(req,res)=>{
        const data_anggota = {
            kd_anggota : req.body.kd_anggota,
            nm_anggota: req.body.nama,
            alamat : req.body.alamat,
            tlpn : req.body.tlpn
        }
        
        update(data_anggota,(err,results)=>{
            if(err){
                console.log(err)
                return
            }else if(!results){
                return res.json({
                    success : 0,
                    message : "Not Found"
                })
            }else{
                return res.json({
                    success:1,
                    data:results
                })
            }
        })
    },
    controllerDelete:(req,res)=>{
        const body = req.body.kd_anggota
        del(body,(err,results)=>{
            if(err){
                console.log(err)
                return
            }else if(!results){
                return res.json({
                    success:0,
                    message:"Not Found"
                })
            }else{
                return res.json({
                    success:1,
                    message:"Delete Success"
                })
            }
        })
    }
}
