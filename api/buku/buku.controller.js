const {
    add,
    get,
    getId,
    update,
    del
} = require('./buku.service')
module.exports = {
    controllerAdd:(req,res)=>{
        data_buku = {
            kd_buku : req.body.kd_buku,
            nm_buku : req.body.nm_buku,
            pengarang    : req.body.pengarang,
            penerbit : req.body.penerbit,
            stok : req.body.stok
        }
        add(data_buku,(err,results)=>{
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
        const body = req.body.kd_buku
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
        data_buku = {
            kd_buku : req.body.kd_buku,
            nm_buku : req.body.nm_buku,
            pengarang    : req.body.pengarang,
            penerbit : req.body.penerbit,
            stok : req.body.stok
        }
        
        update(data_buku,(err,results)=>{
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
        const body = req.body.kd_petugas
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
