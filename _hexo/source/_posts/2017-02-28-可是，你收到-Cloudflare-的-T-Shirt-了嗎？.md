---
title: 可是，你收到 Cloudflare 的 T-Shirt 了嗎？
tags:
  - 中文
date: 2017-02-28 00:00:00
categories:
description: '<p>月頭時才剛發生 <a href="https://about.gitlab.com/2017/02/01/gitlab-dot-com-database-incident/" target="_blank" rel="external">Gitlab 的誤刪 Database 事件</a>，想不到相隔不足一個月科技界又出了個出了 <strong>Cloudbleed</strong> 事件。</p>
<ul>
<li><a href="https://www.inside.com.tw/2017/02/28/cloudbleed-here-is-a-list-of-websites-confirmed-to-have-been-affected-by-cloudfare-bug" target="_blank" rel="external">CloudFlare 遭「滴血攻擊」：如果你註冊這些網站，請立即修改密碼！</a>  </li>
<li><a href="https://www.bnext.com.tw/article/43336/major-cloudflare-bug-leaked-sensitive-data-from-customers-websites" target="_blank" rel="external">CloudFlare傳資料外洩，恐成近年最大規模網路資安事件</a>  </li>
</ul>
<p>在 <a href="https://blog.cloudflare.com/incident-report-on-memory-leak-caused-by-cloudflare-parser-bug/" target="_blank" rel="external">Cloudflare 這篇不明覺厲的 PR 網誌下</a>，獲得最多 upvote 的一個留言竟然是跟內容完全無關的一句：</p>
<blockquote>
<p>I’d say that’s worth more than a t-shirt.</p>
</blockquote>
<p>嗯？什麼 t-shirt</p>'
---

月頭時才剛發生 [Gitlab 的誤刪 Database 事件][0]，想不到相隔不足一個月科技界又出了個出了 __Cloudbleed__ 事件。

- [CloudFlare 遭「滴血攻擊」：如果你註冊這些網站，請立即修改密碼！][1]  
- [CloudFlare傳資料外洩，恐成近年最大規模網路資安事件][2]  

在 [Cloudflare 這篇不明覺厲的 PR 網誌下][^cloudbleed]，獲得最多 upvote 的一個留言竟然是跟內容完全無關的一句：

> I’d say that's worth more than a t-shirt.

{% asset_img "Screenshot 2017-08-18 17.17.32.png" "screenshot" %}

嗯？什麼 t-shirt

原來 Cloudflare 早年在 hackerone 上立下「縣賞令」，歡迎任何人為旗下產品檢測安全漏洞，非誠勿擾。  

畢竟 Cloudflare 貴為業界龍頭，客戶遍報全球大小互聯網上市、私人企業，自然是十分注重產品的可靠性，能有今天的商譽及市佔率可不是開玩笑的。

故此，在互聯網上廣發英雄帖，誠邀 hacker 們回報錯漏是一個明智之舉。事實上今次的漏洞係由 Google 的 Project Zero Team 發現的。平常的公司怕是花錢也請不到 Google 的工程師為他們除錯吧？

- [CloudFlare: Vulnerability Disclosure via HackerOne Incident report on memory leak caused by Cloudflare parser bug][3]

對於受理的錯誤回報，Cloudflare 自然少不免會有**謝禮**啦。是的！就是上文提及的 T-Shirt。

而這不是一件普通的 T-shirt，據官方的描述：

> A limited edition CloudFlare bug hunter t-shirt. *CloudFlare employees don't even have this shirt*. It's only for you all. *Wear it with pride*: you're part of an exclusive group.”

{% asset_img "Screenshot 2017-08-18 17.15.14.png" "screenshot" %}

嘩嘩嘩，如此如此、這般這般吸引，難怪大家都十分好奇到底那班 Engineer 收到這傳說等級的稀有 T-shirt 沒啦。
十分好奇 T-shirt 長什麼樣是嗎？ 🤔

連 Google 大神也差點兒找不到：

{% raw %}
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Finally it arrived. Venator Errorum. Thank you, <a href="https://twitter.com/Cloudflare">@cloudflare</a>. <a href="https://twitter.com/hashtag/bugbounty?src=hash">#bugbounty</a> <a href="http://t.co/kcehKun9kJ">pic.twitter.com/kcehKun9kJ</a></p>&mdash; ᴾᵉᵗᵉʳ ᴶᵃʳⁱᶜ (@peterjaric) <a href="https://twitter.com/peterjaric/status/530746758788546561">November 7, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
{% endraw %}

You win, Cloudflare.

[0]: https://about.gitlab.com/2017/02/01/gitlab-dot-com-database-incident/
[0.1]: https://technews.tw/2017/02/03/gitlab-com-database-incident/

[^cloudbleed]: https://blog.cloudflare.com/incident-report-on-memory-leak-caused-by-cloudflare-parser-bug/

[1]: https://www.inside.com.tw/2017/02/28/cloudbleed-here-is-a-list-of-websites-confirmed-to-have-been-affected-by-cloudfare-bug
[2]: https://www.bnext.com.tw/article/43336/major-cloudflare-bug-leaked-sensitive-data-from-customers-websites

[3]: https://hackerone.com/cloudflare
