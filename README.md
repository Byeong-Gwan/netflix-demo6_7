# React 
## 목표
- 포기하지 않고 끝까지 하는 것
- 넷플릭스 클론 코딩으로 react 공부
    - 공부 강의: 코알누 React 강의 및 스터디 참여
- 기초 react 실력 향상

## 스택
- vite
- React: 19.1.1
- React-dom
- React-router
- React-paginate
- React-Query
- axios: 1.13.2
- react-bootstrap: 2.10.10
- react-multi-carousel: 2.8.6

## 배포 
- Vercel
- URL: https://movie-react-demo-app.vercel.app/ 

## 페이지 구성
- Home ('/')
- Movie List Page('/movies')
- Movie Detail Page ('/movies/:movie_id)

## Demo
### 1. Home ('/')
![Home](./screenshots/home.png)

- 베너(Banner)
    - 인기 영화 첫 번째 항목 이미지 & 개요 배경으로 사용
    - 트레일러 존재하면 "재생" 버튼 노출 
        => 모달로 YouTube 트레일러 재생

- 카테고리 슬라이드
    - Popular, Top Rated, Upcoming 섹션
    - 공통 슬라이더(react-multi-carousel)로 반응형 카드 사용

- 데이터 로딩/ 에러 
    - React-Query hook을 통해 비동기 데이터 로딩
    - 로딩 및 에러 처리

### 2. Movie List Page('/movies')
![Movies Pagination](./screenshots/list.png)

- 검색/ 라우팅
    - `?q=keyword` query String 로 검색 결과 출력

- 페이지 상태 유지
    - 세션 스토리지에 키(movies:page:<keyword|all>)로 현재 페이지 저장/복원

- 필터/정렬
    - 정렬: 인기순/최신순
    - 장르 필터: 장르 목록 드롭다운에서 필터링

- 리스트/그리드
    - React-bootstrap Grid 기반 반응형 카드(모바일 2열, md 3열, lg 4열)

- 페이지네이션
    - React-Paginate 사용
    - 모바일 & Web 대응, 양끝 유지 + 중간은 ... 축약 형태
    - 이전 & 다음 네비게이션, 현재 페이지 하이라이트

### 3. Movie Detail Page ('/movies/:movie_id)
![Movies Detail Page](./screenshots/detail.png)

- 데이터 로딩
    - 상세 정보, 트레일러, 리뷰를 각각 React Query 훅으로 로딩

- 히어로/포스터
    - 백드롭 이미지 배경 + 포스터/타이틀 노출

- 메타 정보
    - 개봉일, 상영시간, 평점, 인기도, 예산 등 요약 메타

- 장르/개요
    - 장르 뱃지 섹션, 영화 개요 텍스트

- 트레일러
    - 트레일러 목록 중 유튜브/Trailer 타입 우선 선택하여 노출

- 리뷰
    - 페이지 단위로 로드
    - “더보기” 클릭 시 다음 페이지 리뷰를 누적(append)해서 표시
    - 리뷰 없을 때 안내 문구
    
- 에러/로딩
    - 로딩 시 null, 에러/데이터 없음 시 안내 메시지

### 어려웠던 점 && 아쉬운 점
1. 문제
    - 상세 페이지 레이아웃을 어떻게 잡아야 할지 몰라 오래 막혔음.

2. 해결 방향
    - 화면을 몇 개의 블록(히어로, 포스터/정보, 트레일러, 리뷰) 나눔
    - 레이아웃 안(Flex vs Grid)을 비교
    - AI를 통해서 방향 검증 요청

3. 결과
    - 모바일, Web 모두에서 안정적인 레이아웃 형성
    - CLS(레이아웃 흔들림)와 가독성이 개선

4. 배운 점
    - 디자인 토큰으로 일관성 유지의 중요성

