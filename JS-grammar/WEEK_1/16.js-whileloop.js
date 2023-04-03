// while loop
let i = 0;

while (i < 10) {
	console.log(i);
	i++;
}

let j = 3;
while (j < 100) {
    if (j % 5 === 0 && j >= 5) {
        console.log(j, "is divisible by 5");
    }
    j++;
}


// do while
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 10);


// break and continue
for(let l = 0; l < 10; l++) {
    if (l === 5) {
        continue;
    }
    console.log(l);
}

for(let m = 0; m < 10; m++) {
    if (m === 5) {
        continue;
    }
    console.log(m);
}
