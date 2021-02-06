<template>
    <div id="profile">
        <div class="card" id="profile-image">
            <!-- imageURL="https://scontent.fyto1-2.fna.fbcdn.net/v/t1.0-1/p200x200/130744173_10222037405357624_5220377676597486888_o.jpg?_nc_cat=108&ccb=2&_nc_sid=7206a8&_nc_ohc=4vapU5_KfegAX9J-YDG&_nc_ht=scontent.fyto1-2.fna&tp=6&oh=013cdce182fe62fd27ae0ab179462870&oe=6037D1A1" -->
            <b-img
                v-bind="mainProps"
                rounded="circle"
                alt="Circle image"
                src="https://scontent.fyto1-2.fna.fbcdn.net/v/t1.0-1/p200x200/130744173_10222037405357624_5220377676597486888_o.jpg?_nc_cat=108&ccb=2&_nc_sid=7206a8&_nc_ohc=4vapU5_KfegAX9J-YDG&_nc_ht=scontent.fyto1-2.fna&tp=6&oh=013cdce182fe62fd27ae0ab179462870&oe=6037D1A1"
            ></b-img>
        </div>
        <h1>{{ $auth.user.name ? $auth.user.name : 'no name' }}</h1>
        <div id="qr" class="card">
            <img
                src="https://www.disabled-world.com/pics/1/dw-qr-code.png"
                alt="qr-code"
                height="200px"
                width="200px"
                class="block center"
            />
        </div>
        <div class="card" id="services">
            <div class="block center">
                <StreamBubble type="netflix" />
                <StreamBubble type="Amazon" />
            </div>
        </div>
    </div>
</template>

<script>
import StreamBubble from './components/StreamBubble';
export default {
    name: 'Profile',
    data() {
        return {
            name: 'username',
            mainProps: {
                blank: false,
                blankColor: '#777',
                class: 'm1',
            },
        };
    },
    components: {
        StreamBubble,
    },
};
</script>

<style scoped>
#profile {
    width: 300px;
}
.card {
    background-color: ghostwhite;
    border-radius: 10px;
    margin-bottom: 20px;
    height: 250px;
    text-align: center;
}
.block {
    text-align: center;
}
.center {
    margin: auto;
}
#services {
    display: flex;
    flex-direction: row;
}
</style>
