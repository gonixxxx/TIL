- ... : 기존 배열의 element들을 더하여 새로운 배열 만들기
    
    ```jsx
    const list = [1, 2, 3, 4]
    
    console.log([...list, 5]) // => [1, 2, 3, 4, 5]
    ```
    
- map() : 배열의 모든 element에 대하여 함수가 실행된 결과를 새로운 배열로 리턴
    - **map(callBackFn(currentValue, index, array), newValue)**
    
    ```jsx
    [1, 2, 3, 4, 5].map((item) => item + 1)
    // => [2, 3, 4, 5, 6]
    ```
    
- `Warning: Each child in a list should have a unique "key" prop.`
    - key를 설정하는 이유? ([참고](https://ko.legacy.reactjs.org/docs/lists-and-keys.html)) : 예를 들어 리스트를 추가 할 때 키가 없는 경우 기존 리스트 요소도 리렌더링하게 되지만 key값 지정 시 추가 된 요소만 대상으로 리렌더링을 진행함.
    - key는 unique한 식별자여야 하며 index는 가급적 사용X
      
- fileter() : 함수를 통과한 요소만 필터링하여 리턴
    - **filter(callbackFn(element, index, array), newValue))**
    
    ```jsx
    const arr = [1, 2, 3, 4, 5];
    arr.filter((item) => {return item < 3;});
    // => [1, 2]
    ```
