function solution(s) {
    var answer = '';
    let numberArray = s.split(' ').map(Number);
    let minAndMax = []
    
    const maxNumber = Math.max(...numberArray);
    const minNumber = Math.min(...numberArray);
    
    minAndMax.push(minNumber);
    minAndMax.push(maxNumber);

    answer = minAndMax.join(" ")
    return answer;
}
