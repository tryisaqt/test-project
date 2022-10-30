// let userinput = prompt("sheiyvanet ricxvi");
// let number = 4
// let counter = 0;

// while(userinput != number){
//     userinput = prompt("sheiyvanet ricxvi");
//     counter++; 
       
// }
// 1) გამრავლების ტაბულა 
// for(let i = 1; i <= 10; i++){

//     for(let j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i * j}`)   
//     }        
// }
// 2) luwi ricxvebis bechdva 0 dan 20mde

// for(let i = 0; i < 20; i += 2){
//     console.log(i)
//     if( i == 0){
//         console.log("0 arc luwia arc kenti")
//     } else{
//         console.log(`0 idan 20mde luwi ricxveboa ${i}`);
//     }
// }




 
// let userinput = Number(prompt("sheiyvanet ricxvi"))
// let counter = 0

// for(let i = 1; i <= userinput; i++){
//     if(userinput % i == 0 ){
//         console.log(i)
//         counter++
//     }

// }
// console.log(`${userinput} aqvs ${counter} gamyofi`)

// let userInput = Number(prompt("შეიყვანეთ რიცხვი"));    
// let counter = 0;
// for(let i = 1; i <= userInput; i++){
//  if(userInput % i == 0){
//    counter++;
//  }
// }
// console.log(`${userInput} აქვს ${counter} გამყოფი`);

// 1
// for(let i = 0; i < 1600; i ++){
//   let counter = 0
//   if(i % 10 == 5){
//     console.log(i)
//     counter++
//   }
// }

// let userInput = Number(prompt("shemoiyvanet ricxvi 100-dan 200mde"))
// let counter = 0
// for(let i = 0; i <= 200; i ++){
//   let counter = 0
//   if(i % userInput == 0){
//     console.log(i)
//     counter++
//   }

// }
// let userInput = Number(prompt("shemoiyvanet ricxvi "))

//   if(userInput >= 10){
//     console.log("es ricxvi shedgenilia")
    
   
//   }
//   else{
//     console.log("es ricxvi martivia")
//   }
 // 1)davaleba

//  let userInput = Number(prompt("sheiyvanet ricxvi 1-100"))
// while(userInput < 1 || userInput > 100 ){
    
//     userInput = Number(prompt("sheiyvanet ricxvi 1-100"))
// }
// for(let i = 0; i < userInput; i++){
//     if(i % 2 != 0){
//         console.log(i);
//     }

// }
// 2)davaleba

// let userInput = Number(prompt('Sheiyvanet ricxvi 300-500'))

// while(userInput < 300 || userInput > 500){
//     userInput = Number(prompt('Sheiyvanet ricxvi 300-500!!!!'))
// }
// let min = 50 
// let max = 100
// let randNum = Math.round(Math.random() *(max - min) + min)
// console.log(`rendomuli ricxvi aris ${randNum}`)

// for(let i = randNum; i < userInput; i++){
//     if( i % 2 == 0 ){
//         console.log(i);
//     }
// }

//4)davaleba
// let colors = ["yellow","black","white","red","green","pink"]

// for(let i = 0; i < colors.length; i++){
//     console.log(colors[i])
// }                                მასივის მეთოდები 
                                    //    push() ჩაამატებს ელემენტს მასივის ბოლოში
                                    //    pop()წაშლის ბოლო ელემენტს
                                    //    shift()წაშლის პირველ ელემენტს
                                    //    unshift()ჩაამატებს ელემენტს პირველ ადგილას




// let names = ["lewis","george","john","max"]
// console.log(names)
// names.push("lando")
// console.log(names)

// let cars = ["audi","mercedes","bmw","ferari"]
// console.log(cars)
// cars.pop()
// console.log(cars)


// let movies = ["seven","avatar","interstellar"]

// movies.shift()
// console.log(movies)

// let numbers = [10,20,30];
// let sum = 0
// for(i = 0; i < numbers.length; i++){
    
//     sum += numbers[i]
   
// }
// console.log(sum)


// let array = [17,3,8,9,45];

// function findnum(arr,num){
// for(let i = 0; i < arr.length; i++ ){
//   if(arr[i] == num){
//     console.log(true)
//   }  

// }

// }
// findnum(array,8)


// let array =[]

// function fillArray(arr){
//     while(arr.length < 35){
//         let randNum = Math.round(Math.random() * 50)
//         arr.push(randNum)

//     }
//     console.log(arr)
// }
// fillArray(array)


// function fillSecondarray(arr){
//     let secondArray = []
//     for(let i = 0; i < array.length; i++){
//         if(arr [i] % 5 ==0 ){
//             secondArray.push(arr[i])
//         }

//     }
//     console.log(secondArray)

// }
// fillSecondarray(array)