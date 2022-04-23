<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import Prism from 'prismjs'
import '../assets/prism.css'

interface Props {
  compName: string
  demoName: string
}
const props = defineProps<Props>()

const sourceCode = ref('')
const codeVisible = ref(false)
const previewSourceCode = computed(() =>
  sourceCode.value.replace(/'\.\.\/\.\.\/index'/g, `'d-ui'`)
)
const showSourceCode = () => {
  codeVisible.value = !codeVisible.value
}

onMounted(async () => {
  sourceCode.value = (
    await import(
      /* @vite-ignore */ `../../packages/${props.compName}/docs/${props.demoName}.vue?raw`
    )
  ).default
  await nextTick()
  Prism.highlightAll()
})
</script>

<template>
  <div class="d-preview">
    <section>
      <slot></slot>
    </section>

    <div v-show="codeVisible" class="source-code">
      <pre
        class="language-html"
      ><code class="language-html">{{ previewSourceCode }}</code></pre>
    </div>

    <div class="preview-bottom">
      <span name="Code" @click="showSourceCode">查看代码</span>
    </div>
  </div>
</template>

<style lang="less">
pre {
  line-height: 0;
}
.d-preview {
  border: 4px;
  border: 1px dashed #e7e7e7;
  padding: 10px;
  border-bottom: 1px dashed #e7e7e7;

  section {
    margin: 15px;
  }
}
.source-code {
  max-height: 500px;
}
.language-html {
  margin: 0;
  padding: 0 15px;
}
.preview-bottom {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px dashed #e7e7e7;
}
</style>
