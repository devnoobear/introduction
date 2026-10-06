# Byeong Jik Kim — personal website

[Website](https://devnoobear.github.io/introduction/)

al-folio의 간결한 학술 홈페이지 구성을 참고한 정적 개인 홈페이지입니다. 기존 소개, 경력, 학력, 연구 링크와 사진을 바탕으로 구성했습니다. al-folio/Jekyll 런타임을 사용하는 사이트는 아니며 별도의 설치나 빌드가 필요하지 않습니다.

## 파일 수정

- `index.html`: 소개, 연구 보고서, 경력, 학력, 연락처. 각 섹션을 직접 수정합니다.
- `assets/style.css`: 레이아웃, 모바일 화면, 색상, 인쇄 스타일. `--accent`는 밝은 화면의 강조색이고, dark 규칙은 어두운 화면의 색상입니다.
- `assets/main.js`: 테마 전환 및 현재 섹션 메뉴 표시. JavaScript가 꺼져 있어도 본문과 링크는 동작합니다.
- `photo.jpg`: 기존 프로필 사진. 교체할 때 같은 파일명을 사용합니다.
- `assets/favicon.svg`: 브라우저 탭 아이콘.

외부 폰트, 아이콘 CDN, 분석 도구를 사용하지 않습니다. 테마는 기본적으로 기기의 설정을 따르고, 버튼으로 고른 테마는 브라우저에 저장됩니다.

## 미리보기

`index.html`을 브라우저로 직접 열 수 있습니다. 로컬 서버를 사용하려면 이 폴더에서 `python -m http.server 8000`을 실행하고 `http://localhost:8000`으로 접속합니다(Python이 설치된 경우).

## GitHub Pages

현재 저장소는 GitHub Pages가 활성화되어 있습니다. 저장소의 기존 배포 설정을 그대로 사용하며, 이 변경은 Actions 워크플로를 추가하거나 Pages 설정을 변경하지 않습니다.

브랜치 배포 방식이라면 **Settings → Pages → Build and deployment**의 Source가 **Deploy from a branch**, Branch가 **main**, 폴더가 **/(root)**인지 확인합니다. `main`에 변경 사항을 병합한 뒤 배포가 끝나면 위 주소에 반영됩니다. `.nojekyll`은 정적 파일을 그대로 제공하도록 합니다.

`introduction`이라는 저장소 이름은 올바릅니다. 기본 주소는 `https://devnoobear.github.io/introduction/`입니다. 루트 주소 `https://devnoobear.github.io/`를 원할 때만 `devnoobear.github.io` 저장소를 사용하세요. 주소를 바꾸면 `index.html`의 canonical, og:url, og:image도 함께 수정해야 합니다.

## 향후 al-folio 전환

블로그, BibTeX 논문 목록, 데이터 기반 CV를 자주 갱신하게 되면 [al-folio](https://github.com/alshedivat/al-folio)로 옮기는 것이 유용합니다. 현재처럼 소개와 연구 이력을 한 페이지에서 관리할 때는 이 정적 구조가 간단합니다. 전환 시 기존 내용과 사진을 옮기고, 프로젝트 주소를 유지한다면 Jekyll의 `url`은 `https://devnoobear.github.io`, `baseurl`은 `/introduction`으로 설정합니다.

디자인 참고: [al-folio](https://github.com/alshedivat/al-folio). HTML, CSS, JavaScript는 이 사이트에 맞게 작성했습니다.
