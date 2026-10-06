# このプロジェクトについて

この本のプロジェクト・ドキュメントです。どう組み立てられているか、どうビルドして検証するか、そして信頼できる情報源がどこにあるか。
本そのものについては[目次](../index.md)を参照してください。

## プロジェクトの地図

- **本:** `locales/`の下に4つのロケールで公開されています。
  [spec/locales.md](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md)を参照してください。
  このロケール、`en-gb-oxendict/topics/`(63ファイル)、`en-gb-oxendict/front-matter/`、第9部の付録が手書きの原典であり、
  `en-001`、`en-gb`、`en-us`はそこから派生します。
- **信頼できる情報源:** リポジトリ直下の`spec/`(サイトには公開されません)。構造は`spec/structure.md`、
  書き方のルールは`spec/conventions.md`、綴りは`spec/oxford-spelling.md`に宣言されています。ほかはすべてこれに合わせて作られます。
- **ツール:** `tools/localize.py`が他の3つのロケールを派生させ、`tools/gen_nav.py`がナビゲーションを生成し、
  `tests/validate.py`が仕様を強制し、`justfile`がそれらをつなぎます。
- **コントリビューター向けガイダンス:**
  リポジトリ直下の
  [`AGENTS.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/AGENTS.md)と、
  [貢献セクション](../contributing/index.md)のガイド。

## ビルドと検証

検証スイートはPython 3だけで、ほかの依存関係もネットワークアクセスも不要で動きます。タスクは[just](https://github.com/casey/just)で実行します。

```sh
just test    # validate structure, style, links, and spec-vs-disk
just nav     # regenerate the generated navigation files
just check   # nav, then test
just stats   # topic and word counts
```

このリポジトリは本の内容と仕様を保持します。別の
[`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io)
リポジトリがウェブサイトにレンダリングします。

## ここでの仕様駆動開発の仕組み

仕様が先に来ます。`spec/structure.md`は、どのトピックが存在し、どう番号付けされるかを定めます。`spec/conventions.md`は、
それらをどう書くべきかを定めます。トピックはその両方を満たすように執筆されます。`tools/gen_nav.py`はトピックからナビゲーションを派生させ、
`tests/validate.py`は結果を仕様と突き合わせて検証します。トピックと仕様が食い違えばテストは失敗し、それが両者を揃え直す合図です。

これがずれを防ぎます。仕様、トピック、生成されたナビゲーション、テストのすべてが一致して初めて、変更は「完了」です。

## 知っておく価値のある設計判断

- **フラットで小数番号のトピック。** ファイルは`locales/<locale>/topics/PP-CC-slug.md`で、どのロケールでも同じslugです。
  部は整数、トピックは小数、N.0は部の導入です。これにより安定した識別子が保たれ、ツールはディレクトリ木なしで並べ替えとグループ化ができます。
- **手書きのロケール1つ、派生が3つ。** `en-gb-oxendict`はオックスフォード綴りで、国際標準化団体の多くのハウススタイルです
  (`spec/oxford-spelling.md`参照)。`en-001`、`en-gb`、`en-us`はそこから機械的に派生するため、翻訳が原典からずれることはありません。
- **生成されるナビゲーション。** 目次、コンテンツページ、主題索引は生成されるので、トピックからずれることはありません。
- **オフラインで依存関係のないテスト。** スイートは標準ライブラリだけを使うので、CIやプリコミットフックを含め、どこでも動きます。
- **相互参照はプレーンテキストのまま。** 本文は、仕様が求めるとおり、トピックを小数番号で参照します(「トピック2.1を参照」)。
  それらの参照をリンクに変えるのはレンダリングするサイトの責任です。
- **エムダッシュは使わない、ルールでもテストでも。** 意図的な文体の選択で、本が育っても守られるよう強制されています。
- **すべての指標ファミリーが自身の操作の経路を名指しする。** これは、姉妹プロジェクトの`software-engineering-guide`には
  対応するものがない、テンプレート唯一のルールです。この本の主題全体が測定であるため、測定そのもののリスクは暗黙ではなく、
  最優先の扱いでなければならないからです。

## さらに読む

- [執筆](../contributing/authoring.md) : トピックの執筆と編集。
- [ナビゲーション](../contributing/navigation.md) : 生成ファイルの仕組み。
- [テスト](../contributing/testing.md) : テストが何を検査し、失敗をどう直すか。
- [例](../examples/index.md) : 小さく具体的な例。
- [変更履歴](changelog.md) : 主な変更の履歴。
