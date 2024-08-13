//rank validation
//certificate verification
//seat allotment
currentStatus=50
function clgSeatAllotment(rank,n){

    rankValidation(rank).then((rsp)=>{
        console.log(rsp);
        return certificateValidation(n)
    }).then((rsp)=>{
        console.log(rsp);
        return seatAllotment(currentStatus);        
    }).then((rsp)=>{
        console.log(rsp);
        
    }).catch((rsp)=>{//catches any rejection in the flow
        console.log(rsp)
    })
}
function rankValidation(rank){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if (rank <= 100) {
              res("Rank is Valid");
            }
            rej("Invalid Rank");
        },1000)
    })
}
function certificateValidation(n){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if (n >=5) {
              res("Successful certificate verification");
            }
            rej("certificate verification unsuccessful");
        },1500)
    })
}
function seatAllotment(n){
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (n <100) {
          res("your seat has been alloted");
          console.log("congrats!!!")
        }
        rej("unsuccessful !seats already booked");
        console.log("keep moving forward!!!");
      }, 1000);
    });
}

//clgSeatAllotment(880,7)
//Invalid Rank

// clgSeatAllotment(88,3)
//Rank is Valid
//certificate verification unsuccessful

//clgSeatAllotment(65,7)
// Rank is Valid
// Successful certificate verification
// congrats!!!
// keep moving forward!!!
// your seat has been alloted