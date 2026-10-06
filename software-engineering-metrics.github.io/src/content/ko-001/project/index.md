# 이 프로젝트에 대하여

이 책의 프로젝트 문서다. 어떻게 구성되어 있는지, 어떻게 빌드하고 검증하는지, 신뢰할 수 있는 원천이 어디에 있는지를 다룬다. 책 자체는 [목차](../index.md)를 보라.

## 프로젝트 지도

- **책:** `locales/` 아래 네 개의 로케일로 발행된다.
  [spec/locales.md](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md)를 보라.
  이 로케일, 곧 `en-gb-oxendict/topics/`(63개 파일), `en-gb-oxendict/front-matter/`, 9부의 부록이 손으로 쓴 원천이며,
  `en-001`, `en-gb`, `en-us`는 여기서 파생된다.
- **신뢰할 수 있는 원천:** 저장소 루트의 `spec/`(사이트에는 게시되지 않는다). 구조는 `spec/structure.md`에, 작성 규칙은 `spec/conventions.md`에,
  철자는 `spec/oxford-spelling.md`에 선언되어 있다. 나머지는 모두 여기에 맞춰 만들어진다.
- **도구:** `tools/localize.py`가 나머지 세 로케일을 파생하고, `tools/gen_nav.py`가 내비게이션을 생성하며, `tests/validate.py`가 명세를 강제하고,
  `justfile`이 이들을 연결한다.
- **기여자 안내:** 저장소 루트의
  [`AGENTS.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/AGENTS.md)와
  [기여 섹션](../contributing/index.md)의 안내서.

## 빌드와 검증

검증 스위트는 Python 3만으로 다른 의존성도 네트워크 접근도 없이 실행된다. 작업은 [just](https://github.com/casey/just)로 실행한다.

```sh
just test    # validate structure, style, links, and spec-vs-disk
just nav     # regenerate the generated navigation files
just check   # nav, then test
just stats   # topic and word counts
```

이 저장소는 책의 내용과 명세를 담는다. 웹사이트로의 렌더링은 별도의
[`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io)
저장소가 맡는다.

## 여기서 명세 주도 개발이 작동하는 방식

명세가 먼저다. `spec/structure.md`는 어떤 주제가 존재하고 어떻게 번호가 매겨지는지 선언한다. `spec/conventions.md`는 주제를 어떻게 써야 하는지 선언한다.
주제는 이 둘을 만족하도록 집필된다. `tools/gen_nav.py`는 주제에서 내비게이션을 파생하고, `tests/validate.py`는 결과를 명세와 다시 대조한다.
주제와 명세가 어긋나면 테스트가 실패하며, 이것이 둘을 다시 맞추라는 신호다.

이렇게 하면 표류를 막을 수 있다. 명세, 주제, 생성된 내비게이션, 테스트가 모두 일치할 때에야 변경이 "끝난" 것이다.

## 알아 둘 만한 설계 결정

- **평평하고 소수로 번호 매긴 주제.** 파일은 `locales/<locale>/topics/PP-CC-slug.md`이며, 모든 로케일에서 슬러그가 같다.
  부는 정수, 주제는 소수, N.0은 부 소개다. 이로써 식별자가 안정적으로 유지되고, 도구가 디렉터리 트리 없이 정렬하고 묶을 수 있다.
- **손으로 쓰는 로케일 하나, 파생 셋.** `en-gb-oxendict`는 옥스퍼드 철자로, 대부분의 국제 표준 기구의 하우스 스타일이다(`spec/oxford-spelling.md` 참조).
  `en-001`, `en-gb`, `en-us`는 여기서 기계적으로 파생되므로 번역이 원천에서 벗어나지 않는다.
- **생성되는 내비게이션.** 목차, 콘텐츠 페이지, 주제 색인은 생성되므로 주제에서 벗어나지 않는다.
- **오프라인에 의존성 없는 테스트.** 스위트는 표준 라이브러리만 쓰므로 CI와 프리커밋 훅을 포함해 어디서나 실행된다.
- **교차 참조는 평문으로.** 본문은 명세가 요구하는 대로 주제를 소수 번호로 가리킨다("주제 2.1 참조"). 그 참조를 링크로 바꾸는 것은 렌더링하는 사이트의 몫이다.
- **엠 대시 금지, 규칙으로도 테스트로도.** 의도적인 문체 선택이며, 책이 자라도 지켜지도록 강제된다.
- **모든 메트릭 패밀리가 자신의 조작 경로를 밝힌다.** 이것은 자매 프로젝트 `software-engineering-guide`에 대응물이 없는 템플릿의 유일한 규칙이다.
  이 책의 주제 전체가 측정이므로, 측정 자체의 위험이 암묵적이 아니라 일급이어야 하기 때문이다.

## 더 읽을거리

- [집필](../contributing/authoring.md) : 주제 쓰고 편집하기.
- [내비게이션](../contributing/navigation.md) : 생성 파일이 작동하는 방식.
- [테스트](../contributing/testing.md) : 테스트가 무엇을 검사하고 실패를 어떻게 고치는가.
- [예시](../examples/index.md) : 작고 구체적인 예시.
- [변경 이력](changelog.md) : 주요 변경의 이력.
