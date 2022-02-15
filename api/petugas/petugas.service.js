const db = require('../../config/connection');
module.exports = {
    add:(data,callBack)=>{
        db.query(`insert into tb_petugas set ?`,
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
        db.query(`select * from tb_petugas`,
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
        db.query(`select * from tb_petugas where kd_petugas = ?`,
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
        db.query(`select * from tb_petugas where kd_petugas=?`,
        [data.kd_petugas],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                db.query(`update tb_petugas set ? where kd_petugas = ?`,
                [
                    data,
                    data.kd_petugas
                ]);
                return callBack(null,results[0])
            }
        })
    },
 
    del:(data,callBack)=>{
        db.query(`select kd_petugas from tb_petugas where kd_petugas = ?`,
        [data],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                db.query(`delete from tb_petugas where kd_petugas = ?`,
                [data]);
                return callBack(null,results[0])
            }
        })
    },
 
    serviceGetUserByEmail: (email,callBack)=>{ 
        db.query(
            `select * from tb_petugas where email=? `,
            [email],(err,results)=>{
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null,results[0])
                }
            }
        )
    }
}
