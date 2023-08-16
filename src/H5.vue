<template>
  <el-config-provider namespace="ep">
    <el-container>
      <el-main class="backimg">
        <!-- 走马灯 -->
        <el-carousel arrow="always">
          <el-carousel-item v-for="(item, index) in 5" :key="item">
            <img :src="bannerImgs[index]" />
          </el-carousel-item>
        </el-carousel>
        <el-carousel :autoplay="false" trigger="click" arrow="always">
          <el-carousel-item v-for="(item, index) in 3" :key="item">
            <video width="360" height="270" controls>
              <source :src="videoUrls[index]" type="video/mp4" />
            </video>
          </el-carousel-item>
        </el-carousel>
        <el-row>
          <el-col style="text-align: left">
            <h3>
              <span class="live-title_2PVv">游戏</span
              ><span class="title-icon"></span>
            </h3>
          </el-col>
          <el-col
            :span="7"
            v-for="(o, index) in 3"
            :key="o"
            :xs="7"
            :offset="index > 0 ? 1 : 0"
          >
            <el-card :body-style="{ padding: '0px', borderRadius: '6px' }">
              <img class="card-img" :src="imgs[index + 1]" />
              <div class="bottom">
                <span class="tag">绘画{{ index }}</span>
                <span class="desc">会世团练课 | 总群</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col style="text-align: left">
            <h3>
              <span class="live-title_2PVv">应用</span>
            </h3>
          </el-col>
          <el-col
            :span="7"
            v-for="(o, index) in 3"
            :key="o"
            :xs="7"
            :offset="index > 0 ? 1 : 0"
          >
            <el-card :body-style="{ padding: '0px', borderRadius: '6px' }">
              <img class="card-img" :src="imgs[index]" />
              <div class="bottom">
                <span class="tag">绘画{{ index }}</span>
                <span class="desc">会世团练课 | 总群</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col style="text-align: left">
            <h3>
              <span class="live-title_2PVv">学习</span>
            </h3>
          </el-col>
          <el-col
            :span="7"
            v-for="(o, index) in 2"
            :key="o"
            :xs="7"
            :offset="index > 0 ? 1 : 0"
          >
            <el-card :body-style="{ padding: '0px', borderRadius: '6px' }">
              <img class="card-img" :src="imgs[index + 2]" />
              <div class="bottom">
                <span class="tag">绘画{{ index }}</span>
                <span class="desc">会世团练课 | 总群</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-config-provider>
</template>
  <script>
export default {
  name: "Index",
  data() {
    return {
      imgs: [
        "https://cc.hjfile.cn/cc/img/20220819/2022081904192178210759.jpg?imageView2/2/w/420/format/webp/ignore-error/1",
        "https://cc.hjfile.cn/cc/img/20230103/2023010304284243965929.jpeg?imageView2/2/w/420/format/webp/ignore-error/1",
        "https://cc.hjfile.cn/cc/img/20230720/2023072010084432532230.jpg?imageView2/2/w/420/format/webp/ignore-error/1",
        "https://cc.hjfile.cn/cc/img/20230608/2023060808531524144913.jpeg?imageView2/2/w/420/format/webp/ignore-error/1",
        "https://cc.hjfile.cn/cc/img/20230731/2023073101214855428061.png?imageView2/2/w/420/format/webp/ignore-error/1",
      ],
      bannerImgs: [
        "https://cc.hjfile.cn/cc/img/20230815/2023081509425992443445.jpg?imageView2/2/w/1000/format/webp/ignore-error/1",
        "https://cc.hjfile.cn/cc/img/20230801/2023080102264372834447.jpg?imageView2/2/w/1000/format/webp/ignore-error/1",
        "https://cc.hjfile.cn/cc/img/20230808/2023080804550311489068.png?imageView2/2/w/1000/format/webp/ignore-error/1",
        "https://cc.hjfile.cn/cc/img/20230228/2023022810334458446972.jpg?imageView2/2/w/1000/format/webp/ignore-error/1",
        "https://cc.hjfile.cn/cc/img/20230803/2023080305075785745856.jpg?imageView2/2/w/1000/format/webp/ignore-error/1",
      ],
      videoUrls: [
        "https://record-manual.cctalk.com/record/ba27447fbcde4f0379e50c4148344b61.mp4?auth_key=1692189219-244e864b362b45b5b754cfeb968543ea-0-d0edff11331ce7ea27685cb5b6729930",
        "https://record-manual.cctalk.com/record/ba27447fbcde4f0379e50c4148344b61.mp4?auth_key=1692189235-34474fb473e64b63923e06b24797084b-0-73b9b3261a4afb3c40b44209ed8575b0",
        "https://record-manual.cctalk.com/record/ba27447fbcde4f0379e50c4148344b61.mp4?auth_key=1692189235-34474fb473e64b63923e06b24797084b-0-73b9b3261a4afb3c40b44209ed8575b0",
      ],
    };
  },
};
</script>
  <style scoped>
.ep-main {
  max-width: 1400px;
}
.title-icon {
  background: url(https://n1image.hjfile.cn/res7/2020/07/06/77cda6a48ddb4a32a5660395eacd678e.png)
    no-repeat 0;
  background-size: contain;
  width: 55px;
  height: 30px;
  display: inline-block;
  vertical-align: -6px;
}
.card-img {
  width: 100%;
  height: 100px;
  overflow: hidden;
  border-radius: 6px;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  position: relative;
  background-size: contain;
}

.bottom {
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: block-axis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  margin: 0 4px 4px 4px;
  /* width: 112px; */
  word-break: break-all;
  white-space: normal;
  font-size: 14px;
  line-height: 18px;
  /* height: 36px; */
}

.bottom .tag {
  line-height: 14px;
  font-size: 10px;
  background-color: #464d5c;
  padding: 0 4px;
  vertical-align: 2px;
  margin-right: 4px;
  width: 35px;
  border-radius: 0 4px 6px 4px;
  color: #fff;
}

.bottom .desc {
  text-overflow: ellipsis;
  -webkit-box-orient: block-axis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  margin: 0 0 4px;
  /* width: 112px; */
  word-break: break-all;
  white-space: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 128px;
  display: block;
}
.backimg {
  background-image: url(https://cc.hjfile.cn/cc/img/20230816/2023081604173368132296.png);
  background-size: 100% 100%;
}
</style>
  