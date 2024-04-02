function distanceFromHqInBlocks (block){
let headq=42
return Math.abs(block - headq);
}
function distanceFromHqInFeet(pickup_location){
const blocklength=264;
return distanceFromHqInBlocks(pickup_location)*blocklength;
}
function distanceTravelledInFeet(start_block,end_block){
let blocklength=264;
return Math.abs(end_block-start_block)*blocklength;

}
function calculatesFarePrice(start,destination){
const distance=distanceTravelledInFeet(start, destination)
if (distance<=400){
return 0;
} 
else if (distance>400 && distance<=2000){
return (distance-400)*0.02;
}
else if(distance>2000 && distance<=2500){
return 25
}
else{
return`cannot travel that far`;
}
}