# 프로그래머스 Lv.2 JadenCase 문자열 만들기

## solution 1

```javascript
function solution(s) {
    var answer = '';
    answer += s[0].toUpperCase();
    for(let i=1; i<s.length; i++){
        if(s[i] === ' ' && i+1 < s.length && s[i+1] !== ' '){
            answer+=s[i];
            answer += s[i+1].toUpperCase();
            i++;
            continue;
        }
        answer += s[i].toLowerCase();
    }
    return answer;
}
```

## solution 2

```javascript
function solution(s) {
    return s.split(" ")
        .map(v => v.charAt(0).toUpperCase()+v.substring(1).toLowerCase())
        .join(" ");
}
```