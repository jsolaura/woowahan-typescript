# 타입스크립트만의 독자적 타입 시스템

### any Type
: 자바스크립트에 존재하는 모든 값을 오류 없이 받을 수 있다.

### unKnown Type
: any 타입과 유사하게 모든 타입의 값이 할당될 수 있으나 any를 제외한 다른 타입으로 선언된 변수에는 unKnown 타입 값을 할당할 수 없다.

### void Type
: 함수가 어떤 값을 반환하지 않는 경우 (다른 함수를 실행하는 역할만 하는 함수 등)

### never Type
: 값을 반환할 수 없는 타입 2. 무한히 함수가 실행되는 경우

```
// 1. 에러를 던지는 경우
function generateError(res: Response): never {
    throw new Error(res.getMessage());
}

// 2. 무한히 함수가 실행되는 경우
function checkStatus(): never {
    while(true) {
        // ...
    }
}
```

### Array Type
: 배열 타입

### enum Type
: 열거형이라고도 불러지며 일종의 구조체를 만드는 타입 시스템. 주로 문자열 상수를 생성하는데 사용된다.
```
    enum Programminglanguage {
        Typescript, // 0
        Javascript, // 1
        Java, // 2
        Python, // 3
        Kotlin, // 4
        Rust, // 5
        Go, // 6
    }
    // 객체의 속성에 접근하는 방식과 동일 또한 역방향으로도 접근이 가능함
    ProgrammingLanguage.Typescript; // 0
    ProgrammingLanguage.Kotlin; // 4
    ProgrammingLanguage['Python']; // 3
    ProgrammingLanguage[2]; // Java
    
    enum ItemStatusType {
        DELIVERY_HOLD = 'DELIVERY_HOLD', 
        DELIVERY_READY = 'DELIVERY_READY', 
        DELIVERING = 'DELIVERING', 
        DELIVERED = 'DELIVERED', 
    }
    const checkItemAvailable = (itemStatus: ItemStatusType) => {
        switch(itemStatus) {
            case ItemStatausType.DELIVERY_HOLD:
            case ItemStatausType.DELIVERY_READY:
            case ItemStatausType.DELIVERING:
                return false;
            case ItemStatausType.DELIVERED:
            default:
                return true;
        }
    }
```