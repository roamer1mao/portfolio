# Portfolio Site

Vite、Vanilla JavaScript、CSSで作られた1ページのポートフォリオサイトです。

## 構成

```text
.
├── index.html          # HTMLエントリ
├── public/             # そのまま配信する静的ファイル（favicon.svg、favicon-32.png、apple-touch-icon.png）
├── src/main.js         # 表示内容と画面の挙動
├── src/scene.js        # ヒーローの3Dシーン（three.js、遅延読み込み）
├── src/cockpit.svg     # ヒーロー手前の運転席
├── src/code.js         # ヒーローより下のコード背景（canvas）
├── src/style.css       # スタイル
├── vite.config.js      # ベースパス（BASE 環境変数）
├── .github/workflows/  # GitHub Pages へのデプロイ
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
- ベースパスはデプロイ時にリポジトリ名から自動で決まる（手元でサブパスを試すなら `BASE=/名前/ bun run build`）。

## GitHub Pagesへの公開

`main` へ push すると `.github/workflows/deploy.yml` がビルドして公開します。

1. GitHub でリポジトリを作り、`main` を push する
2. Settings → Pages → Source を **GitHub Actions** にする
3. Actions タブで `Deploy to Pages` が成功したら `https://<ユーザー名>.github.io/<リポジトリ名>/` で見られる
   （リポジトリ名が `<ユーザー名>.github.io` なら `/` 直下）
