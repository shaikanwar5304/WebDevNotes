sum = 0;
for (let i=0;i<100000000;i++){
 sum+=i;
}
console.log(sum);
//if you run this code in you machine
//one of the logical processor will be >90% capacity and others will perform quite normal
//which resembles the js using the single core i.e single threaded