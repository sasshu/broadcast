const fs = require('fs');
const path = require('path');

// slidesディレクトリをスキャン
const slidesDir = path.join(__dirname, '..', 'slides');
const outputFile = path.join(__dirname, '..', 'docs', 'slides.json');

// 出力ディレクトリが存在しない場合は作成
const docsDir = path.dirname(outputFile);
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// スライドファイルを取得
const slideFiles = fs.readdirSync(slidesDir)
  .filter(file => file.endsWith('.md'))
  .sort();

const slides = [];

for (const file of slideFiles) {
  const filePath = path.join(slidesDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(file, '.md');
  
  // タイトルを抽出
  // フロントマター（---で囲まれた部分）をスキップして最初の#見出しを探す
  let title = filename; // デフォルトはファイル名
  let inFrontmatter = false;
  const lines = content.split('\n');
  
  for (const line of lines) {
    if (line.trim() === '---') {
      inFrontmatter = !inFrontmatter;
      continue;
    }
    
    if (!inFrontmatter && line.trim().startsWith('# ')) {
      title = line.trim().substring(2).trim();
      break;
    }
  }
  
  slides.push({
    filename: filename,
    title: title
  });
}

// JSONファイルに書き出し
fs.writeFileSync(outputFile, JSON.stringify(slides, null, 2), 'utf-8');
console.log(`Generated slides.json with ${slides.length} slide(s)`);

