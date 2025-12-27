# Broadcast - Markdownスライド管理

このリポジトリは、Markdown形式のスライドとその関連リソースを管理するためのプロジェクトです。

## フォルダ構成

```
broadcast/
├── slides/              # スライドファイルのディレクトリ
│   ├── slide-1.md       # スライドファイル1
│   ├── slide-2.md       # スライドファイル2
│   └── ...
├── images/              # 画像ファイルのディレクトリ
│   ├── image1.png       # 画像ファイル
│   ├── image2.jpg
│   └── ...
├── templates/           # スライドテンプレート
│   └── theme_01.css
└── README.md
```

## 使い方

1. 新しいスライドを作成する場合：
   - `slides/` ディレクトリに直接 `.md` ファイルを作成
   - 例: `slides/my-presentation.md`

2. 画像の参照：
   - `images/` ディレクトリに画像を配置
   - スライドファイルからは相対パスで参照
   - 例: `![画像](../images/example.png)`

## 推奨ツール

- [x] **Marp**: Markdownからスライドを生成
- [ ] **reveal.js**: HTMLベースのスライドプレゼンテーション
- [ ] **Slidev**: 開発者向けのスライドツール

## Marpテーマの使用方法

### カスタムテーマ（theme_01）を使用する

スライドファイルのフロントマターでテーマを指定：

```markdown
---
marp: true
theme: theme_01
paginate: true
---
```

### VS Codeで使用する場合

1. Marp for VS Code拡張機能をインストール
2. ワークスペースの設定（`.vscode/settings.json`）でテーマパスが既に設定されています
3. スライドファイルを開き、`theme: theme_01` を指定
4. テーマが自動的に認識され、プレビューで確認できます

### Marp CLIで使用する場合

```bash
# PDFにエクスポート
marp slide.md --theme-set templates/theme_01.css --pdf

# HTMLにエクスポート
marp slide.md --theme-set templates/theme_01.css --html
```

## GitHub Pagesでの公開

このリポジトリはGitHub Actionsを使用して自動的にGitHub Pagesにデプロイされます。

### デプロイの流れ

1. `main`ブランチにプッシュすると、自動的にGitHub Actionsが実行されます
2. Marp CLIを使用して、`slides/`ディレクトリ内のすべてのMarkdownファイルをHTMLとPDFに変換します
3. 生成されたファイルがGitHub Pagesに自動デプロイされます

### GitHub Pagesの有効化

初回のみ、GitHubリポジトリの設定でGitHub Pagesを有効化してください：

1. リポジトリの「Settings」→「Pages」に移動
2. 「Source」で「GitHub Actions」を選択
3. これで、ワークフローが実行されると自動的にデプロイされます

### 生成されるファイル

- HTML版: `https://<username>.github.io/<repository>/<slide-name>.html`
- PDF版: `https://<username>.github.io/<repository>/<slide-name>.pdf`
- 一覧ページ: `https://<username>.github.io/<repository>/`

