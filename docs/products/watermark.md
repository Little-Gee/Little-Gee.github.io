# 小小快捷加水印

功能如名字所示

为什么前面要加个小小呢？

因为不加的话备案通不过……

<img src="/imgs/products/watermark-qrcode.jpg" width="300" style="margin-bottom:20px" />

<img src="/imgs/products/watermark.png" width="500" />

目前只是初版，功能后续慢慢加

<script setup>
import { ref } from 'vue'

const tasks = ref([
  {
    taskName: '基础快速加水印',
    taskList:[
      { label: '上传图片', done: true },
      { label: '输入水印文字', done: true },
      { label: '生成水印（不可调整）', done: true },
      { label: '保存图片', done: true },
      { label: '小程序分享功能', done: false },
    ]
  },
  {
    taskName: '高级选项',
    taskList:[
      { label: '平铺水印的密度（数量 3✖️3 -> 6✖️6）', done: false },
      { label: '颜色（默认几个，高级选项里再设置自定义的）', done: false },
      { label: '大小', done: false },
      { label: '透明度', done: false },
      { label: '角度', done: false },
    ]
  },
  {
    taskName: '单个水印选项（不铺满）',
    taskList:[
      { label: '左上左下右上右下居中', done: false },
      { label: '自定义位置', done: false },
    ]
  },
  {
    taskName: '批量加',
    taskList:[
      { label: '批量上传', done: false },
    ]
  }
])
</script>

<div v-for="(task, index) in tasks" :key="task.taskName">
  <div>{{`${index + 1}.${task.taskName}`}}</div>
  <ul>
    <li v-for="task in task.taskList" :key="task.label">
      <input type="checkbox" v-model="task.done" disabled />{{ task.label }}
    </li>
  </ul>
</div>
