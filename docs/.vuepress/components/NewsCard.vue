<template>
  <div class="news-card" @click="openLink">
    <!-- <img :src="image" alt="news-image" /> -->
    <img :src="image || 'http://localhost:8080/images/s3.png'" />
    <div class="news-info">
      <h3>{{ title }}</h3>
      <p>{{ date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    openLink() {
      if(this.url){
        window.open(this.url, "_blank");
      }
    }
  }
}
</script>

<style>
.news-card {
  display: flex;
  flex-direction: column;
  align-items: left;
  /* border: 1px solid #ccc; */
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(50, 50, 150, 0.15);
  padding: 0px;
  cursor: pointer;
  height: 320px;
}

.news-card img {
  width: 100rem;
  height: 70%;
  /* 変更 */
  /* object-fit: contain;  */
  object-fit: cover;
  object-position: center;
  border-radius: 10px 10px 0 0;
  pointer-events: none;
}

.news-info {
  margin-top: 10px;
  padding: 0 30px 0px 30px;
  display: flex;
  justify-content: space-between;
}

.news-info h3 {
  font-size: 1.6rem;
}

.news-info p {
  align-self: flex-start;
  color: #999;
  font-size: 1.2rem;
}
</style>
