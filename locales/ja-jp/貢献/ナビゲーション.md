# ナビゲーション: 生成ファイルの仕組み

ロケールごとに、4つのナビゲーション成果物がそのロケールのトピックから生成され、手では書かれません
(加えて、参照ロケール`en-gb-oxendict`向けに一度だけ生成される`README.md`)。

- `README.md`(リポジトリのホームページの目次。参照ロケールのみ)
- `locales/<locale>/index.md`(公開サイトのホームページ)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md`(リンク付きの主題索引)

これらは
[`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py)が生成します。
次の生成であなたの変更が上書きされるので、手で編集しないでください。

## いつ再生成するか

次のいずれかを行うたびに、`just nav`(または`python3 tools/gen_nav.py`)を実行します。

- トピックを追加、削除、名称変更、または番号振り直しした。
- トピックの`# N.M Title`見出しを変更した(目次はそれを使います)。

`locales/en-gb-oxendict/`の下で何かを変更したなら、先に`python3 tools/localize.py`を実行して、`gen_nav.py`が読む前に
他の3つのロケールのトピック(とその生成タイトル)を最新にします。
[`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md)を参照してください。

## 仕組み

各ロケールについて、`gen_nav.py`は`locales/<locale>/topics/*.md`の各ファイルを読み、小数番号で並べ替え、部ごとにグループ化し、次を行います。

- 各トピックのH1タイトルから、部ごとの目次を作る。
- それを`locales/<locale>/index.md`と`locales/<locale>/front-matter/table-of-contents.md`(参照ロケールのみ`README.md`も)に書く。
- 実質的なトピック(第1部から第8部)を固定のキーワードリストでスキャンし、主題索引を`locales/<locale>/topics/09-07-index.md`に書く。

共有の定型文(導入段落、「この本の読み方」、「横断的なテーマ」、部のタイトル)は、トピックの本文と同じ方法、
つまり`tools/localize.py`のロケール関数で現地化されるので、生成ページはどのロケールでも自然に読めます。

部のタイトルは、スクリプトの先頭近くにある`PART_TITLES`辞書にあります。ジェネレーターはコロン形式の部見出し
(「Part 2: Delivery and Flow Metrics」)を使い、エムダッシュは決して使いません。

手で翻訳したロケールでは、ホームページと目次ページは手で書かれ(翻訳された見出しと各部のN.0導入行)、
`tools/gen_translated_nav.py`がそのロケールのトピックのH1タイトルからトピック一覧を更新します。

## 触れないもの

リポジトリ直下の仕様(`spec/index.md`、`spec/structure.md`とその仲間)は、手書きの信頼できる情報源です。ジェネレーターはこれを書かず、
公開サイトの一部でもありません。構造を変えるなら、`spec/structure.md`を自分で更新し、派生ファイルのために`just nav`を、
すべてが揃っていることを確かめるために`just test`を実行してください。
