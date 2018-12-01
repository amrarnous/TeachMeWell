<template>
    <div class="why-us">
        <h1 class="page-title">Why Us</h1>
        <div class="reasons-container">
            <div class="reason">
                <div class="reason-svg">
                    <img src="../assets/why-us-1.svg" class="img-responsive" alt="">
                </div>
                <div class="reason-content">
                    <div class="title">
                        <h2>Reason title 1</h2>
                    </div>
                    <div class="description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin mattis lacinia justo. Fusce wisi. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Mauris elementum mauris vitae tortor. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Etiam bibendum elit eget erat. Phasellus rhoncus. Integer pellentesque quam vel velit. 
                        </p>
                    </div>
                </div>
            </div>
            <div class="reason">
                <div class="reason-svg">
                    <img src="../assets/why-us-2.svg" class="img-responsive" alt="">

                </div>
                <div class="reason-content">
                    <div class="title">
                        <h2>Reason title 1</h2>
                    </div>
                    <div class="description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin mattis lacinia justo. Fusce wisi. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Mauris elementum mauris vitae tortor. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Etiam bibendum elit eget erat. Phasellus rhoncus. Integer pellentesque quam vel velit. 
                        </p>
                    </div>
                </div>
            </div>
            <div class="reason">
                <div class="reason-svg">
                    <img src="../assets/why-us-3.svg" class="img-responsive" alt="">
                </div>
                <div class="reason-content">
                    <div class="title">
                        <h2>Reason title 1</h2>
                    </div>
                    <div class="description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin mattis lacinia justo. Fusce wisi. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Mauris elementum mauris vitae tortor. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Etiam bibendum elit eget erat. Phasellus rhoncus. Integer pellentesque quam vel velit. 
                        </p>
                    </div>
                </div>
            </div>
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
        h1 {
            animation-name: fadeIn;
            animation-duration: 1s;
        }
        .why-us {
            margin: auto;
            width: 80%;
            .reasons-container {
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;

                .reason {
                    @media only screen and (min-width: 991px){
                        max-width: 320px;
                    }
                    animation-name: fadeUp;
                    animation-duration: 1s;
                    padding: 10px;
                    margin: 1em auto;
                    box-shadow: 2px 0px 14px rgba(0,0,0,0.46);
                    .reason-svg {
                        text-align: center;
                        img {
                            margin: auto;
                        }
                    }
                    .reason-content {
                        padding: 5px;
                        .title {
                            font-size: 1em;
                            color: $dark-blue;
                            h2 {
                                margin:0;
                            }
                        }
                        .description {
                            font-size: 0.8em;
                            color: $black;
                            line-height: 1.6em;
                        }
                    }
                }
            }
        }
    @keyframes fadeIn{
        
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes fadeUp {
        from {
            opacity: 0;
            transform: translateY(100%);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>