const db = require('../../config/connection');
module.exports = {
    add:(data,callBack)=>{
        db.query(`insert into tb_buku set ?`,
        [data],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                return callBack(null, results)
            }
        })
    },
 
    get:(callBack)=>{
        db.query(`select * from tb_buku`,
        [],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                return callBack(null, results)
            }
        })
    },
 
    getId:(data,callBack)=>{
        db.query(`select * from tb_buku where kd_buku = ?`,
        [data],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                return callBack(null,results)
            }
        })
    },
 
    update:(data,callBack)=>{
        db.query(`select * from tb_buku where kd_buku=?`,
        [data.kd_buku],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                db.query(`update tb_buku set ? where kd_buku = ?`,
                [
                    data,
                    data.kd_buku
                ]);
                return callBack(null,results[0])
            }
        })
    },
 
    del:(data,callBack)=>{
        db.query(`select kd_buku from tb_buku where kd_buku = ?`,
        [data],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                db.query(`delete from tb_buku where kd_buku = ?`,
                [data]);
                return callBack(null,results[0])
            }
        })
    }
}