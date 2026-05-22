// Holy make 吼莉行銷 - 網站共用資料 & 工具函數

// ── 工具函數 ──────────────────────────────────────
function saveData(key, data) {
  try { localStorage.setItem('hm_' + key, JSON.stringify(data)); } catch(e) { console.warn('saveData error', e); }
}

function loadData(key, fallback) {
  try {
    const v = localStorage.getItem('hm_' + key);
    return v ? JSON.parse(v) : fallback;
  } catch(e) { return fallback; }
}

// ── 預設文章資料 ──────────────────────────────────
const SITE_DATA = {
  articles: [
    {
      id: 1,
      title: "為什麼你的IG沒有流量？短影音才是2025年的解法",
      excerpt: "很多小品牌花錢下廣告，卻忽略了最免費的流量來源——真實的短影音。本篇告訴你如何用日常生活吸引對的人。",
      category: "短影音行銷",
      tags: ["短影音", "IG行銷", "小商家"],
      date: "2025-05-01",
      slug: "why-no-ig-traffic",
      content: "<p>你有沒有這樣的經驗？花了好幾個小時做了一張精美的 IG 貼圖，結果按讚不到 10 個人。</p><p>這不是你的問題，是策略的問題。</p><h2>為什麼圖片的觸及越來越低？</h2><p>IG 和 TikTok 的演算法在 2023 年後大幅改變，開始優先推送「短影音」給陌生人看。這代表什麼？<br>你的靜態貼文，大部分只有「已追蹤你的人」能看到。</p><p>但短影音（Reels）會主動推給還不認識你的人。這就是為什麼很多素人一夜爆紅的關鍵。</p><h2>那要拍什麼？</h2><p>最有效的短影音，不是精心設計的廣告，而是<strong>真實的日常片段</strong>——工作現場、一個你學到的知識點、一個真實發生的故事。</p><p>人們追蹤的是「人」，不是「品牌」。</p><h2>如何開始？</h2><p>你不需要專業設備。一支手機、好的光線、清楚的表達，就夠了。Holy make 吼莉行銷就是幫你做到這件事——<strong>把你的真實生活，變成吸引客戶的內容</strong>。</p>"
    },
    {
      id: 2,
      title: "一條龍短影音服務是什麼？給你看完整流程",
      excerpt: "從腳本、拍攝、剪輯到上傳，我們全包。你只需要做你自己，其他交給我們。",
      category: "服務介紹",
      tags: ["服務流程", "短影音製作", "外包"],
      date: "2025-04-20",
      slug: "one-stop-short-video",
      content: "<p>很多人問：「一條龍服務到底包含什麼？我還需要做什麼？」</p><p>答案很簡單：<strong>你只需要出現</strong>。</p><h2>完整流程</h2><ol><li><strong>品牌訪談</strong>：我們先聊聊你是誰、你的客戶是誰、你想傳達什麼</li><li><strong>腳本規劃</strong>：依據你的個性和品牌，設計適合你說的腳本</li><li><strong>實地拍攝</strong>：到你的工作場域或生活空間拍攝真實畫面</li><li><strong>後製剪輯</strong>：加字幕、配樂、調色，讓影片更吸睛</li><li><strong>上傳規劃</strong>：依最佳時機安排發布，並協助設定標籤</li></ol><h2>一個月能拍幾支？</h2><p>依方案不同，每月 4～15 支。我們建議<strong>每週至少 1 支</strong>，讓演算法記住你。</p>"
    },
    {
      id: 3,
      title: "個人品牌新手必看：從 0 開始建立你的社群影響力",
      excerpt: "沒有粉絲基礎也沒關係。了解這 5 個關鍵步驟，讓你的品牌從零開始穩定成長。",
      category: "個人品牌",
      tags: ["個人品牌", "社群經營", "新手入門"],
      date: "2025-04-05",
      slug: "personal-brand-from-zero",
      content: "<p>你不需要有 10 萬粉絲，才能讓品牌有價值。<strong>1000 個精準粉絲，比 10 萬路人更有影響力</strong>。</p><h2>步驟一：定義你的「唯一性」</h2><p>你跟別人有什麼不同？不一定是技術，可能是你的個性、你的背景、你的觀點。</p><h2>步驟二：選定一個平台，先做深</h2><p>不要同時經營 5 個平台。先在一個地方做出成績，再擴展。</p><h2>步驟三：持續輸出，建立信任</h2><p>社群不是廣告牆，是你與受眾的對話。定期分享你的知識、過程、甚至失敗。</p><h2>步驟四：讓內容找到人</h2><p>用對的 hashtag、對的時間發文、對的內容格式，讓演算法幫你推廣。</p><h2>步驟五：有一個「行動號召」</h2><p>每支影片都要讓觀眾知道下一步做什麼——加入 LINE、看更多影片、詢問服務。</p>"
    }
  ]
};

// ── 初始化：首次執行時寫入預設資料 ────────────────
(function init() {
  if (!localStorage.getItem('hm_articles')) {
    saveData('articles', SITE_DATA.articles);
  }
})();
