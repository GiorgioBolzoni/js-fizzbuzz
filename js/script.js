const wrapperEl = document.getElementById('boxWrapper');

const fizz = 'fizz';
const buzz = 'buzz';
const fizzBuzz = 'fizzBuzz';


for(let i = 1; i <= 100; i++){
    const boxEl = document.createElement('div')
    //istruzioni da ripetere
    // console.log(i);
    if(i % 3 === 0 && i % 5 === 0){
        boxEl.className = 'fizzBuzz';
        wrapperEl.append (boxEl)
        boxEl.innerHTML = fizzBuzz
        console.log('fizzBuzz')
    }else if(i % 5 === 0){
        boxEl.className = 'buzz';
        // boxEl.append (wrapperEl)
        wrapperEl.append (boxEl)
        boxEl.innerHTML = buzz
        console.log('buzz')
    }else if(i % 3 === 0){
        boxEl.className = 'fizz';
        // boxEl.append (wrapperEl)
        wrapperEl.append (boxEl)
        boxEl.innerHTML = fizz
        console.log('fizz')
    }else {
        boxEl.className = 'box';
        // boxEl.append (wrapperEl)
        wrapperEl.append (boxEl)
        boxEl.innerHTML = i
        console.log(i)
    }
};
