function solution(n) {
    var answer = 0;
    for(let i = 1; i < n; i++){
        const remain = n % i;
        if(remain === 1){
            return answer = i
        }
    }
    return answer;
}
