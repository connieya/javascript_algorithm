# 프로그래머스 Lv.1 K번째 수

## solution 1 

```javascript
function solution(array, commands) {
    var answer = [];
    answer = commands.map(command => {
        return array.slice(command[0]-1,command[1]).sort( (a,b) => a-b)[command[2]-1];
    })
    return answer;
}
```

## solution 2

```javascript
function solution(array, commands) {
    return commands.map(v => {
        return array.slice(v[0]-1,v[1]).sort((a,b)=> a-b)[v[2]-1];
    })
}
```