<template>
  <el-container>
    <el-aside width="17%" style="background: #fff"></el-aside>
    <el-container>
      <el-main class="backimg">
        <!-- 走马灯 -->
        <div>
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 text="2xl" justify="center">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <el-container>
          <el-main>
            <div class="m-4">
              <el-row :gutter="16" style="padding: 20px 0">
                <el-col>
                  <p style="font-weight: bold; font-size: 20px">游戏</p>
                </el-col>
                <el-col
                  v-for="(o, index) in 3"
                  :key="o"
                  :span="4"
                  :offset="index > 0 ? 1 : 0"
                >
                  <el-card shadow="hover" :body-style="{ padding: '0px' }">
                    <img
                      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                      class="image"
                    />
                    <div class="bottom">
                      <el-button text class="button">Operating</el-button>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
              <el-row :gutter="16" style="padding: 20px 0">
                <el-col>
                  <p style="font-weight: bold; font-size: 20px">应用</p>
                </el-col>
                <el-col
                  v-for="(o, index) in 3"
                  :key="o"
                  :span="4"
                  :offset="index > 0 ? 1 : 0"
                >
                  <el-card shadow="hover" :body-style="{ padding: '0px' }">
                    <img
                      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                      class="image"
                    />
                    <div class="bottom">
                      <el-button text class="button">Operating</el-button>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
              <el-row :gutter="16" style="padding: 20px 0">
                <el-col>
                  <p style="font-weight: bold; font-size: 20px">学习</p>
                </el-col>
                <el-col
                  v-for="(o, index) in 5"
                  :key="o"
                  :span="4"
                  :offset="index > 0 ? 1 : 0"
                >
                  <el-card shadow="hover" :body-style="{ padding: '0px' }">
                    <img
                      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                      class="image"
                    />
                    <div class="bottom">
                      <el-button text class="button">Operating</el-button>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </el-main>
          <el-aside width="400">
            <video width="360" height="270" controls autoplay="autoplay">
              <source
                src="https://record-manual.cctalk.com/15e5dfee45492d4e2b2b73a39c9d599e.mp4?auth_key=1691759999-5be382b762384b17a3ddf13e20a99d2e-0-b062acf950c28e481ef1fe72e933ba82"
                type="video/mp4"
              />
            </video>
          </el-aside>
        </el-container>
      </el-main>
    </el-container>
    <el-aside width="17%" style="background: #fff"></el-aside>
  </el-container>
</template>
  
  <script>
export default {
  name: "Index",
  data() {
    return {
      count: 0,
    };
  },
};
</script>
  <style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin: 6px 0;
  line-height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-image:url(https://cc.hjfile.cn/cc/img/20230815/2023081510454609121153.jpg) ;
  background-size: 100% 100%;
}
</style>
  