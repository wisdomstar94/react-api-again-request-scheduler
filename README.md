# react-api-again-request-scheduler
본 레포지토리는 api 요청 후 정상 응답을 받지 못했을 경우, 해당 api 요청 정보를 indexeddb 에 저장해놓고 있다가 특정 만료일까지 일정 주기마다 성공할 때까지 재요청 보내는 기능을 제공하는 리액트 훅의 레포지토리 입니다.

<br />

# test
각 기능들 별로 별도의 테스트 페이지를 만들어 두었습니다. 본 프로젝트를 pull 받아 로컬에서 구동하시고 "http://localhost:3330" 에 접근하시면 각 테스트 페이지로 이동할 수 있는 버튼들이 표시됩니다.

<br />

# example code
예제 코드는 본 레포지토리의 src/app/test/* 경로를 참조해주세요.

<br />
