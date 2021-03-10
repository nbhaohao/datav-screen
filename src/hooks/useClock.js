import { ref, onMounted, onUnmounted } from "vue";

function fixZero(v) {
  return v < 10 ? `0${v}` : v;
}

function dateFilter(v) {
  const m = fixZero(v.getMonth() + 1);
  const d = fixZero(v.getDate());
  return `${v.getFullYear()}-${m}-${d}`;
}

function timeFilter(v) {
  const h = fixZero(v.getHours());
  const m = fixZero(v.getMinutes());
  const s = fixZero(v.getSeconds());
  return `${h}:${m}:${s}`;
}

export default function() {
  const now = new Date();
  const date = ref(dateFilter(now));
  const time = ref(timeFilter(now));
  let task;
  const start = () => {
    task = setInterval(() => {
      const now = new Date();
      date.value = dateFilter(now);
      time.value = timeFilter(now);
    }, 1000);
  };
  onMounted(start);
  onUnmounted(() => {
    task && clearInterval(task);
  });
  return {
    date,
    time
  };
}
