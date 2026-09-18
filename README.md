# Portfolio Site

Vite、Vanilla JavaScript、CSSで作られた1ページのポートフォリオサイトです。

## 構成

```text
.
├── index.html          # HTMLエントリ
├── public/             # そのまま配信する静的ファイル
├── src/main.js         # 表示内容と画面の挙動
├── src/style.css       # スタイル
├── package.json        # 開発・ビルドコマンド
└── bun.lock            # Bunの依存関係ロック
```

## セットアップ

```bash
bun install
```

Node.js/npmを使う場合は `npm install` でもセットアップできます。ロックファイルを
不用意に混在させないため、通常は既存の `bun.lock` に合わせてBunを使います。

## ローカル開発

```bash
bun run dev
```

Viteが表示したローカルURLをブラウザで開いて確認します。

## ビルドと確認

```bash
bun run build
bun run preview
```

生成物は `dist/` に出力されます。`dist/` と `node_modules/` はGit管理しません。

## 公開前の確認

- `src/main.js` の名前、紹介、リンク、連絡先を本人用の内容に更新する。
- 外部リンクとモバイル表示を確認する。
- `bun run build` が成功することを確認する。
- 公開先の設定に合わせてViteのベースパスが必要か確認する。

GitHub Pagesへ公開する場合は、リポジトリのPages設定とデプロイ方法を決めてから
公開用ワークフローを追加してください。
