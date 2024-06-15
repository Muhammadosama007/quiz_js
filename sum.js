// const arr = [];
function sum() {
    const num = document.getElementById("num").value;
    const b = num.split("");
    console.log(b);
    // arr.push(num);

    // console.log(arr);

    if (num.length <= 5) {
        alert("enter number greater than 5");
    }

    let sum = 0;
    for (let i = 0; i < b.length; i++) {
        const index = parseInt(b[i]);
 console.log(index)
        if (index % 2 == 1) {
            sum += index;

        }
    }
    console.log(`odd numbers sum is ${sum}`);
}
sum();