# Nuxt 스터디용 토이 프로젝트 - 장바구니
Nuxt 환경에서 여러 모듈, 라이브러리, 개발환경 세팅 테스트를 위해서 생성한 토이 프로젝트 레포지토리

## 사용 모듈, 라이브러리, ETC
1. Pinia  
상태 관리 라이브러리
2. Vite  
빌드 툴
3. Quasar  
UI 프레임 워크, Material Design을 기반으로 하는 UI 프레임 워크이며, Vuetify 만큼이나 vue 생태계에서 널리쓰이는 프레임워크다.
4. PrismaORM  
데이터 연결을 위한 ORM

5. Eslint  
정적 코드 분석기 입니다. 코드에 내재되어 있는 문제점에 대해서 미리 알 수 있다.
6. Prettier  
코딩 스타일의 통일성을 위해서 Prettier 코드 포맷터를 사용 할 수 있다.
자세한 스타일 프리셋은 차후 논의를 통해 결정할 계획이다.
7. i18n  
국제화 관련

### 테스트 프레임워크
Vitest  
Vite를 기반으로 한 단위 테스트 프레임워크 Vue/Vite 팀이 만들어 Nuxt 생태계와의 궁합이 좋으며, 속도도 빠른 편이다

### 요구사항
1. 장바구니  
    a. 장바구니에 화면에 있는 물건을 담을 수 있다.
    b. 물건의 재고를 불러와 물건의 재고 이상을 장바구니에 추가하면 경고를 표시한다.
    c. 장바구니의 정보는 DB에 저장한다.
    
2. 로그인
    a. DB에 존재하는 유저의 정보를 조회해서 로그인 화면을 생성한다.
    b. 각 계정마다 존재하는 장바구니 정보를 불러온다

### DB 설계
1. User
    UserId, id, password, name
2. Cart
    UserId(FK), CartId, ProductId(FK), Amount
3. Product
    ProductId, Name, Price, Stock
4. Order
    OrderId, UserId,ProductId(FK), Amount 