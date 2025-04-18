# Multi-Paradigm-Programming을 보고 느낀점
## 감사함
우선, 이 강의는 우연히 사전 참여단으로 참가하여 강의가 공개되기 전에 사전 점검 의미로 먼저 보게 되어 감사함을 전합니다.

## 가장 기억에 남는 말
이 강의에 대한 수강평을 적어보기 전에, 우선 2강쯤에서 나온 유인동님의 말씀이 4일이 지난 지금도 기억에 남는데, 
문제를 해결하기에 앞서 내가 선택한 언어는 FP든 OOP든 다중 패러다임 프로그래밍을 지원하지만 내가 좋아해서 혹은 내가 원하는 것만 사용하는 것이 아닌지 생각해보자라는 말씀이었는데, 이 말이 가장 나에게 기억에 남는 말이었다.

## 수강평 (독후감)
사실 유인동님의 열렬한 지지자(?)이다. 이미 다른 FP 도서와 강의 소유자로 증명할 수 있다.

모든 강의가 아직 나온 것은 아니지만 1장에서는 이터레이션 프로토콜, 제너레이터, 이터레이터, 이터러블 등 반복과 순회에 관한 핵심 개념을 실제 코드와 함께 설명해 주셔서, 
원리와 실전 활용을 동시에 이해할 수 있었다.

그렇게 강의를 잘 듣고 있다가 마지막쯤에 문득 어떤 생각이 들었는데, 게임 개발을 하며 소프트웨어 공학에 대해서 
다시 생각하고 있는 요즘 '공학'이라는 단어와 이번 강의에서 배운 '리스트 프로세싱'이 정말 밀접하게 연결되어 있다는 생각이 들었다.

공학에서 커다란 문제를 해결하기 위해 문제를 작게 조각내어 하나씩 들여다보며 문제를 해결하는데, 
이 리스트 프로세싱 역시 큰 문제 하나를 리스트를 순회하며 데이터를 조각조각 나누어 문제를 해결한다는 느낌을 많이 받았다.

이런 문제들을 해결해 가는 과정이 강의 소개에도 적혀 있는 소프트웨어 공학의 즐거움 아닐까 싶고, 다른 수강생 분들도 특정 언어에 적용되는 개념이 아닌 이터레이션 프로토콜을 기반으로 문제를 해결해 나가면서 소프트웨어 공학의 즐거움을 느끼면 좋겠다.

## 아쉬운점
개인적으로 느낀 아쉬움도 있는데, 잘은 모르겠지만, 유인동님 강의에는 에러 핸들링에 대한 처리 내용이 없는 것이 아쉽다.
Rust에는 `Result`와 `Option`으로, Haskell에는 `Either`와 `Maybe`로 에러 핸들링이 가능하고, 이건 TS에서도 분명 가능한 일 일 것이다.

아무리 FP 세계에서 부수 효과가 없다고 할 지라도, 프로그램은 결국 현실 세계를 기반으로 하고 있으니 에러라는 것이 생길 수밖에 없고, 
그렇다면 이터레이션 프로토콜을 통한 에러 핸들링 방법이 있어야 더욱 완벽한 강의가 되지 않을까 싶었다.
하지만 추가하지 않았다면 그 이유가 있을 테니 나중에 기회가 되면 여쭤 봐야겠다.
