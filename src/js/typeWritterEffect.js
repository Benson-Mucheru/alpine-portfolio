//Constant Variables
const description = document.getElementById("role");
const roles = [
  "Web Developer",
  "Email Developer",
  "React Developer",
  "PHP Developer",
  "Laravel Developer",
];

let charIndexWrite = 0;
let arrIndex = 0;
let charIndexErase = 0;

//Erase effect function
function typeEffectErase() {
  //Erase logic
  if (charIndexErase < roles[arrIndex].length) {
    let sliceDes = roles[arrIndex].slice(0, charIndexWrite - 1); //Deletes the last char
    description.innerHTML = sliceDes;
    charIndexErase++;
    charIndexWrite--;
    setTimeout(typeEffectErase, 50);
  }
  //Pass the write logic there is no more the chars to delete in the sliceDes variable
  else {
    charIndexErase = 0;
    arrIndex++;
    setTimeout(typeEffectWrite, 100);
  }
}

//Write effect function
function typeEffectWrite() {
  //Check if array length is greater the array index
  if (arrIndex < roles.length) {
    //Writing logic
    if (charIndexWrite < roles[arrIndex].length) {
      description.innerHTML += roles[arrIndex].charAt(charIndexWrite); //Adds each char one at a time
      charIndexWrite++;
      setTimeout(typeEffectWrite, 50);
    }
    //When the charInderWrite lenght is higher than the role lenght pass in the erase function
    else {
      setTimeout(typeEffectErase, 3000);
    }
  } else if (arrIndex == 5) {
    arrIndex = 0;
    setTimeout(typeEffectWrite, 50);
  }
}

typeEffectWrite();
