<template>
    <div class="navbar">
        <div class="navbar-brand">
            <h1>
                <router-link to="/">
                    TeachMeWell
                </router-link>
            </h1>
        </div>
        <div class="navbar-collapse">
            <div class="navbar-links">
                <ul>
                    <li>
                        <router-link to="/">Welcome</router-link>
                    </li>
                    <li>
                        <router-link to="/why-us">Why Us</router-link>
                    </li>
                    <li>
                        <router-link to="/learning-path">Learning Path</router-link>
                    </li>
                    <li>
                        <router-link to="/contact-us">Contact Us</router-link>
                    </li>
                </ul>
            </div>
            <div class="register">
                <router-link to="/register">Register</router-link>
            </div>
        </div>
        <div  class="navbar-mobile-trigger" @click="openSideNav">
            <img src="../assets/menu.svg" width="30" alt="">
        </div>
        <div class="navbar-mobile" id="mobile-nav">
                <div class="close" @click="closeNavbar">
                    <div class="close-btn">
                        &times;
                    </div>
                </div>
               <div class="navbar-links">
                <ul>
                    <li>
                        <router-link to="/">Welcome</router-link>
                    </li>
                    <li>
                        <router-link to="/why-us">Why Us</router-link>
                    </li>
                    <li>
                        <router-link to="/learning-path">Learning Path</router-link>
                    </li>
                    <li>
                        <router-link to="/contact-us">Contact Us</router-link>
                    </li>
                </ul>
            </div>
            <div class="register">
                <router-link to="/register">Register</router-link>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>
<script>
export default {
    data: function(){
        return {

        }
    },
    methods: {
        openSideNav(){
            let navbar = document.getElementById('mobile-nav');
            navbar.style.width= "250px";
        },
        closeNavbar(){
            let navbar = document.getElementById('mobile-nav');
            navbar.style.width= "0";
        }
    }
}
</script>

<style lang="scss" scoped>
    $white: #FBFBFB;
    $black: #222;
    $dark-blue: #0D3BB2;
    $light-blue: #4579FF;
    $light-blue-1: #2C66FF;
    $linear-gradient: linear-gradient(rgba(69, 121, 255, 1), rgba(44, 102, 255, 1));
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        animation-name: fromTop;
        animation-duration: 1.5s;
        width: 80%;
        margin: auto;
        .navbar-brand {
            flex: 1;
            h1 {
                font-size: 1.7em;
                 margin:0;
                a {
                    color: $dark-blue;
                    text-decoration: none;
                    &:active {
                        color: $dark-blue;
                    }
                }
            }
        }
        .navbar-collapse {
            @media only screen and (max-width: 991px){
                display: none;
            }
            flex: 4;
            
            .navbar-links {
                float: left;
                padding: 10px;
                ul {
                    margin: 0;
                    padding:0;
                    list-style: none;
                    li {
                        margin: auto 10px;
                        display: inline-block;
                        a {
                            text-decoration: none;
                            color: $black;
                            font-size: 1em;
                            position: relative;
                            &:before {
                                content: '';
                                position: absolute;
                                left:0;
                                bottom:0;
                                height:2px;
                                width:0;
                                background: $linear-gradient;
                                border-radius: 20px;
                                z-index: -1;
                                transition: .3s all;
                            }
                            &:hover {
                                color: $dark-blue;
                                &:before {
                                    width: 100%;
                                }
                            }
                        }
                    }
                }
            }
            .register {
                float: right;
                a {
                    padding: 10px;
                    background: $linear-gradient;
                    border-radius: 20px;
                    color: $white;
                    width: 150px;
                    text-align: center;
                    display: block;
                    text-decoration: none;
                    box-shadow: 1px 1px 5px rgba(34,34,34,0.4);
                }
            }
        }
        .navbar-mobile {
            position: fixed;
            width: 0px;
            height: 100%;
            background: $white;
            right: 0;
            top:0;
            z-index: 9000;
            box-shadow: 4px 4px 14px rgba(34,34,34,0.4);
            transition: .3s all;
            .close {
                position: relative;
                text-align: right;
                .close-btn {
                    padding: 10px;
                    font-size: 1.6rem;
                    color: red;
                    cursor: pointer;
                }
            }
            .navbar-links {
                padding-top: 10px;
                li {
                    display: block;
                    margin: 20px auto;
                    a {
                        color: $black;
                        text-decoration: none;
                        
                        &:hover {
                        color: $dark-blue;
                        }
                    }
                }
            }
            .register {
                padding: 10px;
                a {
                    margin: auto;
                    text-align: center;
                    display: block;
                    text-decoration: none;
                    background: $dark-blue;
                    color: $white;
                    padding: 10px;
                    box-shadow: 4px 4px 14px rgba(34,34,34,0.4);
                }
            }
        }
        .navbar-mobile-trigger {
            display: none;
            cursor: pointer;
            @media only screen and (max-width: 991px){
                display: block;
            }
        }
    }
</style>


