<template>
  <div id="home">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-4 col-12">
          <div class="card shadow" @click="onNavigate('expense-claim')">
            <div class="card-body">
              <div class="card-image pb-3">
                <img
                  src="https://image.flaticon.com/icons/svg/3176/3176361.svg"
                  class="img-fluid"
                  width="100"
                  alt
                />
              </div>
              <h5>Expense Claim</h5>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-12">
          <div class="card shadow" @click="onNavigate('teams-finder')">
            <div class="card-body">
              <div class="card-image pb-3">
                <img
                  src="https://image.flaticon.com/icons/svg/993/993854.svg"
                  class="img-fluid"
                  width="100"
                  alt
                />
              </div>
              <h5>Teams Finder</h5>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-12">
          <div class="card shadow" @click="onNavigate('spinner')">
            <div class="card-body">
              <div class="card-image pb-3">
                <img
                  src="https://image.flaticon.com/icons/svg/3205/3205208.svg"
                  class="img-fluid"
                  width="100"
                  alt
                />
              </div>
              <h5>Spinner</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    onNavigate(location) {
      this.$router.push(`/${location}`);
    },
  },
};
</script>

<style lang="css" scoped>
#home {
  position: relative;
  padding-top: 12rem;
  padding-bottom: 8rem;
  background: linear-gradient(-45deg, #a24bcf, #3498db, #4bc5cf);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

#home .card {
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

#home .card:hover {
  transform: scale(1.02);
}
</style>