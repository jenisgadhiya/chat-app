const generateMessage = (username, text) => {
    return {
        username,
        text,
        createdAt: new Date().getTime()
    }
}

const generateLocationMessage = (username, url) => {
    return {
        username,
        url,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}




// const genratemessage=(username,text)=>{

//     // const d=new Date()
//     // var h=d.getHours()
//     // var med=''
//     // if(h>12){
//     //     h=h-12
//     //     med='pm'
//     // }else{
//     //     med='am'
//     // }
//     // if(h<10){h='0'+h}
//     // var m=d.getMinutes()
//     // if(m<10){m='0'+m}
//     // const t=h+':'+m+' '+med
//     return {
//         username,
//         text,
//         createdAt:new Date().getTime()
//     }
// }

// const locationmessage=(username,url)=>{
//     return {
//         username,
//         url,
//         createdAt:new Date().getTime()
//     }
// }

// module.exports={
//     genratemessage,
//     locationmessage
// }