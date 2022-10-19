// let balloons = 10;
// while (balloons > 0) {
//     console.log("We're having fun");
//     balloons --
// }

// console.log("We're not having fun");

// for (let balloon = 10; balloon > 0; balloon --) {
//     console.log("having fun");
// }
// console.log("not having fun");


let myBalloons = {
    balloonOne : {
        color: "green",
        size: "large",
    },

    balloonTwo : {
        color: "blue",
        size: "medium",
    },

    balloonThree : { 
        color: "red",
        size: "small"
    }

};

const balloonArr = [myBalloons.balloonOne, myBalloons.balloonTwo, myBalloons.balloonThree];

for (let i = 0; i < balloonArr.length; i++) {
    //console.log(balloonArr[i].size);
     if (balloonArr[i].size === "medium") {
         console.log(`the balloon is already ${balloonArr[i].size}`)
     } else {
         balloonArr[i].size = "medium";
         console.log(`the balloon has been adjusted to ${balloonArr[i].size}`)
     }
}


