# 导航：生成的文件如何运作

每个语言区域有四个导航产物，由该语言区域的主题生成，而不是手写（外加 `README.md`，它只为参考语言区域
`en-gb-oxendict` 生成一次）：

- `README.md`（仓库主页上的目录；仅限参考语言区域）
- `locales/<locale>/index.md`（已发布站点的主页）
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md`（主题索引，带链接）

它们全都由
[`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py)生成。
不要手工编辑它们，因为下一次生成会覆盖你的改动。

## 何时重新生成

每当你：

- 添加、删除、重命名或重新编号某个主题，或
- 更改某个主题的 `# N.M Title` 标题（目录会用到它）

就运行 `just nav`（或 `python3 tools/gen_nav.py`）。

如果你改动了 `locales/en-gb-oxendict/` 下的任何内容，请先运行 `python3 tools/localize.py`，使其他三个语言区域的主题（以及它们产生的标题）
在 `gen_nav.py` 读取之前保持最新；参见
[`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md)。

## 工作原理

对每个语言区域，`gen_nav.py` 读取 `locales/<locale>/topics/*.md` 中的每个文件，按小数编号排序，按部分分组，然后：

- 根据每个主题的 H1 标题，逐部分构建目录，
- 把它写入 `locales/<locale>/index.md` 和 `locales/<locale>/front-matter/table-of-contents.md`（仅对参考语言区域，还写入 `README.md`），
- 扫描内容主题（第 1 至 8 部分）中的一份固定关键术语列表，并把主题索引写入 `locales/<locale>/topics/09-07-index.md`。

共享的样板文字（引言段落、“如何阅读本书”、“贯穿始终的主题”和各部分标题）的本地化方式与主题正文相同，
通过 `tools/localize.py` 的语言区域函数完成，因此生成的页面在每个语言区域中读起来都很自然。

各部分标题保存在脚本靠前位置的 `PART_TITLES` 字典中。生成器使用冒号式的部分标题（“Part 2: Delivery and Flow Metrics”），
绝不使用长破折号。

对于手工翻译的语言区域，主页和目录页是手写的（译后的标题和各部分的 N.0 导言行），
而 `tools/gen_translated_nav.py` 会根据该语言区域各主题的 H1 标题刷新主题列表。

## 它不会触及什么

仓库根目录的规格（`spec/index.md`、`spec/structure.md` 及其同伴）是手写的事实来源。生成器不会写它，它也不属于已发布站点。
如果你更改了结构，请自己更新 `spec/structure.md`，然后运行 `just nav` 处理派生文件，再运行 `just test` 确认一切一致。
