<template>
    <div class="learning-path">
        <div class="page-title">
            <h1 class="page-title">Learning Path</h1>
        </div>
        <div class="paths-container">
            <router-link to="/learning-path">
                <div class="path">
                    <div class="path-icon">
                        <img src="../assets/chip.svg" width="45" alt="">
                    </div>
                    <div class="path-name">
                        <p>Path Name</p>
                        
                    </div>
                </div>
            </router-link>
            <router-link to="/learning-path">
                <div class="path">
                    <div class="path-icon">
                        <img src="../assets/chip.svg" width="45" alt="">
                    </div>
                    <div class="path-name">
                        <p>Path Name</p>
                    </div>
                </div>
            </router-link>
            <router-link to="/learning-path">
                <div class="path">
                    <div class="path-icon">
                        <img src="../assets/chip.svg" width="45" alt="">
                    </div>
                    <div class="path-name">
                        <p>Path Name</p>
                    </div>
                </div>
            </router-link>
            <router-link to="/learning-path">
                <div class="path">
                    <div class="path-icon">
                        <img src="../assets/chip.svg" width="45" alt="">
                    </div>
                    <div class="path-name">
                        <p>Path Name</p>
                    </div>
                </div>
            </router-link>
            <router-link to="/learning-path">
                <div class="path">
                    <div class="path-icon">
                        <img src="../assets/chip.svg" width="45" alt="">
                    </div>
                    <div class="path-name">
                        <p>Path Name</p>
                    </div>
                </div>
            </router-link>
            <router-link to="/learning-path">
                <div class="path">
                    <div class="path-icon">
                        <img src="../assets/chip.svg" width="45" alt="">
                    </div>
                    <div class="path-name">
                        <p>Path Name</p>
                        
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    $white: #FBFBFB;
    $black: #222;
    $dark-blue: #0D3BB2;
    $light-blue: #4579FF;
    $light-blue-1: #2C66FF;
    $linear-gradient: linear-gradient(rgba(69, 121, 255, 1), rgba(44, 102, 255, 1));
    .learning-path {
        width: 80%;
        margin: auto;
        .paths-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin: 4em auto;
            a {
                text-decoration: none;
                margin: auto;
                .path {
                    animation-name: blowUp;
                    animation-duration: 1s;
                    padding: 15px;
                    text-align: center;
                    background: $linear-gradient;
                    width: 300px;
                    box-shadow: 2px 2px 15px rgba(0,0,0,0.2);
                    transition: .3s all;
                    margin: 10px auto;
                    &:hover {
                        box-shadow: 4px 4px 20px rgba(0,0,0,0.3);
                    }
                    .path-name {
                        color: $white;
                        margin-top: -10px;
                    }
                }
            }
        }
    }
    @keyframes blowUp {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
</style>
