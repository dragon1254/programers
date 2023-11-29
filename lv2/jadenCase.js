        // 18번 테스트 실패 왜 안되지..
function solution(s) {
    const stringArray = s.split('');
    const spaceIndexArray = [];
    stringArray.forEach((element,index) => {
        if(element === " "){
            spaceIndexArray.push(index);
        }
    });
        for(let i = 0; i < stringArray.length-1; i++){
            if(i === 0 ){
                if(isNaN(stringArray[i])){
                    stringArray[i] = stringArray[i].toUpperCase()
                } 
            }
            if(spaceIndexArray.includes(i)){
                if(isNaN(stringArray[i+1])){
                    stringArray[i+1] = stringArray[i+1].toUpperCase();
                }
            } else {
                stringArray[i+1] = stringArray[i+1].toLowerCase()
            }
        }
    var answer = stringArray.join('')
    return answer;
}
        