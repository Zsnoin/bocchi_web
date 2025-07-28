<template>
  <div class="wallpaper-app">
    <div class="hero-section">
      <h1 ref="titleRef" class="app-title">波奇壁纸</h1>
      <p ref="subtitleRef" class="app-subtitle">精美的壁纸，为您的设备增添色彩</p>
    </div>

    <div ref="ctaRef" class="download">
      <a href="https://gitee.com/zsnoin-can/new-wall-paper-apk/blob/master/wallpaper.apk" target="_blank"> 安卓地址 </a>
      <a href="https://gitee.com/zsnoin-can/desktop_exe" target="_blank"> Windows地址 </a>
      <a href="https://gitee.com/zsnoin-can/new-wall-paper" target="_blank"> 安卓开源地址 </a>
      <a href="https://gitee.com/zsnoin-can/windows_wallpaper" target="_blank"> Windows开源地址 </a>
    </div>

    <div class="features-section">
      <div v-for="(feature, index) in features" :key="index" :ref="(el) => setFeatureRef(el, index)"
        class="feature-card">
        <h3>
          <span>{{ feature.icon }}</span>
          <span>{{ feature.title }}</span>
        </h3>
        <p>{{ feature.description }}</p>
      </div>
    </div>

    <h2 class="title">超分辨率工具</h2>
    <div ref="tools_details" class="tools_details">
      核心作用是提升低分辨率图像的清晰度：它能在放大画面的同时智能补充细节，避免单纯缩放导致的 “马赛克”
      现象，既优化低清内容在高清设备上的视觉体验（如修复老照片），也为设计师、创作者提供素材修复与质量提升的辅助，更在安防、医疗、卫星遥感等领域助力细节识别与分析，最终实现 “化模糊为清晰”，突破低分辨率内容的实用限制。
    </div>
    <a ref="tools_download" href="https://gitee.com/zsnoin-can/wallpaper_tools" target="_blank"> 点击前往下载 </a>


    <h2 class="title">手机端预览图</h2>
    <div class="previewPhone">
      <Phone v-for="i in images" :url="i"></Phone>
    </div>
    <h2 class="title">PC端预览图</h2>
    <div class="previewPC">
      <PC v-for="i in pcImages" :url="i"></PC>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import Phone from '@/components/Phone.vue';
import PC from '@/components/pc.vue';
import m1 from '@/assets/images/phone/1.jpg';
import m2 from '@/assets/images/phone/2.jpg';
import m3 from '@/assets/images/phone/3.jpg';
import m4 from '@/assets/images/phone/4.jpg';
import m5 from '@/assets/images/phone/5.jpg';
import m6 from '@/assets/images/phone/6.jpg';
import p1 from '@/assets/images/pc/1.jpg';
import p2 from '@/assets/images/pc/2.jpg';
import p3 from '@/assets/images/pc/3.jpg';
import p4 from '@/assets/images/pc/4.jpg';
import p5 from '@/assets/images/pc/5.jpg';
import p6 from '@/assets/images/pc/6.jpg';

const images = [m1, m2, m3, m4, m5, m6];
const pcImages = [p1, p2, p3, p4, p5, p6];

// 定义元素引用
const titleRef = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)
const featureRefs = ref<HTMLElement[]>([])
const tools_details = ref<HTMLElement | null>(null)
const tools_download = ref<HTMLElement | null>(null)


// 功能特性数据
const features = ref([
  {
    icon: '🎨',
    title: '高质量壁纸',
    description: '提供4K超高清壁纸，适配各种设备屏幕'
  },
  {
    icon: '🔄',
    title: '每日更新',
    description: '每天都有新的精美壁纸推送'
  },
  {
    icon: '📱',
    title: '多设备支持',
    description: '支持安卓手机、平板、windows电脑'
  },
  {
    icon: '📚',
    title: '聚合 N+ 壁纸源',
    description: '海量壁纸源，提供不同风格、主题的壁纸'
  }
])

// 设置功能卡片引用
const setFeatureRef = (el: any, index: number) => {
  if (el) {
    featureRefs.value[index] = el as HTMLElement
  }
}

// 页面加载时执行动画
onMounted(() => {
  // 初始化元素透明度为0
  gsap.set([titleRef.value, subtitleRef.value, tools_details.value, tools_download.value], { opacity: 0 })
  gsap.set(featureRefs.value, { opacity: 0, y: 0 })
  gsap.set(ctaRef.value, { opacity: 0 })

  // 创建时间线动画
  const tl = gsap.timeline()
  const tl2 = gsap.timeline()



  // 标题动画
  tl.to(titleRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out"
  })

  // 副标题动画
  tl.to(subtitleRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out"
  })

  // CTA按钮动画
  tl2.to(ctaRef.value, {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    ease: "power2.out"
  })

  // 功能卡片动画
  featureRefs.value.forEach((el) => {
    tl.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.5,
    })
  })



  tl2.to(tools_details.value, {
    opacity: 1,
    duration: 1,
    ease: "power2.out"
  })
  tl2.to(tools_download.value, {
    opacity: 1,
    duration: 1,
    ease: "power2.out"
  })


})
</script>

<style scoped lang="scss">
.wallpaper-app {
  --col: 6;
  --colPC: 4;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  min-height: 100vh;

  a {
    width: 200px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    padding: 10px 20px;
    border-radius: 5px;
    transition: background 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      cursor: pointer;
      transition: background 0.3s ease;
      text-decoration: none;
      color: #fff;
      border-radius: 5px;
    }
    
  }

  .hero-section {
    text-align: center;
    padding: 20px;

    .app-title {
      font-size: 30px;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      margin: 10px 0;
    }

    .app-subtitle {
      font-size: 20px;
      margin-bottom: 0px;
      opacity: 0.9;
    }
  }

  .download {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 17px;
    margin: 10px 0;
  }


  .features-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin-bottom: 30px;

    .feature-card {
      background-color: rgba(255, 255, 255, 0.084);
      margin: 10px;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;

      h3 {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      p {
        margin-top: 10px;
      }
    }
  }

  .tools_details {
    background-color: rgba(255, 255, 255, 0.084);
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    text-indent: 2em;

    &:first-letter {
      font-size: 1.5em; // 或者您想要的任何尺寸
      font-weight: bold; // 可选：加粗效果
    }
  }



  .previewPhone {
    display: grid;
    width: 100%;
    overflow: hidden;
    grid-template-columns: repeat(var(--col), 1fr);
    gap: 10px;
  }

  .previewPC {
    display: grid;
    width: 100%;
    overflow: hidden;
    grid-template-columns: repeat(var(--colPC), 1fr);
    gap: 10px;
  }

  .title {
    font-size: 30px;
    position: relative;
    padding-left: 10px;
    margin: 50px 0 20px 0;

    &::before {
      content: '';
      display: block;
      width: 5px;
      height: 20px;
      position: absolute;
      background: orangered;
      bottom: -10px;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 2px;
      margin-bottom: 10px;
    }
  }
}

/* 1. 超小屏手机（如 iPhone SE、小屏安卓，宽度 ≤ 360px） */
@media (max-width: 300px) {
  .wallpaper-app {
    --col: 1;
    /* 单列布局，避免内容挤压 */
    --colPC: 1;
    /* 统一列数，适配极小屏幕 */
  }
}

/* 2. 小屏手机（宽度 361px ~ 600px，如 iPhone 12/13） */
@media (min-width: 301px) and (max-width: 600px) {
  .wallpaper-app {
    --col: 2;
    /* 双列布局，平衡显示数量与清晰度 */
    --colPC: 2;
    /* 小屏下 PC 端逻辑列数同步双列 */
  }
}

/* 3. 平板竖屏/中屏手机（宽度 601px ~ 900px，如 iPad mini 竖屏） */
@media (min-width: 601px) and (max-width: 900px) {
  .wallpaper-app {
    --col: 3;
    /* 三列布局，利用中等屏幕空间 */
    --colPC: 2;
    /* PC 端逻辑列数保持双列（避免内容过密） */
  }
}

/* 4. 平板横屏/小屏笔记本（宽度 901px ~ 1200px，如 iPad Pro 横屏、13寸笔记本） */
@media (min-width: 901px) and (max-width: 1200px) {
  .wallpaper-app {
    --col: 4;
    /* 四列布局，适配小屏桌面设备 */
    --colPC: 3;
    /* PC 端逻辑列数调整为 3 列，平衡密度 */
  }
}

/* 5. 中等桌面屏幕（宽度 1201px ~ 1500px，如 24寸显示器） */
@media (min-width: 1201px) and (max-width: 1500px) {
  .wallpaper-app {
    --col: 5;
    /* 五列布局，充分利用屏幕空间 */
    --colPC: 4;
    /* 保持默认 PC 列数，避免内容过散 */
  }
}


/* 可选：平板横屏特殊适配（如 768px 常见平板宽度） */
@media (min-width: 768px) and (max-width: 900px) {
  .wallpaper-app {
    --col: 3;
    /* 与 601-900px 规则一致，可单独微调 */
    --colPC: 2;
  }
}
</style>