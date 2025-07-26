<template>
    <div ref="previewRef" class="preview-section box">
        <div class="device-mockup">
            <img class="img" :src="props.url" alt="">
            <div class="carme">
                <div class="detail"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const previewRef = ref<HTMLElement | null>(null)
const props = defineProps({
    url: {
        type: String,
        required: true
    }
})

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(previewRef.value, { opacity: 0.3, scale: 0.5 })
    // 创建时间线动画
    gsap.to(previewRef.value, {
        scrollTrigger: {
            trigger: previewRef.value,
            scrub: true,
            onEnter: () => {
                gsap.to(previewRef.value, { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" })
            },
            onEnterBack: () => {
            },
            onLeave: () => {
            },
            onLeaveBack: () => {
                gsap.to(previewRef.value, { opacity: 0.3, scale: 0.5, duration: 0.8, ease: "power2.out" })
            },
            // onUpdate: (self) => { // 在start和end区域内滚动位置改变时触发
            // },
        },
    })

})
</script>

<style lang="scss" scoped>
.preview-section {
    width: 100%;
    display: flex;
    justify-content: center;
    --bw: 10px;

    .device-mockup {
        position: relative;
        width: 100%;
        background: #333;
        border-radius: 20px;
        padding: var(--bw) var(--bw) calc(var(--bw)/2) var(--bw);
        box-sizing: border-box;

        .img {
            width: 100%;
            height: auto;
            aspect-ratio: 0.45;
            object-fit: contain;
            border-radius: 20px;
        }

        .carme {
            position: absolute;
            top: 4%;
            left: 50%;
            transform: translateX(-50%);
            width: 10px;
            height: 10px;
            background: rgba(127, 127, 127, 0.441);
            border-radius: 20px;
            pointer-events: none;
            display: flex;
            justify-content: center;
            align-items: center;

            .detail {
                width: 5px;
                height: 5px;
                background: #ffffff43;
                border-radius: 50%;
            }
        }
    }
}

@media (max-width: 900px) {
    .preview-section {
        --bw: 8px;
    }
}

@media (max-width: 600px) {
    .preview-section {
        --bw: 4px;
    }
}
</style>