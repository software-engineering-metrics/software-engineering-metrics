# 貢献

この本の改善にご協力いただきありがとうございます。誤字の修正から新しいトピックの執筆まで、あらゆる規模の貢献を歓迎します。

## 基本ルール

この本は厳格なハウススタイルに従っています。要点は次のとおりです。

- エムダッシュは使わない。カンマ、コロン、括弧、または2つの文を使います。
- 決まり文句は使わない(「not only ... but also」、「load-bearing」など)。
- 温かく、平易で、率直な文章。読者には「あなた」と呼びかけます。短い文で。
- 用語は初出時に定義します。重要な概念は初出時にWikipediaへリンクします。
- 実在する参考文献のみ。
- 指標ファミリーのトピックはどれも、操作の経路とガードレールを名指しします。

完全なルールはリポジトリ直下の`spec/conventions.md`にあり、短縮版が[スタイル規則](style-rules.md)です。機械的な部分はテストが強制します。

## セットアップ

Python 3と[just](https://github.com/casey/just)が必要です。このリポジトリには本の内容と仕様のほか、
それを公開ウェブサイトにレンダリングするSvelteKitサイト(`software-engineering-metrics.github.io/`)があります。

```sh
just         # list tasks
just test    # run the validation suite
just nav     # regenerate the generated navigation files
just stats   # topic and word counts
```

## 変更を加える

1. 関連するガイドを読みます。トピックには[執筆](authoring.md)、生成ファイルには[ナビゲーション](navigation.md)、
   テストには[テスト](testing.md)。
2. 目的を果たす最小の変更を行います。
3. トピックを追加、削除、名称変更、または番号振り直しした場合は、リポジトリ直下の`spec/structure.md`を更新し、`just nav`を実行します。
4. `just test`を実行します。通らなければなりません。
5. [変更履歴](../project/changelog.md)の**Unreleased**の下に1行のエントリを追加します。

## 取り組めること

- 誤り、分かりにくい箇所、古くなった参照を直す。
- 例を改善する。特に具体的な企業と政府の例。
- 実在する出典に対して引用を検証する。
- テンプレートを崩さずに、トピックの取り扱い範囲の穴を埋める。

## 避けること

- 生成ファイル(`README.md`、各ロケールの`index.md`、`front-matter/table-of-contents.md`、`topics/09-07-index.md`)を手で編集しないでください。
  代わりにトピックを変更して`just nav`を実行します。
- `en-001`、`en-gb`、`en-us`を直接編集しないでください。これらは`tools/localize.py`で`en-gb-oxendict`から派生します。
- `spec/structure.md`も更新せずにトピックを追加しないでください。
- エムダッシュや禁止フレーズを持ち込まないでください。テストが失敗します。

## 問題の報告

問題、ファイルとトピック、そして該当すれば正しい出典や参考文献を説明したイシューを立ててください。小さく具体的な報告ほど、対応しやすいものです。
