<style scoped lang="less">
     .indexPage{
       padding-top: 52px;
       background: #f6f6f6;
       box-sizing: border-box;

         /*头部*/
         .header{
           overflow: hidden;
           display: flex;
           align-items: center;
           position: fixed;
           top: 0;left: 0;
           width: 100%; height: 52px;
           background: #fff;
           border-bottom: 1px solid rgba(26,26,26,0.06);
           transition: all .2s ease-in;
           transform: translateY(-52px);

           /*active*/
           &.active{
             transform: translateY(0);
           }

           /*icon*/
           .icon{
             margin-left: 16px;
           }

           /*下载app*/
           .download-app{
             flex: 1;
             margin-right:26px;
             text-align: right;
             padding-right: 26px;
             border-right: 1px solid #ebebeb;
             color: #0084ff;
           }

           /*list-down*/
           .list-down{
               margin-right: 26px;
           }
         }

         /*content*/
          .content{

            /*item*/
            .item{
              margin-bottom: 10px;
              padding: 20px 20px 5px;
              background: #fff;
              box-shadow: 0 0 3px rgba(0,0,0,0.2);

              &:last-child{
                margin-bottom: 0;
              }

              /*标题*/
              .title{
                margin-bottom: 8px;
                color: #8590a6;
              }

              /*用户*/
              .user{
                display: flex;
                align-items: center;
                margin-bottom: 12px;

                /*用户头像*/
                .avatar{
                  width: 24px;
                  height: 24px;
                  margin-right: 8px;
                }

                /*用户名*/
                .name{
                  font-size: 15px;
                  font-weight: 500;
                  color: rgba(68,68,68);
                }
              }

              /*文章标题*/
              .content-title{
                margin-bottom: 8px;
                font-weight: 500;
                font-size: 20px;
                line-height: 1.4;
                color: rgba(68,68,68);
              }

              /*内容图片*/
              .thumbnail{
                width: 335px;height: 146px;
                margin: 10px 0;
              }

              /*文章内容*/
              .article{
                overflow: hidden;
                max-height: 50px;
                margin-bottom: 2px;
                font-size: 17px;
                line-height: 1.67;
                color: rgba(68,68,68);
              }

              /*用户操作栏*/
              .operate{
                display: flex;
                align-items: center;
                height: 52px;
                box-sizing:border-box;

                .button{
                  height: 32px;
                  padding: 0 12px;
                  line-height: 32px;
                  color: #0084ff;
                  background: rgba(0,132,255,.1);
                  font-size: 14px;
                  cursor: pointer;
                  border: 1px solid transparent;
                  border-radius: 3px;

                  &.active{
                    color: #fff;
                    background: #0084ff;
                  }
                }
                /*点赞*/
                .zan{
                  .button
                }

                /*向下箭头*/
                .none{
                  margin-left: 8px;

                  .button
                }

                /*评论*/
                .recommend{
                  display: flex;
                  align-items: center;
                  margin-left: 16px;
                  font-size: 14px;
                  color: #8590a6;

                  .icon{
                    margin-right: 5px;
                  }
                }

                /*收藏*/
                .collection{
                  display: flex;
                  align-items: center;
                  margin: 0 12px;
                }

                .more{
                  display: flex;
                  align-items: center;
                }
              }
            }
          }
     }
</style>

<template>
  <div class="indexPage">
    <!--头部-->
    <header
      class="header active"
      ref="header">
      <!--知乎图标-->
      <svg
        class="icon"
        viewBox="0 0 200 91"
        width="3.5em"
        height="1.9em"
        fill="#0f88eb"><g><path
          d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
          fill-rule="evenodd"/></g></svg>
      <!--下载App-->
      <div class="download-app">
        下载App
      </div>
      <!--list标签  list down-->
      <svg
        class="list-down"
        fill="#8590a6"
        viewBox="0 0 24 24"
        width="1.5em"
        height="1.5em">
        <path
          d="M3.5 5h16a1.5 1.5 0 0 1 0 3h-16a1.5 1.5 0 0 1 0-3zm0 6h16a1.5 1.5 0 0 1 0 3h-16a1.5 1.5 0 0 1 0-3zm0 6h16a1.5 1.5 0 0 1 0 3h-16a1.5 1.5 0 0 1 0-3z"
          fill-rule="evenodd"/>
      </svg>
    </header>
    <!--main-->
    <main class="content">
      <section
        class="item"
        v-for="item in hot_data"
        :key = "item.id" >
        <!--标题-->
        <div class="title">
          {{ item.title }}
        </div>
        <!--用户-->
        <div class="user">
          <!--用户头像-->
          <img
            class="avatar"
            v-if="item.avatar_url"
            :src="item.avatar_url"
          >
          <div
            class="name"
            v-if="item.avatar_url">
            {{ item.avatar_name }}
          </div>
        </div>
        <!--content-title-->
        <div class="content-title">
          {{ item.qusetion }}
        </div>
        <!--content content-->
        <img
          class="thumbnail"
          v-if="item.content_img"
          :src="item.content_img"
          alt="">
        <div class="article">
          {{ item.content }}
        </div>
        <!--用户操作栏-->
        <div class="operate">
          <!--点赞-->
          <div class="zan">
            <svg
              class="icon"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="0.6em"
              height="0.6em">
              <path
                d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z"
                fill-rule="evenodd"/>
            </svg>
            赞同{{ item.vote }}
          </div>
          <!--向下箭头-->
          <div class="none">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              width="0.6em"
              height="0.6em"><path
                d="M20.044 3H3.956C2.876 3 2 3.517 2 4.9c0 .326.087.533.236.896L10.216 19c.355.571.87 1.143 1.784 1.143s1.429-.572 1.784-1.143l7.98-13.204c.149-.363.236-.57.236-.896 0-1.386-.876-1.9-1.956-1.9z"
                fill-rule="evenodd"/></svg>
          </div>
          <!--评论-->
          <div class="recommend">
            <svg
              class="icon"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"><path
                d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z"
                fill-rule="evenodd"/>
            </svg>
            评论{{ item.remark }}
          </div>
          <!--收藏-->
          <div class="collection">
            <svg
              class="Zi Zi--Star Button-zi"
              fill="#8590a6"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em">
              <path
                d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
                fill-rule="evenodd"/>
            </svg>
          </div>
          <!--more-->
          <div class="more">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em">
              <path
                fill="#8590a6"
                d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                fill-rule="evenodd"/>
            </svg>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<script>
import { getHotData } from '@/utils/api'
import { formatAvatarUrl, formatHotTitle } from '@/utils/utils'

const winScroll = {
  distance: 600, // 临界点
  olds: 0, // 保存上一次scroll时的scrollTop
  news: 0, // 当前scroll时的scrollTop的值
  crts: 0, // 从上往下滑的那一刻的top的值
  gete: false
}
export default {
  name: 'IndexPage',
  data () {
    return {
      after_id: -1,
      hot_data: []
    }
  },
  mounted () {
    // 给window绑定scroll
    window.addEventListener('scroll', this.windowScroll)

    // 加载数据
    this.loadHotData()
  },
  methods: {
    windowScroll () {
      // header 的滑动监听
      const headerScroll = () => {
        // 下滑的时候header会跟着一段距离之后隐藏
        winScroll.news = document.documentElement.scrollTop
        if (winScroll.olds < winScroll.news) {
          // 当从下往上滑的时候 变为 从上往下滑动的时候触发 只在变动的时候触发一次
          if (winScroll.gete === false) {
            window.crts = winScroll.news
            winScroll.gete = true
          }

          // 当达到临界值的时候 隐藏header
          if ((winScroll.news - winScroll.crts) > winScroll.distance) {
            this.$refs.header.className = 'header'
          }
        } else {
          // 当从下往上滑的时候 变为 从上往下滑动的时候触发 只在变动的时候触发一次
          if (winScroll.gete === true) {
            winScroll.crts = winScroll.news
            winScroll.gete = false
          }

          // 当达到临界值的时候 显示header
          if ((winScroll.crts - winScroll.news) > winScroll.distance) {
            this.$refs.header.className = 'header active'
          }
        }
        // 记录上一次的scrollTop
        winScroll.olds = winScroll.news
      }
      headerScroll()
    },
    // 加载热门内容
    loadHotData () {
      getHotData(this.after_id === -1 ? 0 : this.after_id)
        .then(v => {
          v.data.data.forEach(v => {
            this.hot_data.push({
              title: formatHotTitle(v.action_text_tpl, v.actors[0].name),
              avatar_url: formatAvatarUrl(v.target.author.avatar_url, v.actoes[0].type),
              avatar_name: v.target.author.name,
              qusetion: v.target.question ? v.target.question.title : v.target.title,
              content: v.target.excerpt,
              content_img: v.target.thumbnail && formatAvatarUrl(v.target.thumbnail),
              vote: v.target.voteup_count,
              remark: v.target.comment_count
            })
          })
          this.after_id += 7
          console.log(this.hot_data)
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.windowScroll)
  }
}
</script>
