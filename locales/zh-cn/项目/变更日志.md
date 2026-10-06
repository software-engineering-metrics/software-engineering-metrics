# 变更日志

本书及其工具的重要变更。最新条目在前。日期使用 ISO 8601（YYYY-MM-DD）。

## [Unreleased]

### Changed

- 荷兰语（`nl-nl`）：翻译了主题 9.0、9.3 和 9.4 中剩余的英文标题和 slug（`bijlagen`、`controlelijsten`、`sjablonen`）。
- 威尔士语（`cy-001`、`cy-gb`）：术语与 TermCymru 对齐：`risg`（风险，取代 `perygl`，并做词性一致）、`cyfnewidiad`（权衡）、
  `dangosydd rhagfynegi` 和 `dangosydd ôl-fynegi`（领先指标与滞后指标，取代 `hwyrfrydig`）、`cynhwysedd`（容量）、`dosraniad`（分布）、
  `cydberthynas`（相关性）、主题 1.3 中表示产出的 `allbwn`，以及 `cyfradd gadael staff`（员工流失率）。为保持一致，重命名了四个主题 slug。
- 站点：把 `@lilydesignsystem/svelte-picker-bar` 升级到 0.2.0，它在标题栏中增加了一个搜索选择器；它提交到现有的 `/?<query>` 站点搜索。
- 添加了 `scripts/generate-sitemap.mjs`，它在 `pnpm build` 结束时运行，并根据预渲染的页面写出 `sitemap.xml`（仅限规范的语言区域 URL，
  不包含两个字母别名的重复项），使 `robots.txt` 中的 `Sitemap:` 行能够解析。
- `AGENTS.md` 现在是一份简短的索引；细节转移到了 `AGENTS/layout.md`、`style.md`、`locales.md` 和 `workflow.md`。
- 文档整理：针对 27 个语言区域、各语言区域的部分目录名称和新工具，更新了 `AGENTS.md`、`index.md`、生成的 README 语言区域文本、`spec/index.md`、`spec/locales.md`，
  以及站点的 `AGENTS.md` 和 `README.md`；添加了 `CLAUDE.md`（指向 `AGENTS.md` 的指针）；修正了两个代理技能中过时的 `docs/` 路径，
  并让 `skills/` 成为 `.claude/skills/` 的规范副本（由测试检查）。
- 在站点的 `static/` 中添加了 `llms.txt` 和 `llms.json`（面向 AI 代理的、涵盖每个已提供语言区域和主题的索引），由 `tools/gen_llms.py`
  （`just llms`）生成并由测试检查。
- 站点主页：“九个部分”的磁贴列表现在是涵盖所有部分和主题的“目录”嵌套列表，并删除了“古德哈特定律，无处不在”一节。
- 在每个语言区域中，把书的正文里的“chapter”改成了“topic”（例如“主题 2.1”“本部分的主题”），使用各语言自己表示“topic”的词
  （`tema`、`sujet`、`Thema`、`тема`、`主題` 等），在规格、工具生成的文本和站点界面字符串中也是如此。文件名、URL 和部分键保持不变。
- 翻译了 `locales/` 下每个部分目录的名称：`chapters/` 现在是 `topics/`（在其他每个语言区域中是它的译名，如 `temas/`、`sujets/`、`themen/`），
  而 `es-001` 的 `examples/` 现在是 `ejemplos/`。名称保存在 `spec/section-names.json` 中；工具、测试和站点的内容同步都从那里读取，站点 URL 保持不变。

### Changed

- 对照威尔士政府的 TermCymru 术语表修订了威尔士语语言区域（`cy-001`、`cy-gb`，保持相同）：幸福感用 `llesiant`，生产力用 `cynhyrchiant`，
  脆弱性用 `gwendid`/`gwendidau`，治理用 `llywodraethiant`，相关性用 `cydberthynas`，待办事项清单（backlog）用 `ôl-groniad`（此前保留为英文），成本效益用 `cost a budd`，
  并在每个主题中首次提到 AI 时使用 `deallusrwydd artiffisial (AI)`。

### Added

- 已把前言、示例、贡献和项目各部分（14 个文件，外加变更日志、主页和目录）翻译成该语言区域，目录名称也已翻译。
- 添加德语（`de-001`）作为第 26 个完整翻译的语言区域：全部 63 个主题，附带匹配的 `.locale-peer-id` 附属文件，内容与 `de-de` 相同。
  已接入站点，并在 `/de-001/`（别名 `/de/`）提供服务。
- 添加葡萄牙语（`pt-001`）作为第 25 个完整翻译的语言区域：全部 63 个主题，附带匹配的 `.locale-peer-id` 附属文件，内容与 `pt-pt` 相同。
  已接入站点，并在 `/pt-001/`（别名 `/pt/`）提供服务。
- 完成了全部 63 个主题到乌尔都语（`ur-001`，从右到左）的从零开始的完整人工翻译，这是第 24 个完整翻译的语言区域，附带匹配的
  `.locale-peer-id` 附属文件。每个主题都直接从英文源头翻译，索引（主题 9.7）把每个内部链接重新映射到对应的乌尔都语文件名，
  部分目录是 `موضوعات`。已接入站点，并在 `/ur-001/`（别名 `/ur/`）提供服务。
- 完成了全部 63 个主题到印度尼西亚语（`id-001`）的从零开始的完整人工翻译，附带匹配的 `.locale-peer-id` 附属文件。此前没有可供构建的印度尼西亚语语言区域，
  因此每个主题都直接从英文源头翻译，索引（主题 9.7）把每个内部链接重新映射到对应的印度尼西亚语文件名。已接入站点，并在
  `/id-001/`（别名 `/id/`）提供服务。
- 添加俄语（`ru-001`）和中文（`zh-001`）作为第 21 和第 22 个完整翻译的语言区域：各含全部 63 个主题，附带匹配的 `.locale-peer-id` 附属文件，
  内容分别与 `ru-ru` 和 `zh-cn` 相同。已接入站点，并在 `/ru-001/` 和 `/zh-001/`（别名 `/ru/` 和 `/zh/`）提供服务。
- 添加法语（`fr-001`）作为第 20 个完整翻译的语言区域：全部 63 个主题，附带匹配的 `.locale-peer-id` 附属文件，内容与 `fr-fr` 相同。
  已接入站点，并在 `/fr-001/`（别名 `/fr/`）提供服务。
- 添加孟加拉语（`bn-001`）作为第 19 个完整翻译的语言区域：全部 63 个主题，附带匹配的 `.locale-peer-id` 附属文件，内容与 `bn-bd` 相同。
  已接入站点，并在 `/bn-001/`（别名 `/bn/`）提供服务。
- 添加阿拉伯语（`ar-001`）作为第 18 个完整翻译的语言区域：全部 63 个主题，附带匹配的 `.locale-peer-id` 附属文件，内容与 `ar-eg` 相同。
  已接入站点，并在 `/ar-001/`（别名 `/ar/`）提供服务。
- 添加威尔士语，英国（`cy-gb`）作为第 17 个完整翻译的语言区域：全部 63 个主题，附带匹配的 `.locale-peer-id` 附属文件，内容与
  `cy-001` 相同（与 `hi-id` 和 `hi-001` 的关系相同）。已接入站点的 `SERVED_LOCALE_CODES`，并在 `/cy-gb/` 提供服务。
- 完成了全部 63 个主题到荷兰语，荷兰（`nl-nl`）的从零开始的完整人工翻译，附带匹配的 `.locale-peer-id` 附属文件，且 `just test` 通过。
  此前没有可供构建的荷兰语语言区域，因此每个主题都直接从英文源头翻译。索引（主题 9.7）把每个内部主题链接重新映射到对应的荷兰语文件名，
  沿用了为 `ar-eg`、`bn-bd`、`ko-kr`、`es-es`、`pt-pt`、`ja-jp`、`ru-ru`、`fr-fr` 和 `sv-se` 采用的做法。尚未接入站点。
- 完成了全部 63 个主题到瑞典语，瑞典（`sv-se`）的从零开始的完整人工翻译，附带匹配的 `.locale-peer-id` 附属文件，且 `just test` 通过。
  每个主题都直接从英文源头翻译。索引（主题 9.7）把每个内部主题链接重新映射到对应的瑞典语文件名，沿用了为
  `ar-eg`、`bn-bd`、`ko-kr`、`es-es`、`pt-pt`、`ja-jp`、`ru-ru` 和 `fr-fr` 采用的做法。尚未接入站点。
- 完成了全部 63 个主题到法语，法国（`fr-fr`）的从零开始的完整人工翻译，附带匹配的 `.locale-peer-id` 附属文件，且 `just test` 通过。
  每个主题都直接从英文源头翻译。索引（主题 9.7）把每个内部主题链接重新映射到对应的法语文件名，沿用了为
  `ar-eg`、`bn-bd`、`ko-kr`、`es-es`、`pt-pt`、`ja-jp` 和 `ru-ru` 采用的做法。尚未接入站点。
- 完成了全部 63 个主题到俄语，俄罗斯（`ru-ru`）的从零开始的完整人工翻译，附带匹配的 `.locale-peer-id` 附属文件，且 `just test` 通过。
  每个主题都直接从英文源头翻译。索引（主题 9.7）把每个内部主题链接重新映射到对应的俄语文件名，沿用了为
  `ar-eg`、`bn-bd`、`ko-kr`、`es-es`、`pt-pt` 和 `ja-jp` 采用的做法。尚未接入站点。
- 完成了全部 63 个主题到日语，日本（`ja-jp`）的从零开始的完整人工翻译，附带匹配的 `.locale-peer-id` 附属文件，且 `just test` 通过。
  每个主题都直接从英文源头翻译。索引（主题 9.7）把每个内部主题链接重新映射到对应的日语文件名，沿用了为
  `ar-eg`、`bn-bd`、`ko-kr`、`es-es` 和 `pt-pt` 采用的做法。尚未接入站点。
- 完成了全部 63 个主题到葡萄牙语，葡萄牙（`pt-pt`）的从零开始的完整人工翻译，附带匹配的 `.locale-peer-id` 附属文件，且 `just test` 通过。
  每个主题都直接从英文源头翻译。索引（主题 9.7）把每个内部主题链接重新映射到对应的葡萄牙语文件名，沿用了为
  `ar-eg`、`bn-bd`、`ko-kr` 和 `es-es` 采用的做法。尚未接入站点。
- 添加西班牙语，西班牙（`es-es`）作为完整翻译的语言区域，全部 63 个主题，起点是现有西班牙语（`es-001`）译文的副本（经检查，它在语法上已经是中性的，
  词汇也大多已偏向西班牙用法），然后针对其余少数用法做了有针对性的术语处理，尤其是
  针对本书事件指标领域把“incidente”改为“incidencia”，并在各处做了相应的词性一致修正。尚未接入站点。
- 完成了全部 63 个主题到韩语，韩国（`ko-kr`）的完整人工翻译，附带匹配的 `.locale-peer-id` 附属文件，且 `just test` 通过。索引（主题 9.7）
  把每个内部主题链接重新映射到对应的韩语文件名，沿用了为 `ar-eg` 和 `bn-bd` 采用的做法。尚未接入站点。
- 添加印地语，印度（`hi-id`）作为完整翻译的语言区域，全部 63 个主题，做法是把现有的印地语（`hi-001`）译文逐字复制到带有国家标记的语言区域代码下，
  因为标准印地语没有需要单独手工翻译的、独立的印度特有变体。尚未接入站点。
- 完成了全部 63 个主题到孟加拉语，孟加拉国（`bn-bd`）的完整人工翻译，附带匹配的 `.locale-peer-id` 附属文件，且 `just test` 通过。尚未接入站点。
- 完成了全部 63 个主题到阿拉伯语，埃及（`ar-eg`）的完整人工翻译，附带匹配的 `.locale-peer-id` 附属文件，且 `just test` 通过。尚未接入站点。
- 完成了全部 63 个主题到德语，德国（`de-de`）的完整人工翻译，附带匹配的 `.locale-peer-id` 附属文件，且 `just test` 通过。尚未接入站点。
- 在三个语言区域中完成了全部 63 个主题的完整人工翻译：威尔士语（`cy-001`）、中文（`zh-cn`）和印地语（`hi-001`），每个都附带匹配的 `.locale-peer-id` 附属文件，
  且 `just test` 通过。
- 又有两个计划中的翻译语言区域，威尔士语 - 英国（`cy-gb`）和中文（`zh-001`），被添加到 `spec/locales-for-global-sharing-with-svelte/locales.tsv` 和
  `spec/locales.md`（现在是十三个计划中的语言区域，之前是十一个），并且 `zh-cn` 此前未定的本族语名称确定为 中文。站点的 `LOCALE_LABELS` 获得了相应条目
  （`cy-gb`：“Cymraeg (Prydain Fawr)”，`zh-001`：“中文”，`zh-cn`：“中文 (中国)”）。目前只有基础设施：这些语言区域都没有 `locales/<code>/` 目录或已翻译的内容。
- 书以四个语言区域发布在 `locales/` 下：`en-gb-oxendict`（英式英语，牛津拼写；手写的源头）、`en-001`（国际英语）、`en-gb`
  （主流英式英语）和 `en-us`（美式英语）。`en-001`、`en-gb` 和 `en-us` 由新的 `tools/localize.py` 从 `en-gb-oxendict` 机械派生；参见
  `spec/locales.md`。`docs/` 已不复存在；`spec/`、`AGENTS.md`、`tests/validate.py`、`tools/gen_nav.py` 和 `tools/stats.py` 中对它的每处引用现在都指向 `locales/<locale>/`。
- 添加了两个 Claude Code 技能：`software-engineering-metrics-skill`（面向把书中指导应用于自己团队的读者）和
  `software-engineering-metrics-maintainer-skill`（面向添加或编辑主题的贡献者），位于 `skills/` 下，并镜像到 `.claude/skills/`。
- 把已发布网站的源代码移入本仓库，作为 `software-engineering-metrics.github.io/`，此前它是一个独立仓库。它现在直接从仓库根目录读取 `locales/`，
  而不是从旁边检出的副本。根目录的 `.github/workflows/deploy.yml` 在每次推送到 `main` 时验证站点仍能构建，
  然后向 `software-engineering-metrics.github.io` 仓库发送 `repository_dispatch`（该仓库保留为一个薄的部署外壳，因为 GitHub Pages 只会从名称与之完全相同的仓库提供那个裸域名），
  由它检出这个单体仓库、构建站点并部署。
- 按照新的 `spec/locales-for-global-sharing-with-svelte/` 子规格，为已翻译（而不只是拼写派生）的语言区域添加了基础设施：`tools/gen_locale_peer_ids.py` 给每个
  内容文件一个 `.locale-peer-id` 附属文件，在各语言区域间相同，未来的翻译语言区域（带有自己的原文字母 slug）可以用它来解析
  “这个页面在语言区域 X 中”，而不是按 slug 匹配；`tests/validate.py` 检查每个附属文件都存在且一致。`spec/locales.md` 记录了十个计划中的翻译语言区域（阿拉伯语、孟加拉语、威尔士语、
  西班牙语、法语、印地语、印度尼西亚语、葡萄牙语、俄语、乌尔都语和中文 - 中国）。在站点方面，`scripts/locales.mjs` 获得了 `LOCALE_LABELS`/`localeLabel()`（每个计划中语言区域的显示名称，
  在路由之前就位）和 `sortedLocaleEntries()`（未来的语言区域列表应使用的排序顺序），而 `src/lib/i18n.js` 提取了每个 `.svelte` 组件此前用英文硬编码的界面外壳字符串（导航、侧边栏、分页器、选择器、
  页脚、跳转链接），通过 `ui(locale)` 传递，对于没有自己译文的语言区域则回退到英文。
- 用 [Lily Design System](https://lilydesignsystem.com/) 的 `@lilydesignsystem/svelte-picker-bar` 取代了站点手工制作的、仅限语言区域的标题栏控件：一个真正的主题选择器
  （浅色/深色，通过新的 `static/assets/themes/{light,dark}.css`）、真正的语言区域选择器（接入本站基于 URL 的路由，而不是它默认仅限 lang/dir 的行为）、
  一个文字大小选择器（Lily 的七级刻度）和一个分享选择器（电子邮件、Mastodon、复制链接）。通过 `pnpm-workspace.yaml` 的 overrides，把 `@lilydesignsystem/svelte-{theme,locale,text-size,share}-picker` 固定在
  `^0.1.2`，把 `@lilydesignsystem/svelte-headless` 固定在 `^0.2.0`，绕开 `svelte-picker-bar` 0.1.0 自身依赖范围中的一个真实的已发布缺陷
  （参见每个选择器的 `CHANGELOG.md`“0.1.2”，以及本站的 `AGENTS.md`）。
- 删除了主页的统计行（部分/主题/“Free Always”）及其“How to read it”一节，并把“Browse the nine parts”卡片网格换成了普通的项目符号列表。

### Changed

- 添加了 `scripts/generate-sitemap.mjs`，它在 `pnpm build` 结束时运行，并根据预渲染的页面写出 `sitemap.xml`（仅限规范的语言区域 URL，不包含两个字母别名的重复项），
  使 `robots.txt` 中的 `Sitemap:` 行能够解析。
- 添加了主题 2.8，精益价值流指标（来自经典精益价值流图的前置时间、处理时间、周期时间、完整且准确的百分比和节拍时间，
  外加滚动吞吐良率的计算），置于排队论之后。拉取请求与代码评审指标从 2.8 移到 2.9，DORA 指标主题从 2.9 移到 2.10。
  全书中受影响的每一处交叉引用都已更新。
- 把第 2 部分从“Delivery and Flow Metrics”改名为“Flow Metrics”，并围绕 Mik Kersten 的流动框架重新组织。添加了四个新主题：2.1 流动框架、2.2 流动项目（功能、缺陷、
  风险、债务）、2.3 流动速度与流动分布，以及 2.4 流动时间与流动负载。四个单独的 DORA 指标主题（部署频率、前置时间、变更失败率、
  恢复时间）被合并为一个参考主题 2.9 DORA 指标框架，并移到该部分末尾。流动效率与在制品被重新编号为 2.5，排队论主题
  （原 2.9）被改名并重新编号为 2.7 排队论。周期时间（2.6）以及拉取请求与代码评审指标（2.8）保持原编号。全书、术语表、公式参考、
  成熟度自评和前言中的每一处交叉引用都已更新以保持一致。

### Added

- 初始版本：8 个部分中的 45 个内容主题，外加前言和 7 个主题的附录（第 9 部分），涵盖 DORA 和 SPACE 框架、代码与质量指标、产品与业务指标、
  可靠性与安全指标，以及生成式 AI 对工程指标的影响。
- 从姊妹项目 `software-engineering-guide` 镜像来的仓库基础设施：规格驱动的 `spec/`（index、structure、conventions、牛津拼写、路线图）、`tests/validate.py` 中的验证套件、
  `tools/gen_nav.py` 中的导航生成器、一个 `justfile`、在 `docs/contributing/` 下带有贡献者指引的 `AGENTS.md`、
  `CONTRIBUTING.md`，以及本变更日志。
- `spec/structure.md`，测试据以检查文件的规范主题清单。
- `docs/examples/` 中的两个具体示例：一份填好的指标章程和一份仪表盘规格。

## 历史

本书是从规格向外构建的：九部分结构先在 `spec/structure.md` 中声明，然后每个主题依据 `docs/contributing/chapter-template.md` 中的共享模板撰写，
`tests/validate.py` 则全程强制执行结构和内部风格。

## 本文件的约定

- 把变更归入 **Added**、**Changed**、**Fixed**、**Removed** 或 **Deprecated** 之下。
- 条目要简短而具体。尽可能每条一行。
- 这里同样不要使用长破折号；测试也会检查本文件。
