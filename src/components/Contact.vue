<template>
        <!-- contact container -->
        <section class="contact-container" id="contact-container" >
            <div class="container">
                <span class="heading">{{data.main.contacttitle}}</span>
                <p>{{data.main.contactmessage}}</p>
                <div class="about-contents">
                    <div class="about-one">
                        <div class="contact" v-for="contact in data.main.contact" v-bind:key="contact">
                            <i :class="contact.className"></i>
                            <span class="card-title">{{contact.name}}</span>
                            <span class="card-info">{{contact.url}}</span>
                        </div>
                        
                    </div>
                    <div class="about-two">
                        <div class="contact-form">
                            <form id="contact-form">
                                <div class="single-form">
                                    <input type="text" name="name" placeholder="Name" class="">
                                </div>
                                <div class="single-form">
                                    <input type="text" name="email" placeholder="Email" class="">
                                </div>
                                <div class="single-form">
                                    <textarea name="message" placeholder="Message" class=""></textarea>
                                </div>
                                <div class="single-form">
                                    <button class="main-btn" type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                        <div class="location-map">
                            <iframe
                            :src="data.main.mapaddress"
                                width="100%" height="250px" style="border:0;" allowfullscreen=""
                                loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
import data from '../static/api/data.json';

export default {
    data() {
        return {
            data:data,
        }
    },
}
</script>

<style lang="scss" scoped>

</style>