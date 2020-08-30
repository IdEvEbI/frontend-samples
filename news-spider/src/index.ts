import fs from 'fs'
import path from 'path'
import axios from 'axios'
import iconv from 'iconv-lite'
import cheerio from 'cheerio'

/** 新闻信息接口 */
interface NewsInfo {
  title: string
  url: string
  count: number
}

/** 新闻数据接口（记录爬虫返回结果） */
interface NewsData {
  time: number
  data: NewsInfo[]
}

/** 新闻列表的 JSON 数据接口 */
interface NewsJSONData {
  [time: number]: NewsInfo[]
}

/**
 * 网易新闻排行爬虫
 */
class TopNewsSpider {
  /// 爬取网站地址
  private url = 'http://news.163.com/'
  /// 数据文件保存目录
  private dir = path.resolve(__dirname, '../data')
  /// 数据文件路径
  private filePath = path.resolve(this.dir, 'news.json')

  /** 开始爬取工作 */
  async startSpiderProcess() {
    const html = await this.getRawHTML()
    const data = this.getTopNews(html)
    const json = this.generateJSONData(data)

    fs.writeFileSync(this.filePath, JSON.stringify(json))
  }

  /** 生成 JSON 数据 */
  private generateJSONData(data: NewsData): NewsJSONData {
    let content: NewsJSONData = {}

    // 1. 判断目录是否存在，如果不存在新建目录
    if (!fs.existsSync(this.dir)) fs.mkdirSync(this.dir)

    // 2. 如果文件存在，先读取之前保存过的内容
    if (fs.existsSync(this.filePath)) {
      content = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
    }

    // 3. 追加新的爬取内容
    content[data.time] = data.data

    return content
  }

  /** 获取新闻排行列表 */
  private getTopNews(html: string): NewsData {
    const $ = cheerio.load(html)

    const list = $('.mod_hot_rank ul li')
    const news: NewsInfo[] = []

    list.map((idx, el) => {
      const title = $(el).find('a').text()
      const url = $(el).find('a').attr('href') ?? ''
      const count = parseInt($(el).find('span').text())

      news.push({ title, url, count })
    })

    return {
      time: new Date().getTime(),
      data: news,
    }
  }

  /** 获取原始 HTML 内容 */
  private async getRawHTML() {
    const { data }: { data: Buffer } = await axios.get(this.url, {
      responseType: 'arraybuffer',
    })

    return iconv.decode(data, 'gbk')
  }
}

const spider = new TopNewsSpider()

spider.startSpiderProcess()
