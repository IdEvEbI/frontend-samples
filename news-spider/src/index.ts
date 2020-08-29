import axios from 'axios'

class NewsSpider {
  /// 爬取网站地址
  private url = 'http://news.163.com/'

  /** 开始爬取新闻排行榜 */
  startSpiderTopNews() {
    const html = this.getRawHTML()
  }

  /** 获取原始 HTML 内容 */
  private async getRawHTML() {
    const result = await axios.get(this.url)
    console.log(result.data.toString())

    return result.data.toString()
  }
}

const spider = new NewsSpider()
spider.startSpiderTopNews()
