<template>
    <Layout>
        <div class="news">
            <div class="news-list">
                <NewsCard v-for="item in $frontmatter.news" :key="item.title" :title="item.title" :image="item.image"
                    :url="item.url" :date="item.date" />
            </div>
        </div>
    </Layout>
</template>
  
<script>
  import NewsCard from "./NewsCard.vue";
  
  export default {
    components: {
      NewsCard,
    },
  };
  </script>
  
<style scoped>
.news {
    max-width: 800px;
    margin: 100px auto 100px auto;
}

.news-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 24px;
    /* align-items: flex-start; */
}
</style>