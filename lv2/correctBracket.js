function solution(s){
    let sArray = s.split('')
    let answer = true
    let countRight = 0;
    let countLeft = 0;
    for(let i = 0; i < sArray.length; i++) {
        let sOrder = sArray.slice(0,i)
        let countRight  = sOrder.filter(element => {return '(' === element}).length
        let countLeft  = sOrder.filter(element => {return ')' === element}).length
        if(countRight < countLeft){
            answer = false;
        }
    }
    let countR = s.split('(').length -1;
    let countL = s.split(')').length -1;

    if(countL < countR || countL > countR || s[0] !== '('|| s[s.length-1] !== ')'){
        answer = false;
    }
    return answer
}