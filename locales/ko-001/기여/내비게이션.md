# 내비게이션: 생성 파일이 작동하는 방식

로케일마다 네 개의 내비게이션 산출물이 그 로케일의 주제에서 생성되며, 손으로 쓰지 않는다
(여기에 참조 로케일 `en-gb-oxendict`용으로 한 번 생성되는 `README.md`가 더해진다).

- `README.md`(저장소 홈페이지의 목차. 참조 로케일 전용)
- `locales/<locale>/index.md`(게시된 사이트의 홈페이지)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md`(링크가 달린 주제 색인)

모두
[`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py)가 만든다.
다음 생성이 당신의 변경을 덮어쓰므로 손으로 편집하지 마라.

## 언제 다시 생성하는가

다음 중 하나를 할 때마다 `just nav`(또는 `python3 tools/gen_nav.py`)를 실행한다.

- 주제를 추가, 삭제, 이름 변경, 또는 번호 재부여한다.
- 주제의 `# N.M Title` 제목을 바꾼다(목차가 그것을 쓴다).

`locales/en-gb-oxendict/` 아래에서 무엇이든 바꿨다면, `gen_nav.py`가 읽기 전에 나머지 세 로케일의 주제(와 그 생성 제목)가 최신이 되도록 먼저
`python3 tools/localize.py`를 실행한다.
[`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md)를 보라.

## 작동 방식

각 로케일에 대해 `gen_nav.py`는 `locales/<locale>/topics/*.md`의 모든 파일을 읽고, 소수 번호로 정렬하고, 부별로 묶은 다음 이렇게 한다.

- 각 주제의 H1 제목으로 부별 목차를 만든다.
- 이를 `locales/<locale>/index.md`와 `locales/<locale>/front-matter/table-of-contents.md`(그리고 참조 로케일에 한해 `README.md`)에 쓴다.
- 핵심 주제(1부부터 8부)를 고정된 핵심 용어 목록으로 훑어 주제 색인을 `locales/<locale>/topics/09-07-index.md`에 쓴다.

공유 상용구 텍스트(소개 문단, "이 책을 읽는 방법", "가로지르는 주제", 부 제목)는 주제 본문과 같은 방식으로, 곧 `tools/localize.py`의 로케일 함수로 현지화되므로
생성된 페이지는 모든 로케일에서 자연스럽게 읽힌다.

부 제목은 스크립트 상단 근처의 `PART_TITLES` 사전에 있다. 생성기는 콜론 형식의 부 머리글("Part 2: Delivery and Flow Metrics")을 쓰며, 엠 대시는 절대 쓰지 않는다.

손으로 번역한 로케일에서는 홈페이지와 목차 페이지를 손으로 쓰며(번역된 제목과 각 부의 N.0 소개 줄), `tools/gen_translated_nav.py`가 그 로케일 주제의 H1 제목에서
주제 목록을 갱신한다.

## 건드리지 않는 것

저장소 루트의 명세(`spec/index.md`, `spec/structure.md`와 그 동료들)는 손으로 쓴 신뢰할 수 있는 원천이다. 생성기는 이를 쓰지 않으며, 게시된 사이트의 일부도 아니다.
구조를 바꾸려면 `spec/structure.md`를 직접 갱신하고, 파생 파일을 위해 `just nav`를, 모든 것이 맞는지 확인하려고 `just test`를 실행하라.
