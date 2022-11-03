/* 
👉 Welcome to Spin Us A Yarn, a knit-it-yourself workshop! Select your size and design to work out 
how many balls of wool you will need to make your jumper.

Sizes: S = 600g, M = 800g, L 1kg, XL 1.2kg

1 ball of wool weighs 200g.

This means that you will have to buy a whole ball of a colour even if you only need 20g worth.

Write a function to determine how many balls of wool you will need in total for a specified design and size.

Cat Design: [10% black, 40% periwinkle, 40% orange, 5% white, 5% green]
Rabbit Design: [10% black, 10% periwinkle, 0% orange, 40% white, 40% green]
Fox Design: [10% black, 35% periwinkle, 45% orange, 5% white, 5% green]

800 total
black = 80g, umber = 320, red = 40g, pink = 80g, green = 280
black = 1, umber = 2, red = 1, pink = 1, green = 2
total wool balls: 7
*/

//👉 Write the function your CodeWarriors will start with below here:

let weight = 0

export default function ballsOfWool (size, design){
if (size === "S"){
    weight = 600
} 
else if (size === "M"){
    weight = 800
} 
else if (size === "L"){
    weight = 1000
} 
else if (size === "XL"){
    weight = 1200
} 

let woolCount = 0

if (design === "cat") {
    let catDesign = [10, 40, 40, 5, 5]
    for ( let i = 0; i < catDesign.length; i++) {
        let percentage = (weight/100)
        let woolWeight = percentage * catDesign[i]
        if (woolWeight <= 200 && woolWeight >0) {
         woolCount++
        }
        else if (woolWeight > 200 && woolWeight <= 400) {
         woolCount = woolCount + 2
        }
        else if (woolWeight > 400) {
         woolCount = woolCount + 3
        }
     }
}
else if (design === "rabbit") {
    let rabbitDesign = [10, 10, 0, 40, 40]
    for ( let i = 0; i < rabbitDesign.length; i++) {
        let percentage = (weight/100)
        let woolWeight = percentage * rabbitDesign[i]
        if (woolWeight <= 200 && woolWeight >0) {
         woolCount++
        }
        else if (woolWeight > 200 && woolWeight <= 400) {
         woolCount = woolCount + 2
        }
        else if (woolWeight > 400) {
        woolCount = woolCount + 3}}}

else if (design === "fox") {
    let foxDesign = [10, 35, 45, 5, 5]
    for ( let i = 0; i < foxDesign.length; i++) {
            let percentage = (weight/100)
            let woolWeight = percentage * foxDesign[i]
            if (woolWeight <= 200 && woolWeight >0) {
            woolCount++
            }
            else if (woolWeight > 200 && woolWeight <= 400) {
            woolCount = woolCount + 2
            }
            else if (woolWeight > 400) {
            woolCount = woolCount + 3}}}
        
return woolCount}
    