const { readFile } = require('fs')

//console.log('start')

//readFile('./content/first.txt','utf8',(err,result)=>{
//    if(err){
//        console.log(err)
//        return
//    }
//    const first = result
//    readFile('./content/second.txt','utf8',(err,result)=>{
//        if(err){
//            console.log(err)
//            return
//        }
//        const second = result
//    })
//})

const getText = (path) =>{
    return new Promise((resolve,reject) => {
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }

            })
        })
}

const start = async () => {
    try{
        const first = await getText('./content/first.txt')
        const second = await getText('./content/second.txt')
        console.log(first)
    } catch (error){
        console.log(error)
    }
}
start()