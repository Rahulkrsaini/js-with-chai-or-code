// for(let i = 0; i <=10; i ++){
//     const element =i ;
//     console.log(element);
// }

// for(let i = 0; i <=10; i ++){
//     const element =i ;
//     if(i == 5){
//         console.log("next number is ")
//     }
//     console.log(element);
// }

for(let i=1; i<=10;i++){
    console.log(`outer loop value : ${i}`);
    for(let j=1; j<=10;j++){
        // console.log(`Inner loop value ${j} and inner loop ${i}`)
        console.log(i + '*' + j +'=' + i*j);
    }
}