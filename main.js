// function to create the random number.
const getRandomNum = num => {
    return Math.floor(Math.random() * num);
};

//creating an object with random messages.

const collectionList = {
    currentState: ['Footballer', 'Coder', 'Studying'],
    futureState: ['Great footballer', 'best coder', 'teaching coding', 'football coach'],
    advice: ['never give up', 'be happy', 'enjoy what you are doing'],
    achieve: ['the best', 'the number one.']
}


// creating a list to store all line.

let storeList = [];

// creating for loop so that we can iterate all the lines.

for ( let pos in collectionList) {
    let insidePass = getRandomNum(collectionList[pos].length);

    switch(pos) {
        case 'currentState': 
            storeList.push(`You are a ${collectionList[pos][insidePass]}.`);
            break;

        case 'futureState': 
            storeList.push(`You will be ${collectionList[pos][insidePass]}.`);
            break;
        
        case 'advice': 
            storeList.push(`You should ${collectionList[pos][insidePass]}.`);
            break; 
        
        case 'achieve': 
            storeList.push(`You are ${collectionList[pos][insidePass]}`);
            break;

        default: 
            storeList.push("There is no enough information");

    };
};

// at the moment it will be in array format and we will convert into line.
function formatLine(sentence) {
    const format = storeList.join('\n');
    console.log(format);
}


formatLine(storeList);