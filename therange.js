//This function allows me to get an array of numbers
function range(x, y=false) {
    my_return = [];
    if (y) {
        for (let i = x; i < y; i++) {
            my_return.push(i);
        };
    } else {
        for (let i = 0; i < x; i++) {
            my_return.push(i);
        };
    };
    //for visibility
    console.log(my_return);
    //for usage
    return my_return;
};

range(3);
range(12, 23);
range(10);
range(80, 90);
range(1, 23);
range(-9, 8);
range(-1, 1);
console.log(range(0, -1).some(x=>range(0, 100).includes(x)))