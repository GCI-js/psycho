# 서버 구조

- credentials: git에 올라가지 않는 passwords & keys 가 저장됨
- log: Logger에 의해 생성된 로그들이 기록되는 폴더

## src

### component: 서버에서 자체적으로 수행하는 모듈

- ConnectionTest: /connTest 를 호출하여 제대로 연결이 되었는지를 확인
- NicknameGenerator: 랜덤하게 닉네임을 생성
- Util

### database

- Controller: Model을 이용하여 각종 요청에 대한 연산을 수행
- Model: Database에 접근할 수 있도록 Schema와 Model을 정의.

### middleware: api call 과정에서 사용되는 middlewares

- CheckApiKey: api key 확인
- Logger: 들어오는 api call 들에 대한 정보를 기록

### router

- MainRouter: 처음에 api call이 들어오면 거치는 중앙 라우터
- 그 외 다른 Router: 기본적으로 router내의 하나의 함수는 하나의 controller에 대응된다.(중요)
