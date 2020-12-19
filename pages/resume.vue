<template>
  <div class="container">
    <div>
      <h1>RESUME</h1>
      <links />

      <h2>PROJECTS &amp; EXPERIENCE</h2>
      <div
        v-for="item in experience.data"
        :key="item.info"
        class="item"
      >
        <p><b>{{ item.org }}</b><span class="right">{{ item.when }}</span></p>
        <span>{{ item.what }}</span><span class="dim right">{{ item.where }}</span>
        <p v-html="item.info" />
      </div>

      <h2>PUBLICATIONS</h2>
      <div class="item">
        <p><a href="https://arxiv.org/abs/1812.05687"><b>Ablation of a Robot's Brain: Neural Networks Under a Knife</b></a><span class="right">2018</span></p>
        <span>Peter Lillian, Richard Meyes, Tobias Meisen</span>
        <p>
          It is still not fully understood exactly how neural networks are able to solve the complex tasks that have recently pushed AI research forward. We present a novel method for determining how information is structured inside a neural network. Using ablation (a neuroscience technique for cutting away parts of a brain to determine their function), we approach several neural network architectures from a biological perspective. Through an analysis of this method's results, we examine important similarities between biological and artificial neural networks to search for the implicit knowledge locked away in the network's weights.
        </p>
      </div>

      <h2>EDUCATION</h2>
      <div class="item">
        <p><b>University of Southern California</b></p>
        <p>MS in Electrical Engineering (Machine Learning)<span class="right">2018–2020</span></p>
        <pre>
          GPA: 3.8
          Rose Hills Research Scholarship
          Accepted to the Progressive Degree Program
        </pre>
        <p>BS in Computer Engineering and Computer Science<span class="right">2015–2019</span></p>
        <pre>
          GPA: 3.7
          Full-Tuition Trustee Scholarship (Merit-based)
          Photography Minor
        </pre>
      </div>

      <h2>ACHIEVEMENTS &amp; SKILLS</h2>
      <div class="item">
        <p><b>Development</b></p>
        <span>Python (numpy/sklearn/matplotlib/pandas), Tensorflow, Java, C, C++, HTML, JS, Vue, SQL, AWS, Spark, MapReduce, CUDA, OpenMP, Verilog, Docker, Ubuntu, Command Line, vim, tmux, Nginx, Linux Webserver</span>
      </div>
      <div class="item">
        <p><b>Programs</b></p>
        <span>Adobe Suite (Photoshop, Illustrator, AfterEffects, Premiere), Cinema 4D, Cadence Virtuoso</span>
      </div>
      <div class="item">
        <p><b>Other</b></p>
        <span>Public Speaking, Eagle Scout, Writing (won CSPA’s Gold Circle for Best Nonfiction Article)</span>
      </div>

      <h2>INTERESTS</h2>
      <div class="item">
        <p>Artificial Intelligence, <a href='https://www.instagram.com/ptlil/'>Photography</a>, House music, Cr&egrave;me br&ucirc;l&eacute;e, Backpacking, History, Tea, Medieval Scandinavian Art, Sailing, Skiing</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const experience = await $content('resume/experience').fetch()
    return { experience }
  },
  head() {
    return {
      title: 'Peter Lillian\'s Resume'
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  font-weight: normal;
  text-align: left;
  margin-top: 48px;
  p {
    margin-top: 18px;
    b {
      font-size: 24px;
    }
  }
  pre {
    margin-top: 9px;
    font-family: inherit;
  }
  .indent {
    margin-left: 40px;
  }
}

.dim {
  font-size: 16px;
}
</style>
