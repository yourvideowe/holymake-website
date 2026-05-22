# Holy make 吼莉行銷 — 官方網站

## 📁 檔案結構

```
holymake/
├── index.html          # 首頁（Hero、服務、定價、文章預覽、CTA）
├── blog.html           # 文章列表頁（搜尋 + 分類篩選）
├── blog/
│   └── article.html    # 文章詳細頁（所有文章共用此模板）
├── admin/
│   └── index.html      # 後台管理（密碼保護）
└── assets/
    └── data/
        └── site.js     # 網站資料（文章、案例）
```

## 🚀 部署到 GitHub Pages

### 步驟一：建立 GitHub Repository
1. 前往 [github.com](https://github.com) 登入帳號
2. 點「New repository」
3. 名稱輸入：`holymake` 或 `holymake.github.io`
4. 設為 **Public**
5. 點「Create repository」

### 步驟二：上傳所有檔案
**方法 A — 網頁上傳（簡單）：**
1. 在 Repository 頁面點「uploading an existing file」
2. 把所有檔案拖拉上去
3. 記得保持資料夾結構（blog/、admin/、assets/ 資料夾）

**方法 B — Git 指令：**
```bash
git init
git add .
git commit -m "初始化 Holy make 網站"
git remote add origin https://github.com/你的帳號/holymake.git
git push -u origin main
```

### 步驟三：開啟 GitHub Pages
1. 進入 Repository → **Settings**
2. 左側選「Pages」
3. Source 選「Deploy from a branch」
4. Branch 選「main」，資料夾選「/ (root)」
5. 點「Save」

幾分鐘後，網站就會上線在：
`https://你的帳號.github.io/holymake/`

---

## 🔐 後台管理

網址：`https://你的網域/admin/index.html`

預設密碼：`holymake2025`

**修改密碼**：打開 `admin/index.html`，找到這行改成你的密碼：
```javascript
const ADMIN_PASSWORD = 'holymake2025';
```

### 後台功能
- ✅ **新增文章**：填入標題、分類、URL slug、內文（支援 HTML）
- ✅ **刪除文章**：一鍵刪除，有確認提示
- ✅ **預覽文章**：直接在新分頁開啟

> ⚠️ 注意：文章資料儲存在瀏覽器 localStorage，更換瀏覽器或清除快取會遺失。如需永久儲存，建議整合 Contentful CMS 或 Notion API。

---

## 🔗 LINE@ 連結設定

在以下位置更換成你的 LINE@ 連結：
- `index.html` → 搜尋 `line.me/R/ti/p/@holymake`
- `admin/index.html` → 同上

---

## 🌐 SEO 設定

每篇文章的 meta title 和 description 會由 JS 自動從文章資料填入。

首頁 SEO：修改 `index.html` 頂部的 `<meta>` 標籤。

---

## 🎨 品牌色彩

```css
--orange: #E07030;    /* 主色 */
--brown:  #A05828;    /* 深棕 */
--cream:  #F5F0E8;    /* 奶油 */
--dark:   #2C1A0A;    /* 深色文字 */
```
