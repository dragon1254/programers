function solution(A,B){
    let sumArray = []
    for (let i = 0; i < A.length; i++) {
        let sum = 0;
        for (let i = 0; i < A.length; i++) {
            sum = sum + A[i] * B[i];
        }
        sumArray.push(sum);
        let item = A.splice(0,1)
        A.splice(A.length, 0, item[0])
        console.log(A)
    }
    let answer = Math.min(...sumArray);
    return answer;
}
